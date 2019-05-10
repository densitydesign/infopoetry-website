








function citysound() {
    "use strict";
    document.getElementById('cityCompSound').currentTime = 0;
    document.getElementById('cityCompSound').play();
    
}

document.getElementById("Berlin_1_").addEventListener("webkitAnimationEnd", citysound);
document.getElementById("Birmingham").addEventListener("webkitAnimationEnd", citysound);
document.getElementById("Valencia").addEventListener("webkitAnimationEnd", citysound);
document.getElementById("Minsk_1_").addEventListener("webkitAnimationEnd", citysound);
document.getElementById("Patras").addEventListener("webkitAnimationEnd", citysound);
document.getElementById("Lione_1_").addEventListener("webkitAnimationEnd", citysound);
document.getElementById("Poznan").addEventListener("webkitAnimationEnd", citysound);
document.getElementById("Brno").addEventListener("webkitAnimationEnd", citysound);
document.getElementById("Florence_1_").addEventListener("webkitAnimationEnd", citysound);
document.getElementById("Warsaw").addEventListener("webkitAnimationEnd", citysound);
document.getElementById("Trieste_1_").addEventListener("webkitAnimationEnd", citysound);
document.getElementById("Gent").addEventListener("webkitAnimationEnd", citysound);
document.getElementById("BanjaLuka_1_").addEventListener("webkitAnimationEnd", citysound);
document.getElementById("Bologna_1_").addEventListener("webkitAnimationEnd", citysound);
document.getElementById("Milan_1_").addEventListener("webkitAnimationEnd", citysound);
document.getElementById("Brescia_1_").addEventListener("webkitAnimationEnd", citysound);















document.getElementById("TetovoCt_1_").addEventListener("webkitAnimationEnd", citysound);


document.getElementById("Budapest_1_").addEventListener("webkitAnimationEnd", citysound);

document.getElementById("Lasi").addEventListener("webkitAnimationEnd", citysound);
document.getElementById("Timisoara").addEventListener("webkitAnimationEnd", citysound);



document.getElementById("Lviv").addEventListener("webkitAnimationEnd", citysound);
document.getElementById("Minsk_1_").addEventListener("webkitAnimationEnd", citysound);
document.getElementById("Brno").addEventListener("webkitAnimationEnd", citysound);


document.getElementById("Warsaw").addEventListener("webkitAnimationEnd", citysound);
document.getElementById("Poznan").addEventListener("webkitAnimationEnd", citysound);

document.getElementById("Mannheim_1_").addEventListener("webkitAnimationEnd", citysound);



document.getElementById("Toulouse_1_").addEventListener("webkitAnimationEnd", citysound);

document.getElementById("Madrid").addEventListener("webkitAnimationEnd", citysound);
document.getElementById("London").addEventListener("webkitAnimationEnd", citysound);
document.getElementById("Manchester").addEventListener("webkitAnimationEnd", citysound);


document.getElementById("BanjaLuka_1_").addEventListener("webkitAnimationEnd", citysound);



function unlock() {
    "use strict";
    document.getElementsByTagName("body")[0].style.overflow = "scroll";
    document.getElementsByTagName("body")[0].style.scroll = "yes";
    document.getElementById("intro").style.display = "none";
}

document.getElementById("TetovoCt_1_").addEventListener("webkitAnimationEnd", unlock);

function enableinfo() {
    "use strict";
    document.getElementById("onbtn").classList.remove("outInfoStart");
    document.getElementById("audiomenu").classList.remove("disabledaudiomenu");
    
}

document.getElementById("TetovoCt_1_").addEventListener("webkitAnimationEnd", enableinfo);












/*BREATH1*/

function breath1(){
    
    timeoutId = window.setTimeout(function(){
            document.getElementById('breath_1').currentTime = 0;    
            document.getElementById('breath_1').play();  
    }, 0);
         
   
        
}

function breath1Stop(){
    
   
    window.clearTimeout(timeoutId)
    document.getElementById('breath_1').pause();
}

/*BREATH2*/

function breath2(){
    
    timeoutId = window.setTimeout(function(){
            document.getElementById('breath_2').currentTime = 0;    
            document.getElementById('breath_2').play();  
    }, 0);
         
   
        
}

function breath2Stop(){
    
   
    window.clearTimeout(timeoutId)
    document.getElementById('breath_2').pause();
}

/*BREATH3*/

function breath3(){
    
    timeoutId = window.setTimeout(function(){
            document.getElementById('breath_3').currentTime = 0;    
            document.getElementById('breath_3').play();  
    }, 0);
         
   
        
}

function breath3Stop(){
    
   
    window.clearTimeout(timeoutId)
    document.getElementById('breath_3').pause();
}

/*BREATH4*/

function breath4(){
    
    timeoutId = window.setTimeout(function(){
            document.getElementById('breath_4').currentTime = 0;    
            document.getElementById('breath_4').play();  
    }, 0);
         
   
        
}

function breath4Stop(){
    
   
    window.clearTimeout(timeoutId)
    document.getElementById('breath_4').pause();
}



/* 
    *******************
    *     NATIONS     *
    *******************
             v
*/



/*Bosnia3*/

function Bosnia3breathcolor2() {
    document.getElementById('ba_2_').classList.add('breathcolor3');
}

function Bosnia3removebreathcolor2() {
    document.getElementById('ba_2_').classList.remove('breathcolor3');
}


function bosniaenter() {
    
    timeoutId = window.setTimeout(function(){
    
    document.getElementById('bosnialabel').setAttribute ('class', 'ifadein'); 
    document.getElementById('defaultlabel').setAttribute ('class', 'fadeout');
    
    }, 1000);
}

function bosnialeave() {
    
    window.clearTimeout(timeoutId)
    
    document.getElementById('bosnialabel').setAttribute ('class', 'ifadeout'); 
    document.getElementById('defaultlabel').setAttribute ('class', 'ifadein');
}

$('#Bosnia3').mouseenter(breath3);
$('#Bosnia3').mouseenter(bosniaenter);

$('#Bosnia3').mouseleave(breath3Stop);
$('#Bosnia3').mouseleave(bosnialeave);

$('#Bosnia3').mouseenter(Bosnia3breathcolor2);
$('#Bosnia3').mouseleave(Bosnia3removebreathcolor2);






/*Ireland1*/

function Ireland1breathcolor2() {
    document.getElementById('ie').classList.add('breathcolor1');
    document.getElementById('gb-nir').classList.add('breathcolor1');
}

function Ireland1removebreathcolor2() {
    document.getElementById('ie').classList.remove('breathcolor1');
    document.getElementById('gb-nir').classList.remove('breathcolor1');
}


function irelandenter() {
    
    timeoutId = window.setTimeout(function(){
    
    document.getElementById('irelandlabel').setAttribute ('class', 'ifadein'); 
    document.getElementById('defaultlabel').setAttribute ('class', 'fadeout');
    
    }, 1000);
}

function irelandleave() {
    
    window.clearTimeout(timeoutId)
    
    document.getElementById('irelandlabel').setAttribute ('class', 'ifadeout'); 
    document.getElementById('defaultlabel').setAttribute ('class', 'ifadein');
}

$('#Ireland1').mouseenter(breath1);
$('#Ireland1').mouseenter(irelandenter);

$('#Ireland1').mouseleave(breath1Stop);
$('#Ireland1').mouseleave(irelandleave);

$('#Ireland1').mouseenter(Ireland1breathcolor2);
$('#Ireland1').mouseleave(Ireland1removebreathcolor2);





/*Scotland1*/

function Scotland1breathcolor2() {
    document.getElementById('scot').classList.add('breathcolor1');
    document.getElementById('scot1').classList.add('breathcolor1');
    document.getElementById('scot2').classList.add('breathcolor1');
    document.getElementById('scot3').classList.add('breathcolor1');
    document.getElementById('scot4').classList.add('breathcolor1');
    document.getElementById('scot5').classList.add('breathcolor1');
    document.getElementById('scot6').classList.add('breathcolor1');
    document.getElementById('scot7').classList.add('breathcolor1');
    document.getElementById('scot8').classList.add('breathcolor1');
    document.getElementById('scot9').classList.add('breathcolor1');
    document.getElementById('scot10').classList.add('breathcolor1');
    document.getElementById('scot11').classList.add('breathcolor1');
    document.getElementById('scot12').classList.add('breathcolor1');
    document.getElementById('scot13').classList.add('breathcolor1');
    document.getElementById('scot14').classList.add('breathcolor1');
    document.getElementById('scot15').classList.add('breathcolor1');
}

function Scotland1removebreathcolor2() {
    document.getElementById('scot').classList.remove('breathcolor1');
    document.getElementById('scot1').classList.remove('breathcolor1');
    document.getElementById('scot2').classList.remove('breathcolor1');
    document.getElementById('scot3').classList.remove('breathcolor1');
    document.getElementById('scot4').classList.remove('breathcolor1');
    document.getElementById('scot5').classList.remove('breathcolor1');
    document.getElementById('scot6').classList.remove('breathcolor1');
    document.getElementById('scot7').classList.remove('breathcolor1');
    document.getElementById('scot8').classList.remove('breathcolor1');
    document.getElementById('scot9').classList.remove('breathcolor1');
    document.getElementById('scot10').classList.remove('breathcolor1');
    document.getElementById('scot11').classList.remove('breathcolor1');
    document.getElementById('scot12').classList.remove('breathcolor1');
    document.getElementById('scot13').classList.remove('breathcolor1');
    document.getElementById('scot14').classList.remove('breathcolor1');
    document.getElementById('scot15').classList.remove('breathcolor1');
}


function scotlandenter() {
    
    timeoutId = window.setTimeout(function(){
    
    document.getElementById('scotlandlabel').setAttribute ('class', 'ifadein'); 
    document.getElementById('defaultlabel').setAttribute ('class', 'fadeout');
    
    }, 1000);
}

function scotlandleave() {
    
    window.clearTimeout(timeoutId)
    
    document.getElementById('scotlandlabel').setAttribute ('class', 'ifadeout'); 
    document.getElementById('defaultlabel').setAttribute ('class', 'ifadein');
}

$('#Scotland1').mouseenter(breath1);
$('#Scotland1').mouseenter(scotlandenter);

$('#Scotland1').mouseleave(breath1Stop);
$('#Scotland1').mouseleave(scotlandleave);

$('#Scotland1').mouseenter(Scotland1breathcolor2);
$('#Scotland1').mouseleave(Scotland1removebreathcolor2);






/*Denmark1*/

function Denmark1breathcolor2() {
    document.getElementById('dk').classList.add('breathcolor1');
}

function Denmark1removebreathcolor2() {
    document.getElementById('dk').classList.remove('breathcolor1');
}


function denmarkenter() {
    
    timeoutId = window.setTimeout(function(){
    
    document.getElementById('denmarklabel').setAttribute ('class', 'ifadein'); 
    document.getElementById('defaultlabel').setAttribute ('class', 'fadeout');
    
    }, 1000);
}

function denmarkleave() {
    
    window.clearTimeout(timeoutId)
    
    document.getElementById('denmarklabel').setAttribute ('class', 'ifadeout'); 
    document.getElementById('defaultlabel').setAttribute ('class', 'ifadein');
}

$('#Denmark1').mouseenter(breath1);
$('#Denmark1').mouseenter(denmarkenter);

$('#Scotland1').mouseleave(breath1Stop);
$('#Denmark1').mouseleave(denmarkleave);

$('#Denmark1').mouseenter(Denmark1breathcolor2);
$('#Denmark1').mouseleave(Denmark1removebreathcolor2);






/*Sweden1->NORWAY__*/

function Sweden1breathcolor2() {
    document.getElementById('no_1_').classList.add('breathcolor1');
}

function Sweden1removebreathcolor2() {
    document.getElementById('no_1_').classList.remove('breathcolor1');
}


function swedenenter() {
    
    timeoutId = window.setTimeout(function(){
    
    document.getElementById('norwaylabel').setAttribute ('class', 'ifadein'); 
    document.getElementById('defaultlabel').setAttribute ('class', 'fadeout');
    
    }, 1000);
}

function swedenleave() {
    
    window.clearTimeout(timeoutId)
    
    document.getElementById('norwaylabel').setAttribute ('class', 'ifadeout'); 
    document.getElementById('defaultlabel').setAttribute ('class', 'ifadein');
}

$('#Sweden1').mouseenter(breath1);
$('#Sweden1').mouseenter(swedenenter);

$('#Sweden1').mouseleave(breath1Stop);
$('#Sweden1').mouseleave(swedenleave);

$('#Sweden1').mouseenter(Sweden1breathcolor2);
$('#Sweden1').mouseleave(Sweden1removebreathcolor2);






/*Norway1->SWEDEN*/

function Norway1breathcolor2() {
    document.getElementById('se').classList.add('breathcolor1');
}

function Norway1removebreathcolor2() {
    document.getElementById('se').classList.remove('breathcolor1');
}


function norwayenter() {
    
    timeoutId = window.setTimeout(function(){
    
    document.getElementById('swedenlabel').setAttribute ('class', 'ifadein'); 
    document.getElementById('defaultlabel').setAttribute ('class', 'fadeout');
    
    }, 1000);
}

function norwayleave() {
    
    window.clearTimeout(timeoutId)
    
    document.getElementById('swedenlabel').setAttribute ('class', 'ifadeout'); 
    document.getElementById('defaultlabel').setAttribute ('class', 'ifadein');
}

$('#Norway1').mouseenter(breath1);
$('#Norway1').mouseenter(norwayenter);

$('#Norway1').mouseleave(breath1Stop);
$('#Norway1').mouseleave(norwayleave);

$('#Norway1').mouseenter(Norway1breathcolor2);
$('#Norway1').mouseleave(Norway1removebreathcolor2);






/*Finland1*/

function Finland1breathcolor2() {
    document.getElementById('fi_1_').classList.add('breathcolor1');
}

function Finland1removebreathcolor2() {
    document.getElementById('fi_1_').classList.remove('breathcolor1');
}


function finlandenter() {
    
    timeoutId = window.setTimeout(function(){
    
    document.getElementById('finlandlabel').setAttribute ('class', 'ifadein'); 
    document.getElementById('defaultlabel').setAttribute ('class', 'fadeout');
    
    }, 1000);
}

function finlandleave() {
    
    window.clearTimeout(timeoutId)
    
    document.getElementById('finlandlabel').setAttribute ('class', 'ifadeout'); 
    document.getElementById('defaultlabel').setAttribute ('class', 'ifadein');
}

$('#Finland1').mouseenter(breath1);
$('#Finland1').mouseenter(finlandenter);

$('#Finland1').mouseleave(breath1Stop);
$('#Finland1').mouseleave(finlandleave);

$('#Finland1').mouseenter(Finland1breathcolor2);
$('#Finland1').mouseleave(Finland1removebreathcolor2);





/*Estonia*/

function Estoniabreathcolor2() {
    document.getElementById('ee').classList.add('breathcolor2');
}

function Estoniaremovebreathcolor2() {
    document.getElementById('ee').classList.remove('breathcolor2');
}


function estoniaenter() {
    
    timeoutId = window.setTimeout(function(){
    
    document.getElementById('estonialabel').setAttribute ('class', 'ifadein'); 
    document.getElementById('defaultlabel').setAttribute ('class', 'fadeout');
    
    }, 1000);
}

function estonialeave() {
    
    window.clearTimeout(timeoutId)
    
    document.getElementById('estonialabel').setAttribute ('class', 'ifadeout'); 
    document.getElementById('defaultlabel').setAttribute ('class', 'ifadein');
}

$('#Estonia').mouseenter(breath2);
$('#Estonia').mouseenter(estoniaenter);

$('#Estonia').mouseleave(breath2Stop);
$('#Estonia').mouseleave(estonialeave);

$('#Estonia').mouseenter(Estoniabreathcolor2);
$('#Estonia').mouseleave(Estoniaremovebreathcolor2);






/*Latvia2*/

function Latvia2breathcolor2() {
    document.getElementById('lv_1_').classList.add('breathcolor2');
}

function Latvia2removebreathcolor2() {
    document.getElementById('lv_1_').classList.remove('breathcolor2');
}


function latviaenter() {
    
    timeoutId = window.setTimeout(function(){
    
    document.getElementById('latvialabel').setAttribute ('class', 'ifadein'); 
    document.getElementById('defaultlabel').setAttribute ('class', 'fadeout');
    
    }, 1000);
}

function latvialeave() {
    
    window.clearTimeout(timeoutId)
    
    document.getElementById('latvialabel').setAttribute ('class', 'ifadeout'); 
    document.getElementById('defaultlabel').setAttribute ('class', 'ifadein');
}

$('#Latvia2').mouseenter(breath2);
$('#Latvia2').mouseenter(latviaenter);

$('#Latvia2').mouseleave(breath2Stop);
$('#Latvia2').mouseleave(latvialeave);

$('#Latvia2').mouseenter(Latvia2breathcolor2);
$('#Latvia2').mouseleave(Latvia2removebreathcolor2);






/*England2*/

function England2breathcolor2() {
    document.getElementById('_x3C_england_x3E_').classList.add('breathcolor2');
    document.getElementById('eng1').classList.add('breathcolor2');
    document.getElementById('eng2').classList.add('breathcolor2');
    document.getElementById('eng3').classList.add('breathcolor2');
    document.getElementById('eng4').classList.add('breathcolor2');
    document.getElementById('eng5').classList.add('breathcolor2');
}

function England2removebreathcolor2() {
    document.getElementById('_x3C_england_x3E_').classList.remove('breathcolor2');
    document.getElementById('eng1').classList.remove('breathcolor2');
    document.getElementById('eng2').classList.remove('breathcolor2');
    document.getElementById('eng3').classList.remove('breathcolor2');
    document.getElementById('eng4').classList.remove('breathcolor2');
    document.getElementById('eng5').classList.remove('breathcolor2');
}


function englandenter() {
    
    timeoutId = window.setTimeout(function(){
    
    document.getElementById('englandlabel').setAttribute ('class', 'ifadein'); 
    document.getElementById('defaultlabel').setAttribute ('class', 'fadeout');
    
    }, 1000);
}

function englandleave() {
    
    window.clearTimeout(timeoutId)
    
    document.getElementById('englandlabel').setAttribute ('class', 'ifadeout'); 
    document.getElementById('defaultlabel').setAttribute ('class', 'ifadein');
}

$('#England2').mouseenter(breath2);
$('#England2').mouseenter(englandenter);

$('#England2').mouseleave(breath2Stop);
$('#England2').mouseleave(englandleave);

$('#England2').mouseenter(England2breathcolor2);
$('#England2').mouseleave(England2removebreathcolor2);





/*Portugal2*/

function Portugal2breathcolor2() {
    document.getElementById('pt_1_').classList.add('breathcolor2');
}

function Portugal2removebreathcolor2() {
    document.getElementById('pt_1_').classList.remove('breathcolor2');
}


function portugalenter() {
    
    timeoutId = window.setTimeout(function(){
    
    document.getElementById('portugallabel').setAttribute ('class', 'ifadein'); 
    document.getElementById('defaultlabel').setAttribute ('class', 'fadeout');
    
    }, 1000);
}

function portugalleave() {
    
    window.clearTimeout(timeoutId)
    
    document.getElementById('portugallabel').setAttribute ('class', 'ifadeout'); 
    document.getElementById('defaultlabel').setAttribute ('class', 'ifadein');
}

$('#Portugal2').mouseenter(breath2);
$('#Portugal2').mouseenter(portugalenter);

$('#Portugal2').mouseleave(breath2Stop);
$('#Portugal2').mouseleave(portugalleave);

$('#Portugal2').mouseenter(Portugal2breathcolor2);
$('#Portugal2').mouseleave(Portugal2removebreathcolor2);





/*France2*/

function France2breathcolor2() {
    document.getElementById('frn').classList.add('breathcolor2');
    document.getElementById('corse').classList.add('breathcolor2');
    document.getElementById('fr1').classList.add('breathcolor2');
    document.getElementById('fr2').classList.add('breathcolor2');
    document.getElementById('fr3').classList.add('breathcolor2');
}

function France2removebreathcolor2() {
    document.getElementById('frn').classList.remove('breathcolor2');
    document.getElementById('corse').classList.remove('breathcolor2');
    document.getElementById('fr1').classList.remove('breathcolor2');
    document.getElementById('fr2').classList.remove('breathcolor2');
    document.getElementById('fr3').classList.remove('breathcolor2');
}


function franceenter() {
    
    timeoutId = window.setTimeout(function(){
    
    document.getElementById('francelabel').setAttribute ('class', 'ifadein'); 
    document.getElementById('defaultlabel').setAttribute ('class', 'fadeout');
    
    }, 1000);
}

function franceleave() {
    
    window.clearTimeout(timeoutId)
    
    document.getElementById('francelabel').setAttribute ('class', 'ifadeout'); 
    document.getElementById('defaultlabel').setAttribute ('class', 'ifadein');
}

$('#France2').mouseenter(breath2);
$('#France2').mouseenter(franceenter);

$('#France2').mouseleave(breath2Stop);
$('#France2').mouseleave(franceleave);

$('#France2').mouseenter(France2breathcolor2);
$('#France2').mouseleave(France2removebreathcolor2);






/*Luxemburg2*/

function Luxemburg2breathcolor2() {
    document.getElementById('lu').classList.add('breathcolor2');
}

function Luxemburg2removebreathcolor2() {
    document.getElementById('lu').classList.remove('breathcolor2');
}


function luxemburgenter() {
    
    timeoutId = window.setTimeout(function(){
    
    document.getElementById('luxemburglabel').setAttribute ('class', 'ifadein'); 
    document.getElementById('defaultlabel').setAttribute ('class', 'fadeout');
    
    }, 1000);
}

function luxemburgleave() {
    
    window.clearTimeout(timeoutId)
    
    document.getElementById('luxemburglabel').setAttribute ('class', 'ifadeout'); 
    document.getElementById('defaultlabel').setAttribute ('class', 'ifadein');
}

$('#Luxemburg2').mouseenter(breath2);
$('#Luxemburg2').mouseenter(luxemburgenter);

$('#Luxemburg2').mouseleave(breath2Stop);
$('#Luxemburg2').mouseleave(luxemburgleave);

$('#Luxemburg2').mouseenter(Luxemburg2breathcolor2);
$('#Luxemburg2').mouseleave(Luxemburg2removebreathcolor2);






/*Belgium2*/

function Belgium2breathcolor2() {
    document.getElementById('be_1_').classList.add('breathcolor2');
}

function Belgium2removebreathcolor2() {
    document.getElementById('be_1_').classList.remove('breathcolor2');
}


function belgiumenter() {
    
    timeoutId = window.setTimeout(function(){
    
    document.getElementById('belgiumlabel').setAttribute ('class', 'ifadein'); 
    document.getElementById('defaultlabel').setAttribute ('class', 'fadeout');
    
    }, 1000);
}

function belgiumleave() {
    
    window.clearTimeout(timeoutId)
    
    document.getElementById('belgiumlabel').setAttribute ('class', 'ifadeout'); 
    document.getElementById('defaultlabel').setAttribute ('class', 'ifadein');
}

$('#Belgium2').mouseenter(breath2);
$('#Belgium2').mouseenter(belgiumenter);

$('#Belgium2').mouseleave(breath2Stop);
$('#Belgium2').mouseleave(belgiumleave);

$('#Belgium2').mouseenter(Belgium2breathcolor2);
$('#Belgium2').mouseleave(Belgium2removebreathcolor2);






/*Germany2_1_*/

function Germany2_1_breathcolor2() {
    document.getElementById('de_1_').classList.add('breathcolor2');
}

function Germany2_1_removebreathcolor2() {
    document.getElementById('de_1_').classList.remove('breathcolor2');
}


function germanyenter() {
    
    timeoutId = window.setTimeout(function(){
    
    document.getElementById('germanylabel').setAttribute ('class', 'ifadein'); 
    document.getElementById('defaultlabel').setAttribute ('class', 'fadeout');
    
    }, 1000);
}

function germanyleave() {
    
    window.clearTimeout(timeoutId)
    
    document.getElementById('germanylabel').setAttribute ('class', 'ifadeout'); 
    document.getElementById('defaultlabel').setAttribute ('class', 'ifadein');
}

$('#Germany2_1_').mouseenter(breath2);
$('#Germany2_1_').mouseenter(germanyenter);

$('#Germany2_1_').mouseleave(breath2Stop);
$('#Germany2_1_').mouseleave(germanyleave);

$('#Germany2_1_').mouseenter(Germany2_1_breathcolor2);
$('#Germany2_1_').mouseleave(Germany2_1_removebreathcolor2);






/*Lithuania2*/

function Lithuania2breathcolor2() {
    document.getElementById('lt').classList.add('breathcolor2');
}

function Lithuania2removebreathcolor2() {
    document.getElementById('lt').classList.remove('breathcolor2');
}


function lithuaniaenter() {
    
    timeoutId = window.setTimeout(function(){
    
    document.getElementById('lithuanialabel').setAttribute ('class', 'ifadein'); 
    document.getElementById('defaultlabel').setAttribute ('class', 'fadeout');
    
    }, 1000);
}

function lithuanialeave() {
    
    window.clearTimeout(timeoutId)
    
    document.getElementById('lithuanialabel').setAttribute ('class', 'ifadeout'); 
    document.getElementById('defaultlabel').setAttribute ('class', 'ifadein');
}

$('#Lithuania2').mouseenter(breath2);
$('#Lithuania2').mouseenter(lithuaniaenter);

$('#Lithuania2').mouseleave(breath2Stop);
$('#Lithuania2').mouseleave(lithuanialeave);

$('#Lithuania2').mouseenter(Lithuania2breathcolor2);
$('#Lithuania2').mouseleave(Lithuania2removebreathcolor2);







/*Swiz2*/

function Swiz2breathcolor2() {
    document.getElementById('swtz').classList.add('breathcolor2');
}

function Swiz2removebreathcolor2() {
    document.getElementById('swtz').classList.remove('breathcolor2');
}


function swizenter() {
    
    timeoutId = window.setTimeout(function(){
    
    document.getElementById('swizzerlandlabel').setAttribute ('class', 'ifadein'); 
    document.getElementById('defaultlabel').setAttribute ('class', 'fadeout');
    
    }, 1000);
}

function swizleave() {
    
    window.clearTimeout(timeoutId)
    
    document.getElementById('swizzerlandlabel').setAttribute ('class', 'ifadeout'); 
    document.getElementById('defaultlabel').setAttribute ('class', 'ifadein');
}

$('#Swiz2').mouseenter(breath2);
$('#Swiz2').mouseenter(swizenter);

$('#Swiz2').mouseleave(breath2Stop);
$('#Swiz2').mouseleave(swizleave);

$('#Swiz2').mouseenter(Swiz2breathcolor2);
$('#Swiz2').mouseleave(Swiz2removebreathcolor2);






/*Poland3*/

function Poland3breathcolor2() {
    document.getElementById('pl').classList.add('breathcolor3');
}

function Poland3removebreathcolor2() {
    document.getElementById('pl').classList.remove('breathcolor3');
}


function polandenter() {
    
    timeoutId = window.setTimeout(function(){
    
    document.getElementById('polandlabel').setAttribute ('class', 'ifadein'); 
    document.getElementById('defaultlabel').setAttribute ('class', 'fadeout');
    
    }, 1000);
}

function polandleave() {
    
    window.clearTimeout(timeoutId)
    
    document.getElementById('polandlabel').setAttribute ('class', 'ifadeout'); 
    document.getElementById('defaultlabel').setAttribute ('class', 'ifadein');
}

$('#Poland3').mouseenter(breath3);
$('#Poland3').mouseenter(polandenter);

$('#Poland3').mouseleave(breath3Stop);
$('#Poland3').mouseleave(polandleave);

$('#Poland3').mouseenter(Poland3breathcolor2);
$('#Poland3').mouseleave(Poland3removebreathcolor2);






/*Slovakia3*/

function Slovakia3breathcolor2() {
    document.getElementById('sk_1_').classList.add('breathcolor3');
}

function Slovakia3removebreathcolor2() {
    document.getElementById('sk_1_').classList.remove('breathcolor3');
}


function slovakiaenter() {
    
    timeoutId = window.setTimeout(function(){
    
    document.getElementById('slovakialabel').setAttribute ('class', 'ifadein'); 
    document.getElementById('defaultlabel').setAttribute ('class', 'fadeout');
    
    }, 1000);
}

function slovakialeave() {
    
    window.clearTimeout(timeoutId)
    
    document.getElementById('slovakialabel').setAttribute ('class', 'ifadeout'); 
    document.getElementById('defaultlabel').setAttribute ('class', 'ifadein');
}

$('#Slovakia3').mouseenter(breath3);
$('#Slovakia3').mouseenter(slovakiaenter);

$('#Slovakia3').mouseleave(breath3Stop);
$('#Slovakia3').mouseleave(slovakialeave);

$('#Slovakia3').mouseenter(Slovakia3breathcolor2);
$('#Slovakia3').mouseleave(Slovakia3removebreathcolor2);






/*CzechRep3*/

function CzechRep3breathcolor2() {
    document.getElementById('cz').classList.add('breathcolor3');
}

function CzechRep3removebreathcolor2() {
    document.getElementById('cz').classList.remove('breathcolor3');
}


function czechrepublicenter() {
    
    timeoutId = window.setTimeout(function(){
    
    document.getElementById('czechrepubliclabel').setAttribute ('class', 'ifadein'); 
    document.getElementById('defaultlabel').setAttribute ('class', 'fadeout');
    
    }, 1000);
}

function czechrepublicleave() {
    
    window.clearTimeout(timeoutId)
    
    document.getElementById('czechrepubliclabel').setAttribute ('class', 'ifadeout'); 
    document.getElementById('defaultlabel').setAttribute ('class', 'ifadein');
}

$('#CzechRep3').mouseenter(breath3);
$('#CzechRep3').mouseenter(czechrepublicenter);

$('#CzechRep3').mouseleave(breath3Stop);
$('#CzechRep3').mouseleave(czechrepublicleave);

$('#CzechRep3').mouseenter(CzechRep3breathcolor2);
$('#CzechRep3').mouseleave(CzechRep3removebreathcolor2);






/*Austria2*/

function Austria2breathcolor2() {
    document.getElementById('at_1_').classList.add('breathcolor2');
}

function Austria2removebreathcolor2() {
    document.getElementById('at_1_').classList.remove('breathcolor2');
}


function austriaenter() {
    
    timeoutId = window.setTimeout(function(){
    
    document.getElementById('austrialabel').setAttribute ('class', 'ifadein'); 
    document.getElementById('defaultlabel').setAttribute ('class', 'fadeout');
    
    }, 1000);
}

function austrialeave() {
    
    window.clearTimeout(timeoutId)
    
    document.getElementById('austrialabel').setAttribute ('class', 'ifadeout'); 
    document.getElementById('defaultlabel').setAttribute ('class', 'ifadein');
}


$('#Austria2').mouseenter(breath2);
$('#Austria2').mouseenter(austriaenter);

$('#Austria2').mouseleave(breath2Stop);
$('#Austria2').mouseleave(austrialeave);

$('#Austria2').mouseenter(Austria2breathcolor2);
$('#Austria2').mouseleave(Austria2removebreathcolor2);






/*Blarus3*/

function Blarus3breathcolor2() {
    document.getElementById('by_1_').classList.add('breathcolor3');
}

function Blarus3removebreathcolor2() {
    document.getElementById('by_1_').classList.remove('breathcolor3');
}


function belarusenter() {
    
    timeoutId = window.setTimeout(function(){
    
    document.getElementById('belaruslabel').setAttribute ('class', 'ifadein'); 
    document.getElementById('defaultlabel').setAttribute ('class', 'fadeout');
    
    }, 1000);
}

function belarusleave() {
    
    window.clearTimeout(timeoutId)
    
    document.getElementById('belaruslabel').setAttribute ('class', 'ifadeout'); 
    document.getElementById('defaultlabel').setAttribute ('class', 'ifadein');
}

$('#Blarus3').mouseenter(breath3);
$('#Blarus3').mouseenter(belarusenter);

$('#Blarus3').mouseleave(breath3Stop);
$('#Blarus3').mouseleave(belarusleave);

$('#Blarus3').mouseenter(Blarus3breathcolor2);
$('#Blarus3').mouseleave(Blarus3removebreathcolor2);






/*Moldova3*/

function Moldova3breathcolor2() {
    document.getElementById('md_1_').classList.add('breathcolor3');
}

function Moldova3removebreathcolor2() {
    document.getElementById('md_1_').classList.remove('breathcolor3');
}


function moldovaenter() {
    
    timeoutId = window.setTimeout(function(){
    
    document.getElementById('moldovalabel').setAttribute ('class', 'ifadein'); 
    document.getElementById('defaultlabel').setAttribute ('class', 'fadeout');
    
    }, 1000);
}

function moldovaleave() {
    
    window.clearTimeout(timeoutId)
    
    document.getElementById('moldovalabel').setAttribute ('class', 'ifadeout'); 
    document.getElementById('defaultlabel').setAttribute ('class', 'ifadein');
}

$('#Moldova3').mouseenter(breath3);
$('#Moldova3').mouseenter(moldovaenter);

$('#Moldova3').mouseleave(breath3Stop);
$('#Moldova3').mouseleave(moldovaleave);

$('#Moldova3').mouseenter(Moldova3breathcolor2);
$('#Moldova3').mouseleave(Moldova3removebreathcolor2);






/*Romania4*/

function Romania4breathcolor2() {
    document.getElementById('ro').classList.add('breathcolor4');
}

function Romania4removebreathcolor2() {
    document.getElementById('ro').classList.remove('breathcolor4');
}


function romaniaenter() {
    
    timeoutId = window.setTimeout(function(){
    
    document.getElementById('romanialabel').setAttribute ('class', 'ifadein'); 
    document.getElementById('defaultlabel').setAttribute ('class', 'fadeout');
    
    }, 1000);
}

function romanialeave() {
    
    window.clearTimeout(timeoutId)
    
    document.getElementById('romanialabel').setAttribute ('class', 'ifadeout'); 
    document.getElementById('defaultlabel').setAttribute ('class', 'ifadein');
}

$('#Romania4').mouseenter(breath4);
$('#Romania4').mouseenter(romaniaenter);

$('#Romania4').mouseleave(breath4Stop);
$('#Romania4').mouseleave(romanialeave);

$('#Romania4').mouseenter(Romania4breathcolor2);
$('#Romania4').mouseleave(Romania4removebreathcolor2);






/*Croatia3*/

function Croatia3breathcolor2() {
    document.getElementById('hr').classList.add('breathcolor3');
}

function Croatia3removebreathcolor2() {
    document.getElementById('hr').classList.remove('breathcolor3');
}


function croatiaenter() {
    
    timeoutId = window.setTimeout(function(){
    
    document.getElementById('croatialabel').setAttribute ('class', 'ifadein'); 
    document.getElementById('defaultlabel').setAttribute ('class', 'fadeout');
    
    }, 1000);
}

function croatialeave() {
    
    window.clearTimeout(timeoutId)
    
    document.getElementById('croatialabel').setAttribute ('class', 'ifadeout'); 
    document.getElementById('defaultlabel').setAttribute ('class', 'ifadein');
}

$('#Croatia3').mouseenter(breath3);
$('#Croatia3').mouseenter(croatiaenter);

$('#Croatia3').mouseleave(breath3Stop);
$('#Croatia3').mouseleave(croatialeave);

$('#Croatia3').mouseenter(Croatia3breathcolor2);
$('#Croatia3').mouseleave(Croatia3removebreathcolor2);






/*Macedonia3*/

function Macedonia3breathcolor2() {
    document.getElementById('mk_1_').classList.add('breathcolor3');
}

function Macedonia3removebreathcolor2() {
    document.getElementById('mk_1_').classList.remove('breathcolor3');
}


function macedoniaenter() {
    
    timeoutId = window.setTimeout(function(){
    
    document.getElementById('macedonialabel').setAttribute ('class', 'ifadein'); 
    document.getElementById('defaultlabel').setAttribute ('class', 'fadeout');
    
    }, 1000);
}

function macedonialeave() {
    
    window.clearTimeout(timeoutId)
    
    document.getElementById('macedonialabel').setAttribute ('class', 'ifadeout'); 
    document.getElementById('defaultlabel').setAttribute ('class', 'ifadein');
}

$('#Macedonia3').mouseenter(breath3);
$('#Macedonia3').mouseenter(macedoniaenter);

$('#Macedonia3').mouseleave(breath3Stop);
$('#Macedonia3').mouseleave(macedonialeave);

$('#Macedonia3').mouseenter(Macedonia3breathcolor2);
$('#Macedonia3').mouseleave(Macedonia3removebreathcolor2);






/*Serbia3<-4*/

function Serbia3breathcolor2() {
    document.getElementById('srb').classList.add('breathcolor4');
}

function Serbia3removebreathcolor2() {
    document.getElementById('srb').classList.remove('breathcolor4');
}


function serbiaenter() {
    
    timeoutId = window.setTimeout(function(){
    
    document.getElementById('serbialabel').setAttribute ('class', 'ifadein'); 
    document.getElementById('defaultlabel').setAttribute ('class', 'fadeout');
    
    }, 1000);
}

function serbialeave() {
    
    window.clearTimeout(timeoutId)
    
    document.getElementById('serbialabel').setAttribute ('class', 'ifadeout'); 
    document.getElementById('defaultlabel').setAttribute ('class', 'ifadein');
}

$('#Serbia3').mouseenter(breath4);
$('#Serbia3').mouseenter(serbiaenter);

$('#Serbia3').mouseleave(breath4Stop);
$('#Serbia3').mouseleave(serbialeave);

$('#Serbia3').mouseenter(Serbia3breathcolor2);
$('#Serbia3').mouseleave(Serbia3removebreathcolor2);






/*Bulgaria4*/

function Bulgaria4breathcolor2() {
    document.getElementById('bg').classList.add('breathcolor4');
}

function Bulgaria4removebreathcolor2() {
    document.getElementById('bg').classList.remove('breathcolor4');
}


function bulgariaenter() {
    
    timeoutId = window.setTimeout(function(){
    
    document.getElementById('bulgarialabel').setAttribute ('class', 'ifadein'); 
    document.getElementById('defaultlabel').setAttribute ('class', 'fadeout');
    
    }, 1000);
}

function bulgarialeave() {
    
    window.clearTimeout(timeoutId)
    
    document.getElementById('bulgarialabel').setAttribute ('class', 'ifadeout'); 
    document.getElementById('defaultlabel').setAttribute ('class', 'ifadein');
}

$('#Bulgaria4').mouseenter(breath4);
$('#Bulgaria4').mouseenter(bulgariaenter);

$('#Bulgaria4').mouseleave(breath4Stop);
$('#Bulgaria4').mouseleave(bulgarialeave);

$('#Bulgaria4').mouseenter(Bulgaria4breathcolor2);
$('#Bulgaria4').mouseleave(Bulgaria4removebreathcolor2);






/*Albania3*/

function Albania3breathcolor2() {
    document.getElementById('al_1_').classList.add('breathcolor3');
}

function Albania3removebreathcolor2() {
    document.getElementById('al_1_').classList.remove('breathcolor3');
}


function albaniaenter() {
    
    timeoutId = window.setTimeout(function(){
    
    document.getElementById('albanylabel').setAttribute ('class', 'ifadein'); 
    document.getElementById('defaultlabel').setAttribute ('class', 'fadeout');
    
    }, 1000);
}

function albanialeave() {
    
    window.clearTimeout(timeoutId)
    
    document.getElementById('albanylabel').setAttribute ('class', 'ifadeout'); 
    document.getElementById('defaultlabel').setAttribute ('class', 'ifadein');
}

$('#Albania3').mouseenter(breath3);
$('#Albania3').mouseenter(albaniaenter);

$('#Albania3').mouseleave(breath3Stop);
$('#Albania3').mouseleave(albanialeave);

$('#Albania3').mouseenter(Albania3breathcolor2);
$('#Albania3').mouseleave(Albania3removebreathcolor2);







/*Greece3*/

function Greece3breathcolor2() {
    document.getElementById('gr').classList.add('breathcolor3');
    document.getElementById('cy').classList.add('breathcolor3');
}

function Greece3removebreathcolor2() {
    document.getElementById('gr').classList.remove('breathcolor3');
    document.getElementById('cy').classList.remove('breathcolor3');
}


function greeceenter() {
    
    timeoutId = window.setTimeout(function(){
    
    document.getElementById('greecelabel').setAttribute ('class', 'ifadein'); 
    document.getElementById('defaultlabel').setAttribute ('class', 'fadeout');
    
    }, 1000);
}

function greeceleave() {
    
    window.clearTimeout(timeoutId)
    
    document.getElementById('greecelabel').setAttribute ('class', 'ifadeout'); 
    document.getElementById('defaultlabel').setAttribute ('class', 'ifadein');
}



$('#Greece3').mouseenter(breath3);
$('#Greece3').mouseenter(greeceenter);

$('#Greece3').mouseleave(breath3Stop);
$('#Greece3').mouseleave(greeceleave);

$('#Greece3').mouseenter(Greece3breathcolor2);
$('#Greece3').mouseleave(Greece3removebreathcolor2);






/*Italy4*/

function Italy4breathcolor2() {
    document.getElementById('itl').classList.add('breathcolor4');
    document.getElementById('ital1').classList.add('breathcolor4');
    document.getElementById('ital2').classList.add('breathcolor4');
    document.getElementById('ital3').classList.add('breathcolor4');
    document.getElementById('ital4').classList.add('breathcolor4');
    document.getElementById('ital5').classList.add('breathcolor4');
    document.getElementById('ital6').classList.add('breathcolor4');
    document.getElementById('ital7').classList.add('breathcolor4');
    document.getElementById('ital8').classList.add('breathcolor4');
    document.getElementById('ital9').classList.add('breathcolor4');
    document.getElementById('ital10').classList.add('breathcolor4');
    document.getElementById('ital11').classList.add('breathcolor4');
    document.getElementById('ital12').classList.add('breathcolor4');
    document.getElementById('ital13').classList.add('breathcolor4');
    document.getElementById('ital14').classList.add('breathcolor4');
    
}

function Italy4removebreathcolor2() {
    document.getElementById('itl').classList.remove('breathcolor4');
    document.getElementById('ital1').classList.remove('breathcolor4');
    document.getElementById('ital2').classList.remove('breathcolor4');
    document.getElementById('ital3').classList.remove('breathcolor4');
    document.getElementById('ital4').classList.remove('breathcolor4');
    document.getElementById('ital5').classList.remove('breathcolor4');
    document.getElementById('ital6').classList.remove('breathcolor4');
    document.getElementById('ital7').classList.remove('breathcolor4');
    document.getElementById('ital8').classList.remove('breathcolor4');
    document.getElementById('ital9').classList.remove('breathcolor4');
    document.getElementById('ital10').classList.remove('breathcolor4');
    document.getElementById('ital11').classList.remove('breathcolor4');
    document.getElementById('ital12').classList.remove('breathcolor4');
    document.getElementById('ital13').classList.remove('breathcolor4');
    document.getElementById('ital14').classList.remove('breathcolor4');
}


function italyenter() {
    
    timeoutId = window.setTimeout(function(){
    
    document.getElementById('italylabel').setAttribute ('class', 'ifadein'); 
    document.getElementById('defaultlabel').setAttribute ('class', 'fadeout');
    
    }, 1000);
}

function italyleave() {
    
    window.clearTimeout(timeoutId)
    
    document.getElementById('italylabel').setAttribute ('class', 'ifadeout'); 
    document.getElementById('defaultlabel').setAttribute ('class', 'ifadein');
}



$('#Italy4').mouseenter(breath4);
$('#Italy4').mouseenter(italyenter);

$('#Italy4').mouseleave(breath4Stop);
$('#Italy4').mouseleave(italyleave);

$('#Italy4').mouseenter(Italy4breathcolor2);
$('#Italy4').mouseleave(Italy4removebreathcolor2);



/*Spain2*/

function Spain2breathcolor2() {
    document.getElementById('spn').classList.add('breathcolor2');
    
    document.getElementById('spain1').classList.add('breathcolor2');
    document.getElementById('spain2').classList.add('breathcolor2');
    document.getElementById('spain3').classList.add('breathcolor2');
    document.getElementById('spain4').classList.add('breathcolor2');
    document.getElementById('spain5').classList.add('breathcolor2');
    document.getElementById('spain6').classList.add('breathcolor2');
    document.getElementById('spain7').classList.add('breathcolor2');
}

function Spain2removebreathcolor2() {
    document.getElementById('spn').classList.remove('breathcolor2');
}


function spainenter() {
    
    timeoutId = window.setTimeout(function(){
    
    document.getElementById('spainlabel').setAttribute ('class', 'ifadein'); 
    document.getElementById('defaultlabel').setAttribute ('class', 'fadeout');
    
    }, 1000);
}

function spainleave() {
    
    window.clearTimeout(timeoutId)
    
    document.getElementById('spainlabel').setAttribute ('class', 'ifadeout'); 
    document.getElementById('defaultlabel').setAttribute ('class', 'ifadein');
}



$('#Spain2').mouseenter(breath2);
$('#Spain2').mouseenter(spainenter);

$('#Spain2').mouseleave(breath2Stop);
$('#Spain2').mouseleave(spainleave);

$('#Spain2').mouseenter(Spain2breathcolor2);
$('#Spain2').mouseleave(Spain2removebreathcolor2);






/*Hungary3*/

function Hungary3breathcolor2() {
    document.getElementById('hu_1_').classList.add('breathcolor3');
}

function Hungary3removebreathcolor2() {
    document.getElementById('hu_1_').classList.remove('breathcolor3');
}


function hungaryenter() {
    
    timeoutId = window.setTimeout(function(){
    
    document.getElementById('hungarylabel').setAttribute ('class', 'ifadein'); 
    document.getElementById('defaultlabel').setAttribute ('class', 'fadeout');
    
    }, 1000);
}

function hungaryleave() {
    
    window.clearTimeout(timeoutId)
    
    document.getElementById('hungarylabel').setAttribute ('class', 'ifadeout'); 
    document.getElementById('defaultlabel').setAttribute ('class', 'ifadein');
}



$('#Hungary3').mouseenter(breath3);
$('#Hungary3').mouseenter(hungaryenter);

$('#Hungary3').mouseleave(breath3Stop);
$('#Hungary3').mouseleave(hungaryleave);

$('#Hungary3').mouseenter(Hungary3breathcolor2);
$('#Hungary3').mouseleave(Hungary3removebreathcolor2);





/*Ukraine3*/

function Ukraine3breathcolor2() {
    document.getElementById('ua').classList.add('breathcolor3');
}

function Ukraine3removebreathcolor2() {
    document.getElementById('ua').classList.remove('breathcolor3');
}


function ukraineenter() {
    
    timeoutId = window.setTimeout(function(){
    
    document.getElementById('ukrainelabel').setAttribute ('class', 'ifadein'); 
    document.getElementById('defaultlabel').setAttribute ('class', 'fadeout');
    
    }, 1000);
}

function ukraineleave() {
    
    window.clearTimeout(timeoutId)
    
    document.getElementById('ukrainelabel').setAttribute ('class', 'ifadeout'); 
    document.getElementById('defaultlabel').setAttribute ('class', 'ifadein');
}



$('#Ukraine3').mouseenter(breath3);
$('#Ukraine3').mouseenter(ukraineenter);

$('#Ukraine3').mouseleave(breath3Stop);
$('#Ukraine3').mouseleave(ukraineleave);

$('#Ukraine3').mouseenter(Ukraine3breathcolor2);
$('#Ukraine3').mouseleave(Ukraine3removebreathcolor2);





/*Montenegro3*/

function Montenegro3breathcolor2() {
    document.getElementById('me_1_').classList.add('breathcolor3');
}

function Montenegro3removebreathcolor2() {
    document.getElementById('me_1_').classList.remove('breathcolor3');
}



function montenegroenter() {
    
    timeoutId = window.setTimeout(function(){
        
    document.getElementById('montenegrolabel').setAttribute ('class', 'ifadein'); 
    document.getElementById('defaultlabel').setAttribute ('class', 'fadeout');
    
      }, 1000);
}

function montenegroleave() {
    
    window.clearTimeout(timeoutId)
    
    document.getElementById('montenegrolabel').setAttribute ('class', 'ifadeout'); 
    document.getElementById('defaultlabel').setAttribute ('class', 'ifadein');
}

$('#Montenegro3').mouseenter(breath3);
$('#Montenegro3').mouseenter(montenegroenter);

$('#Montenegro3').mouseleave(breath3Stop);
$('#Montenegro3').mouseleave(montenegroleave);

$('#Montenegro3').mouseenter(Montenegro3breathcolor2);
$('#Montenegro3').mouseleave(Montenegro3removebreathcolor2);






/*Netherlands2*/

function Netherlands2breathcolor2() {
    document.getElementById('nl').classList.add('breathcolor2');
}

function Netherlands2removebreathcolor2() {
    document.getElementById('nl').classList.remove('breathcolor2');
}




function netherlandsenter() {
    
    timeoutId = window.setTimeout(function(){
        
    document.getElementById('netherlandslabel').setAttribute ('class', 'ifadein'); 
    document.getElementById('defaultlabel').setAttribute ('class', 'fadeout');
    
      }, 1000);
}

function netherlandsleave() {
    
    window.clearTimeout(timeoutId)
    
    document.getElementById('netherlandslabel').setAttribute ('class', 'ifadeout'); 
    document.getElementById('defaultlabel').setAttribute ('class', 'ifadein');
}


$('#Netherlands2').mouseenter(breath2);
$('#Netherlands2').mouseenter(netherlandsenter);


$('#Netherlands2').mouseleave(breath2Stop);
$('#Netherlands2').mouseleave(netherlandsleave);

$('#Netherlands2').mouseenter(Netherlands2breathcolor2);
$('#Netherlands2').mouseleave(Netherlands2removebreathcolor2);





/*Slovenia2*/

function Slovenia2breathcolor2() {
    document.getElementById('si').classList.add('breathcolor2');
}

function Slovenia2removebreathcolor2() {
    document.getElementById('si').classList.remove('breathcolor2');
}




function sloveniaenter() {
    
    timeoutId = window.setTimeout(function(){
        
    document.getElementById('slovenialabel').setAttribute ('class', 'ifadein'); 
    document.getElementById('defaultlabel').setAttribute ('class', 'fadeout');
    
      }, 1000);
}

function slovenialeave() {
    
    window.clearTimeout(timeoutId)
    
    document.getElementById('slovenialabel').setAttribute ('class', 'ifadeout'); 
    document.getElementById('defaultlabel').setAttribute ('class', 'ifadein');
}


$('#Slovenia2').mouseenter(breath2);
$('#Slovenia2').mouseenter(sloveniaenter);


$('#Slovenia2').mouseleave(breath2Stop);
$('#Slovenia2').mouseleave(slovenialeave);

$('#Slovenia2').mouseenter(Slovenia2breathcolor2);
$('#Slovenia2').mouseleave(Slovenia2removebreathcolor2);











function infoLabelFadeIn() {
    document.getElementById('infoLabel').addEventListener('class', 'ifadein');
}

function infoLabelFadeOut() {
    document.getElementById('infoLabel').addEventListener('class', 'ifadeout');
}


function labelon(){
    document.getElementById('infoLabel').setAttribute('class', 'labelfadein');
    document.getElementById('cerchietto').setAttribute('style', 'pointer-events: auto;');
    
    document.getElementById('link1').setAttribute('style', 'pointer-events: auto;');
    document.getElementById('link2').setAttribute('style', 'pointer-events: auto;');
    document.getElementById('link3').setAttribute('style', 'pointer-events: auto;');
    
    document.getElementById('link1').classList.remove('linkout');
    document.getElementById('link2').classList.remove('linkout');
    document.getElementById('link3').classList.remove('linkout');
    
}

function btnon(){
    document.getElementById('onbtn').setAttribute('class', 'labelfadein');
}

function btnoff(){
    document.getElementById('onbtn').setAttribute('class', 'ifadeout');
}

function infolabeloff(){
    document.getElementById('infoLabel').setAttribute('class', 'fadeoutInfo');
    document.getElementById('cerchietto').setAttribute('style', 'pointer-events: none;');
    
    document.getElementById('link1').setAttribute('style', 'pointer-events: none;');
    document.getElementById('link2').setAttribute('style', 'pointer-events: none;');
    document.getElementById('link3').setAttribute('style', 'pointer-events: none;');
}





 
function audiodebug(){
     document.getElementById('breath_1').pause(); 
     document.getElementById('breath_2').pause();
     document.getElementById('breath_3').pause();
     document.getElementById('breath_4').pause();
 } 






/*



             



function nooverlap(){
    var list = document.getElementsByClassName('off'), i;
        for(i = 0; i < lista.length; ++i){
            list[i].style.opacity = "0";
        }
}




 
        function green(){    
            var divs = document.querySelectorAll('.foot, .ball'), i;

for (i = 0; i < divs.length; ++i) {
  divs[i].style.backgroundColor = "green";
}
        }
            */

/*
document.getElementsByClassName("citysound")[0].addEventListener("webkitAnimationEnd", citysounds);






document.getElementById("Berlin_1").addEventListener("AnimationEnd", citysounds);
document.getElementById("Birmingham").addEventListener("webkitAnimationEnd", citysounds);
document.getElementById("Valencia").addEventListener("webkitAnimationEnd", citysounds);
document.getElementById("Minsk").addEventListener("webkitAnimationEnd", citysounds);
document.getElementById("Patras").addEventListener("webkitAnimationEnd", citysounds);
document.getElementById("Lyon").addEventListener("webkitAnimationEnd", citysounds);
document.getElementById("Poznan").addEventListener("webkitAnimationEnd", citysounds);
document.getElementById("Brno").addEventListener("webkitAnimationEnd", citysounds);
document.getElementById("Florence").addEventListener("webkitAnimationEnd", citysounds);
document.getElementById("Warsaw").addEventListener("webkitAnimationEnd", citysounds);
document.getElementById("Trieste").addEventListener("webkitAnimationEnd", citysounds);
document.getElementById("Gent").addEventListener("webkitAnimationEnd", citysounds);
document.getElementById("BanjaLuka").addEventListener("webkitAnimationEnd", citysounds);
document.getElementById("Bologna").addEventListener("webkitAnimationEnd", citysounds);
document.getElementById("Mannheim").addEventListener("webkitAnimationEnd", citysounds);




Tetovo
Skopje
Naples
Monaco
Tirana
Turin
Brescia
Kiev
Bucharest
Sarajevo
Barcelona
Krakow (Cracow)
Paris
Athens
Varna
Rome
Bitola
Antwerp
Brussels
Chisinau
Milan
Plovdiv
Thessaloniki
Marseille
Iasi
Sofia
Wroclaw
Timisoara
Belgrade
London
Lviv
Madrid
Toulouse
Budapest
Manchester
Mannheim
Bologna
BanjaLuka
Gent
Trieste
Warsaw
Florence
Brno
Poznan
Lyon
Patras
Minsk
Valencia
Birmingham
Berlin
*/