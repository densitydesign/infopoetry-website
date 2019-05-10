/*
 * Settings parameter:
 */
const SPEED           = 10,
      SPEED_ANGULAR   = 20,
      INVERSE_FLUENCY = 5,
      BOTTOM_OFFSET   = 23,
      LEFT_OFFSET     = 18,
      RIGHT_OFFSET    = 18,
      TOP_OFFSET      = 23,
      ANGLE_MAX       = 15;
/*
 * - SPEED: Allow to control the speed of the baloons
 *
 * - SPEED_ANGULAR: Allow to control the speed of the baloons.
 *                  It depends on the SPEED (higher the SPEED,
 *                  higher the SPEED_ANGULAR)
 *
 * - ANGLE_MAX: maximum angle reached by baloons rotation,
 *              both negative/positive:
 *              (-ANGLE_MAX; +ANGLE_MAX)
 *
 * - INVERSE_FLUENCY: Allow to control the frame per second.
 *                    Lower values require more resources.
 *                    1 is the min -> require an update per ms
 *                    20 is a reasonable value.
 *
 * - XXX_OFFSET : Adjust where baloons touch borders.
 *
 */

const canvas = new fabric.Canvas(`c`, {selection: false}),
      div = document.getElementById(`left`);

canvas.hoverCursor = 'pointer';

window.addEventListener("resize", function() {
    resetCanvasSize();
});

d3.tsv("data/result.tsv", function(error, baloons) {
    if(error) {
        throw error;
    }

    let storage = JSON.parse(localStorage.getItem(`saved`));
    if(_.isNull(storage)) {
        localStorage.setItem(`saved`, JSON.stringify(baloons));
    }else{
        baloons = storage;
    }

    const imgPromises      = [],
          baloonPromises   = [],
          animalClasses    = _.uniq(_.map(baloons, b => b["Class"])),
          readLinksPromise = loadSourceLinks();

    for(animalClass of animalClasses) {
        imgContainer[animalClass] = {};
        imgPromises.push(loadImages(animalClass));
    }

    Promise.all([...imgPromises, readLinksPromise]).then(() => {
        for(baloon of baloons) {
            let angle = _.random(0, 359),
                width = getWidth(),
                height = getHeight(),
                xRadius = _.random(0, width / 2),
                yRadius = _.random(0, height / 2),
                delta = deltaGenerator();

            //baloon.id = baloon[`Species ID`];
            baloon.x = Math.cos(angle * Math.PI / 180) * xRadius + width / 2;
            baloon.y = Math.sin(angle * Math.PI / 180) * yRadius + height / 2;
            baloon.angle = _.random(-ANGLE_MAX, ANGLE_MAX);
            baloon.angleDirection = _.random(0, 1) === 1 ? 1 : -1;
            baloon.dx = delta.x;
            baloon.dy = delta.y;
            baloonPromises.push(cloneObject(baloon, IMG).then(baloon => {

                baloon[IMG].on(`mousedown`, () => {
                    let d = baloon,
                        changeText = () => {
                            primo.style(`display`, `none`);
                            more.attr(`href`, `http://www.iucnredlist.org/details/${d['Species ID']}/0`);
                            paragraph.style("display", "block");
                            nomesci.text(`${d["Genus"]} ${d["Species"]}`);
                            anno.text(d["Year assessed"]);

                            let imageName = linkContainer[d['Species ID']] ? d['Species ID'] : 'undefined';
                            if(imageName === 'undefined') {
                                imgCaption.text('Image unavailable');                                
                            }else{
                                imgCaption.text('Image source');
                            }

                            new Promise((resolve, reject) => {
                                $.get(`img/animals/images/${imageName}.png`)
                                    .done(() => {
                                        animalimg.attr(`src`, `img/animals/images/${imageName}.png`);
                                        setTimeout(resolve, 200);
                                    })
                                    .fail(() => resolve());
                            })
                                .then(() => colonna.transition().duration(500).style(`opacity`, 1));

                            linkSource.attr(`href`, linkContainer[d['Species ID']]);

                            disappear.style(`display`, `block`);

                            let nomec = d["Common names (Eng)"];
                            if(_.isEmpty(nomec)) {
                                nomecom.html('');
                            }else{
                                nomecom.html(`<span style='color: #333; font-weight: 300;'>also known as</span> ${nomec}`);
                            }
                            classe.text(d["Class"]);

                            cause.text(_.isEmpty(d["Justification"]) ? d["Threats"] : d["Justification"]);
                        };

                    colonna.transition()
                        .duration(250)
                        .style(`opacity`, 0)
                        .on(`end`, () => {
                            changeText();
                        });

                    _.remove(baloons, d);

                    localStorage.setItem(`saved`, JSON.stringify(baloons));

                    cloneObject(baloon, GIF).then(baloon => {
                        const sprite = baloon[GIF];
                        sprite.set({
                            left: baloon.x - 2,
                            top: baloon.y + 14,
                            angle: baloon.angle,
                            originX: 'center',
                            originY: 'center'
                        });
                        canvas.add(sprite);
                        sprite.play();
                        setTimeout(() => {
                            canvas.remove(d[GIF]);
                        }, 300);
                    });
                    canvas.remove(d[IMG]);
                });

                canvas.add(baloon[IMG]);
            }));
        }
        Promise.all(baloonPromises).then(() => animate());
    })
    
    function animate(time) {
        for(let d of baloons) {
            if((d.dx <= 0 && d.x <= LEFT_OFFSET) || (d.dx >= 0 && d.x >= getWidth() - RIGHT_OFFSET)) {
                d.dx *= -1;
            }

            if((d.dy < 0 && d.y <= TOP_OFFSET) || d.y >= getHeight() - BOTTOM_OFFSET) {
                d.dy *= -1;
            }

            d.x = Math.max(LEFT_OFFSET, Math.min(getWidth() - RIGHT_OFFSET, d.x + d.dx));
            d.y = Math.max(TOP_OFFSET, Math.min(getHeight() - BOTTOM_OFFSET, d.y + d.dy));
            

            if(d.angle >= ANGLE_MAX) {
                d.angleDirection = -1;
            }else if(d.angle <= -ANGLE_MAX) {
                d.angleDirection = 1;
            }
            d.angle += d.angleDirection / (100 / SPEED_ANGULAR);

            d[IMG].set(`left`, d.x);
            d[IMG].set(`top`, d.y);

            d[IMG].setAngle(d.angle);
            d[IMG].setCoords();
        }
        canvas.renderAll();
        setTimeout(animate, INVERSE_FLUENCY);
    }
});

resetCanvasSize();
/*
 * UTILITY FUNCTIONS
 */

const paragraph     = d3.select("#par"),
      disappear     = d3.select("#disappear"),
      primo         = d3.select(".primo"),
      nomesci       = d3.select("#nomesci"),
      anno          = d3.select("#anno"),
      nomecom       = d3.select("#nomecom"),
      classe        = d3.select("#classe"),
      cause         = d3.select("#cause"),
      more          = d3.select("#more"),
      colonna       = d3.select(".colonna-inner"),
      animalimg     = d3.select("#animal-img"),
      linkSource    = d3.select("#linkSource"),
      imgCaption    = d3.select("#imageCaption"),
      imgContainer  = {},
      linkContainer = {};

function imgLoader(type, name) {
    return new Promise((resolve, reject) => {
        fabric[type].fromURL(name, img => {
            img.selectable = false;
            return resolve(img);
        });
    });
}

function loadImages(className) {
    const name = imgChooser[className],
          imgPath = IMG_PATH.replace(IMG_SUB, name),
          gifPath = IMG_PATH.replace(IMG_SUB, `${name}-ex`),
          imgP = imgLoader(IMG, imgPath),
          gifP = imgLoader(GIF, gifPath);
    return Promise.all([imgP, gifP]).then(res => {
        imgContainer[className][IMG] = res[0];
        imgContainer[className][GIF] = res[1];
        return true;
    });
}

function loadSourceLinks() {
    return new Promise((res, rej) => {
        d3.tsv("data/IDList.txt", function(error, elements) {
            if(error) {
                return rej(error);
            }
            _.each(elements, element => {
                linkContainer[element.id] = element.link;
            });
            res();
        });
    });
}

function cloneObject(baloon, type) {
    return new Promise((resolve, reject) => {
        let cloned = _.cloneDeep(imgContainer[baloon.Class][type]);
        cloned.selectable = false;
        cloned.set('originX', 'center');
        cloned.set('originY', 'center');
        baloon[type] = cloned;
        resolve(baloon);
    });
}

function getWidth() {
    return div.clientWidth;
}

function getHeight() {
    return div.clientHeight;
}

function resetCanvasSize() {
    canvas.setWidth(getWidth());
    canvas.setHeight(getHeight());
}

function deltaGenerator (isSin) {
    let degree = _.random(0, 359);
    return {
        x: Math.cos(degree * Math.PI / 180) / (100 / SPEED),
        y: Math.sin(degree * Math.PI / 180) / (100 / SPEED)
    }
}

const imgChooser = {
    "Aves" : 1,
    "Gastropoda" : 2,
    "Mammalia" : 3,
    "Actinopterygii" : 4,
    "Amphibia" : 5,
    "Reptilia" : 6,
    "Arachnida" : 7,
    "Insecta" : 8,
    "Malacostraca" : 9,
    "Bivalvia" : 10,
    "Diplopoda" : 11,
    "Enopla" : 12
}

const IMG_SUB = `XXXXX`,
      IMG_PATH = `img/${IMG_SUB}.png`,
      IMG = `Image`,
      GIF = `Sprite`;
