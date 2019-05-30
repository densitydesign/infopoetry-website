class Stacked {
    constructor(infopoetries) {
        this.infoByYearAndTopic = d3.nest()
            .key(d => d.year)
            .key(d => d.topic)
            .sortKeys(d3.ascending)
            .rollup(l => l.length)
            .entries(infopoetries);
        this.topics = d3.nest()
            .key(d => d.topic)
            .sortKeys(d3.ascending)
            .rollup(l => l.length)
            .entries(infopoetries).map(t => t.key);
        const colors = ['#f5db31', '#e88e24', '#d90b24', '#d0528f', '#93167a', '#0b3483', '#508ec4', '#3bb2b1', '#57c632', '#138a39'];

        const stackedDimensions = document.querySelector('.viz__stacked').getBoundingClientRect();
        const margins = { 'top': 60, 'right': 20, 'bottom': 40, 'left': 80 };
        const containerWidth = Math.round(stackedDimensions.width);
        this.barHeight = 50;
        const containerHeight = this.infoByYearAndTopic.length * this.barHeight + margins.top + margins.bottom;
        this.stackedWidth = containerWidth - margins.left - margins.right;
        this.stackedHeight = containerHeight - margins.top - margins.bottom;

        this.xScale = d3.scaleLinear()
            .range([0, this.stackedWidth]);

        this.yScale = d3.scaleBand()
            .domain(this.infoByYearAndTopic.map(d => d.key))
            .range([0, this.stackedHeight])
            .padding(0.4);

        this.colorScale = d3.scaleOrdinal()
            .domain(this.topics)
            .range(colors);

        this.customXAxis = function(g, normalized) {
            const xAxis = d3.axisTop(this.xScale);
            normalized ? xAxis.ticks(10, ".0%") : xAxis.ticks(10);
            g.transition().duration(500).call(xAxis);
            g.attr('font-family', 'Libre Baskerville, serif')
                .attr('font-size', '0.8rem');
            g.selectAll(".domain").remove();
        }

        const $stacked = d3.select('.viz__stacked');

        const $svg = $stacked.append('svg')
            .attr('width', containerWidth)
            .attr('height', containerHeight);

        const $g = $svg.append('g')
            .attr('transform', `translate(${margins.left} ${margins.top})`);
        
        this.$viz = $g.append('g');

        // draw the x-axis
        this.xGroup = $g.append('g')
            .call(g => {
                this.customXAxis(g, false);
            });

        // draw the y-axis
        $g.append('g')
            .call(d3.axisLeft(this.yScale).tickSizeOuter(0))
            .call(g => {
                g.attr('font-family', 'Libre Baskerville, serif')
                    .attr('font-size', '0.8rem');
                g.selectAll(".tick")
                    .append('line')
                    .attr('stroke', 'currentColor')
                    .attr('y1', `-${this.barHeight * 0.35}`)
                    .attr('y2', this.barHeight * 0.35);
                g.selectAll(".domain").remove();
            });

        // draw legend
        const $stackedLegend = d3.select('.legend__container')
            .selectAll('div')
            .data(this.topics)
            .join('div')
                .attr('class', d => d.toLowerCase().replace(/\s/, "-"))
                .classed('legend__topics', true);

        $stackedLegend.append('div')
            .datum(d => d)
            .classed('legend__square', true)
            .style('background-color', d => this.colorScale(d));
        
        $stackedLegend.append('p')
            .datum(d => d)
            .text(d => d);
    }

    drawStacked(normalized) {
        this.stackedTopics = d3.stack()
            .keys(this.topics)
            .value((d, key) => {
                let match = d.values.find(el => el.key == key);
                return match != undefined ? match.value : 0;
            })
            .offset(normalized ? d3.stackOffsetExpand : d3.stackOffsetNone)
            (this.infoByYearAndTopic);

        this.xScale.domain([0, d3.max(this.stackedTopics, d => d3.max(d, d => d[1]))])

        // draw the stacked barcharts
        this.$viz.selectAll('g.stacked__topics')
        .data(this.stackedTopics)
        .join('g')
            .attr('fill', d => this.colorScale(d.key))
            .attr('class', d => d.key.toLowerCase().replace(/\s/, "-"))
            .classed('stacked__topics', true)
        .selectAll('rect')
        .data(d => d)
        .join(
                enter => enter.append('rect')
                    .attr('x', d => this.xScale(d[0]))
                    .attr('y', d => this.yScale(d.data.key))
                    .attr('width', d => this.xScale(d[1]) - this.xScale(d[0]))
                    .attr('height', this.yScale.bandwidth()),
                update => update.call(
                    update => update.transition().duration(500)
                        .attr('x', d => this.xScale(d[0]))
                        .attr('width', d => this.xScale(d[1]) - this.xScale(d[0]))
                    )
            );
            
        
        // update x-axis
        this.xGroup.call(g => {
                this.customXAxis(g, normalized);
            });

    }
}

(function () {
    const $viz = document.querySelector('.viz__matrix');
    if ($viz != null && window.innerWidth > 576) {
        d3.json('/assets/data/infopoetries.json').then(function (data) {
            let stackedViz = new Stacked(data.infopoetries);
            stackedViz.drawStacked(false);
            drawMatrix(data.infopoetries);

            document.querySelector('.stacked__absolute').onclick = () => {
                stackedViz.drawStacked(false);
            }

            document.querySelector('.stacked__normalized').onclick = () => {
                stackedViz.drawStacked(true);
            }

            document.querySelectorAll('.legend__topics').forEach(el => {
                const thisTopic = el.getAttribute('class').replace(" legend__topics", "");
                el.onmouseover = () => {
                    document.querySelectorAll('.stacked__topics').forEach(group => {
                        group.classList.add('faded');
                    })
                    document.querySelector(`.stacked__topics.${thisTopic}`).classList.remove('faded');
                };
                el.onmouseout = () => {
                    document.querySelectorAll('.stacked__topics').forEach(group => {
                        group.classList.remove('faded');
                    })
                };
            })

        }).catch(function (error) {
            console.log(error);
        })
    }

})();

function drawMatrix(infopoetries) {
    const infoByMedium = d3.nest()
        .key(d => d.medium)
        .sortKeys(d3.ascending)
        .entries(infopoetries);
    const infoByYear = d3.nest()
        .key(d => d.year)
        .entries(infopoetries);
    const yearsNumber = infoByYear.length;
    const infoMatrix = d3.cross(infoByYear, infoByMedium);
    // console.log(infoMatrix);
    const $matrix = d3.select('.viz__matrix');
    const packWidth = Math.round(document.querySelector('.matrix__legend').getBoundingClientRect().width);
    const heightRatio = window.innerWidth > 835 ? 0.5 : 0.7;
    const packHeight = Math.round(packWidth * heightRatio);
    const radius = 4;

    // draw column headers
    $matrix.append('div')
        .classed('matrix__columns', true)
        .selectAll('p')
        .data(infoByMedium)
        .join('p')
        .text(d => d.key);

    // draw row headers
    $matrix.append('div')
        .classed('matrix__rows', true)
        .style('grid-row', `2 / span ${yearsNumber}`)
        .selectAll('p')
        .data(infoByYear)
        .join('p')
        .text(d => d.key);

    // draw circle packs containers
    const $svgs = $matrix.append('div')
        .classed('matrix__container', true)
        .style('grid-row', `2 / span ${yearsNumber}`)
        .selectAll('svg')
        .data(infoMatrix)
        .join('svg')
        .classed('matrix__pack', true);

    // draw circle packs
    $svgs.each(function ([year, medium]) {
        const packData = year.values.filter(el => el.medium == medium.key);
        const simulation = d3.forceSimulation(packData)
            .force('center', d3.forceCenter(packWidth / 2, packHeight / 2))
            .force('charge', d3.forceManyBody().strength(5))
            .force('collision', d3.forceCollide(radius));

        const circle = d3.select(this).selectAll('circle')
            .data(packData)
            .join('circle')
            .attr('r', radius);

        simulation.on('tick', () => {
            circle.attr('cx', d => d.x)
                .attr('cy', d => d.y);
        });
    });
}