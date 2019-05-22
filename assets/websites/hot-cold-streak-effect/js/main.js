window.addEventListener("load", function() { window.scrollTo(1,1); });

arrayRed = [2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36];
arrayBlack = [3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37];
arraySafe = [3,4,5,6,7,9,11,13,15,17,18,19,20,21,22,24,25,26,28,29,30,32,34,36];
var money = 400;
document.getElementById('money').innerHTML = money +" "+ "<img src='img/poker.svg' width='20px'>";
var moze = true;
var mojbroj;
var hotbroj =0;
var coldbroj=0;
var sdegree = 0;
var wonlost;
var yesno;
var hotcold;
  function NewNum () {
    mojbroj = Math.floor(Math.random() * 37) +1 ;

      
  }


function IfRed () {
	setTimeout(function(){
	if (arrayRed.includes(mojbroj)) {
			if(coldbroj === 3||hotbroj === 3) {
				document.getElementById('goagain').style.opacity = "0";
			document.getElementById('resultsss').style.display = "block";
			document.getElementById('message').innerHTML = 'Your luck seems to be endless! Now let me stop and show you how streaks can influnce gamblers decisions.';
			money += 100;
			document.getElementById('money').innerHTML =  money +" "+ "<img src='img/poker.svg' 	width='20px'>";
			coldbroj =0;
			hotbroj +=1;
				wonlost = true;
		} else {
		money += 100;
		document.getElementById('money').innerHTML =  money +" "+ "<img src='img/poker.svg' width='20px'>";
		coldbroj =0;
		hotbroj +=1;
		document.getElementById('message').innerHTML = 'Congratulations, I can feel the heat. Continue doing what you are doing!';
	} 
	}else {
		
			if(coldbroj === 3||hotbroj === 3) {
				document.getElementById('goagain').style.opacity = "0";
			document.getElementById('resultsss').style.display = "block";
			document.getElementById('message').innerHTML = 'Your luck has come to an end! Now let me stop and show you how streaks can influnce gamblers decisions.';
			money -= 100;
			document.getElementById('money').innerHTML =  money +" "+ "<img src='img/poker.svg' 	width='20px'>";
			hotbroj =0;
			coldbroj +=1;
				wonlost = false;
		} else {
		money -= 100;
		
		document.getElementById('money').innerHTML =  money +" "+ "<img src='img/poker.svg' width='20px'>";
		hotbroj =0;
		coldbroj +=1;
		document.getElementById('message').innerHTML = 'Oh that is too bad, but you can still turn it around, maybe try a different bet. Try again!';
	}
	}
	
},5500);
			   }

function IfBlack () {
	setTimeout(function(){
	if (arrayBlack.includes(mojbroj)) {
		if(coldbroj === 3||hotbroj === 3) {
			document.getElementById('goagain').style.opacity = "0";
			document.getElementById('resultsss').style.display = "block";
			document.getElementById('message').innerHTML = 'Your luck seems to be endless! Now let me stop and show you how streaks can influnce gamblers decisions.';
			money += 100;
			document.getElementById('money').innerHTML =  money +" "+ "<img src='img/poker.svg' 	width='20px'>";
			coldbroj =0;
			hotbroj +=1;
			wonlost = true;
		} else {
		money += 100;
		document.getElementById('money').innerHTML =  money +" "+ "<img src='img/poker.svg' width='20px'>";
		coldbroj =0;
		hotbroj +=1;
			document.getElementById('message').innerHTML ='Congratulations, I can feel the heat. Continue doing what you are doing!';
		}
	} else {
		if(coldbroj === 3||hotbroj === 3) {
			document.getElementById('goagain').style.opacity = "0";
			document.getElementById('resultsss').style.display = "block";
			document.getElementById('message').innerHTML = 'Your luck has come to an end! Now let me stop and show you how streaks can influnce gamblers decisions.';
			money -= 100;
			document.getElementById('money').innerHTML =  money +" "+ "<img src='img/poker.svg' 	width='20px'>";
			hotbroj =0;
			coldbroj +=1;
			wonlost = false;
		} else {
		money -= 100;
		
		document.getElementById('money').innerHTML =  money +" "+ "<img src='img/poker.svg' width='20px'>";
		hotbroj =0;
		coldbroj +=1;
		
		document.getElementById('message').innerHTML = 'Oh that is too bad, but you can still turn it around, maybe try a different bet. Try again!';
		
		
					
		}
		}
	
},5500);
	console.log(mojbroj);
}


function CheckState () {
	setTimeout(function(){
		if (coldbroj === 1) {
		
			document.getElementById('colds1').style.opacity = "1";
		} else if (coldbroj === 2) {
		
			document.getElementById('colds1').style.opacity = "1";
			document.getElementById('colds2').style.opacity = "1";
		} else if (coldbroj === 3) {
			yesno = false;
			hotcold = 1;
			document.getElementById('colds1').style.opacity = "1";
			document.getElementById('colds2').style.opacity = "1";
			document.getElementById('colds3').style.opacity = "1";
			
			
			document.getElementById('opcija3').className = 'opcija3new freeze-glow ';
			document.getElementById('opcija3').innerHTML ="<p>Stake:<br> -100 <img src='img/poker.svg' width='20px'><br>Winning:<br> +3600 <img src='img/poker.svg' width='20px'></p>"+"<img class='specc3 spin-spin' src='img/chip0.png'>" +"<p class='ptop'><span class='tit'>Bet on 0</span><br><br>1/37 odds<br>Last Chance</p>";
			
			
		} else if (coldbroj === 0) {
			document.getElementById('colds1').style.opacity = "0";
			document.getElementById('colds2').style.opacity = "0";
			document.getElementById('colds3').style.opacity = "0";
		} 
	    if (hotbroj === 1) {
		
			document.getElementById('hots1').style.opacity = "1";
		} else if (hotbroj === 2) {
		
			document.getElementById('hots1').style.opacity = "1";
			document.getElementById('hots2').style.opacity = "1";
		} else if (hotbroj === 3) {
			yesno = false;
			hotcold = 2;
			document.getElementById('hots1').style.opacity = "1";
			document.getElementById('hots2').style.opacity = "1";
			document.getElementById('hots3').style.opacity = "1";
			
			document.getElementById('opcija4').className = 'opcija4new fire-glow ';
			document.getElementById('opcija4').innerHTML = "<p>Stake:<br> -100 <img src='img/poker.svg' width='20px'><br>Winning:<br> +150 <img src='img/poker.svg' width='20px'></p>"+"<img class='specc4 spin-spin2' src='img/chipdef.png'>"+"<p class='ptop'><span class='tit'>Bet on 1-24</span><br><br>24/37 odds<br>Safe Bet</p>";
			
		} else if(hotbroj === 0) {
			document.getElementById('hots1').style.opacity = "0";
			document.getElementById('hots2').style.opacity = "0";
			document.getElementById('hots3').style.opacity = "0";
		} 
	
	
	
	
	
if (money==0 || money<0) {
		document.getElementById('goagain').style.opacity = "0";
		document.getElementById('resultsss').style.display = "none";
			document.getElementById('over').style.display = "block";
		document.getElementById('message').innerHTML = 'Unlucky! However, you shouldn"t rely on luck. You ran out of money, better luck next time. Do you want to restart?';
} 

	},5500);
}



function LastChance () {
	setTimeout(function(){
	if (coldbroj === 3) {
			hotcold = 1;
			yesno = true;
		
		if (mojbroj === 1) {
			wonlost = true;
			money += 3600; 
			coldbroj =0;
			hotbroj +=1;
			document.getElementById('money').innerHTML =  money +" "+ "<img src='img/poker.svg' width='20px'>";
			document.getElementById('goagain').style.opacity = "0";
			document.getElementById('resultsss').style.display = "block";
			document.getElementById('message').innerHTML = 'Amazing call! Last chance desparation move, and you made it work! Before you get addicted I have to stop and show you how streaks can influnce gamblers decisions.';
		} else {
			wonlost = false;
			hotbroj =0;
			coldbroj +=1;
			money -= 100; 
			document.getElementById('money').innerHTML =  money +" "+ "<img src='img/poker.svg' width='20px'>";
			document.getElementById('goagain').style.opacity = "0";
			document.getElementById('resultsss').style.display = "block";
			document.getElementById('message').innerHTML = 'Well that was a tough shot, anyway. But before you go on let me show you how streaks can influnce gamblers decisions.';
		}
		
		
		
		
	}
		},5500);
}

function SafeBet () {
		setTimeout(function(){
			console.log(mojbroj);
	if (hotbroj === 3) {
			hotcold = 2;
			yesno = true;
		
		if (arraySafe.includes(mojbroj)){
			wonlost = true;
			money += 50; 
			coldbroj =0;
			hotbroj +=1;
			document.getElementById('money').innerHTML =  money +" "+ "<img src='img/poker.svg' width='20px'>";
			
			document.getElementById('goagain').style.opacity = "0";
				document.getElementById('resultsss').style.display = "block";
			document.getElementById('message').innerHTML = 'Playing it safe and smart! Before you get addicted I have to stop and show you how streaks can influnce gamblers decisions.';
			
		} else {
			wonlost = false;
			hotbroj =0;
			coldbroj +=1;
			money -= 100; 
			document.getElementById('money').innerHTML =  money +" "+ "<img src='img/poker.svg' width='20px'>";
			
			document.getElementById('goagain').style.opacity = "0";
				document.getElementById('resultsss').style.display = "block";
			document.getElementById('message').innerHTML = 'Just unlucky, still you played it safe and smart! Before you get addicted I have to stop and show you how streaks can influnce gamblers decisions.';
			
		}
		
		
		
		
	}
			},5500);
}




$(document).ready(function(){
	
	$(".pocetna").addClass("pocetna-Show");
	 $(".text1").addClass("text1-Show");
$(".result").addClass("result-Hide");
	
	
	
	
	
	if(coldbroj ==1) {
		$(".colds1").addClass("img-Hide");
	}
	
$("#butt1").on("click", function(event){
	 document.body.requestFullscreen();
  	 $(".text2").addClass("text2-Show");

	 $(".text1").removeClass("text1-Show");

      


})
$("#butt2").on("click", function(event){
 document.body.requestFullscreen();
   
$(".text3").addClass("text3-Show");
	 $(".text1").removeClass("text1-Show");

      


})
	
	$("#butt3").on("click", function(event){

   $(".pocetna").removeClass("pocetna-Show");
$(".rulet").addClass("rulet-Show");

      


})
	
	
		$("#butt4").on("click", function(event){

   $(".pocetna").removeClass("pocetna-Show");
$(".rulet").addClass("rulet-Show");

      


})
	$("#opcija3").on("click", function(event){
		if(coldbroj < 3) {
			moze = false;
	} else {
		moze = true;
	}
		
      


})
		$("#opcija4").on("click", function(event){
		if(hotbroj < 3) {
			moze = false;
	} else {
		moze = true;
	}
		
      


})
	
	
	$(".opcije").on("click", function(event){
		if(moze) {
  	 $(".opcije").addClass("opcije-Hide");
$(".brojevi").addClass("brojevi--Show");	
	$(".result").removeClass("result-Hide");
			
	
    sdegree = -720-((mojbroj-1)*9.72) ;
			
    var srotate = "rotate(" + sdegree + "deg)";
			setTimeout(function(){  
    $("#svibrojevi").css({
      "-webkit-transform" : srotate,
      "transform" : srotate,
      "-webkit-transform-origin" : "50% 50%",
      "transform-origin" : "50% 50%",
		
    })
		
				}, 1000);
			setTimeout(function(){  
			$(".brojevi").removeClass("brojevi--Show");		
			}, 5000);
			
				setTimeout(function(){  
		
      $(".brojevi:nth-child(" + mojbroj + ")").addClass("brojevi--Show");
			}, 5300);
		}
      


})
		$("#goagain").on("click", function(event){
			var srotate = "rotate(" + 0 + "deg)";
			$("#svibrojevi").css({
      "-webkit-transform" : srotate,
      "transform" : srotate,
      "-webkit-transform-origin" : "50% 50%",
      "transform-origin" : "50% 50%",
		
    })
			
			if(coldbroj > 2) {
				$("#goagain").addClass("result-Hide");
				
			}
			if(hotbroj > 2) {
				$("#goagain").addClass("result-Hide");
			}
			
  	 $(".opcije").removeClass("opcije-Hide");
$(".result").addClass("result-Hide");
	$("#message").html("");	

      


})
	
	$("#resultsss").on("click", function(event){
		$(".sve").addClass("opcije-Hide");
		$(".final").css("display", "block");
		$(".final").addClass("");
		$(".final").addClass("fadein moveup");
		$(".finalg").addClass("fadein moveup");
	})
		$(".opcija1").mouseenter(function(event){
		moze = true;
	$(".specc").addClass("spin-spin");
	
}) 
	$(".opcija1").mouseleave(function(event){
		
	$(".specc").removeClass("spin-spin");
	
})
			$(".opcija2").mouseenter(function(event){
		moze = true;
	$(".specc2").addClass("spin-spin");
	
})
	$(".opcija2").mouseleave(function(event){
		
	$(".specc2").removeClass("spin-spin");
	
})
	$("#opcija3").mouseenter(function(event){
		
	$(".specc3").addClass("spin-spin");
	
})
	$("#opcija3").mouseleave(function(event){
		
	$(".specc3").removeClass("spin-spin");
	
})
	$("#opcija4").mouseenter(function(event){
		
	$(".specc4").addClass("spin-spin");
	
})
	$("#opcija4").mouseleave(function(event){
		
	$(".specc4").removeClass("spin-spin");
	
})
	var clickedlast =false;
	$("#yourres").click(function(event){
		if (clickedlast) {
			
			$(".starter").removeClass("s--Hide");
			
				$(".wong").removeClass("r--Show fadein");
				
				
			
				$(".lostg").removeClass("r--Show fadein");
			
			
				$(".yesg").removeClass("r--Show fadein");
				
				
			
				$(".notg").removeClass("r--Show fadein");
			clickedlast = false;
			
		} else {
		if(hotcold === 1) {
			$(".starter").addClass("s--Hide");
				if(yesno) {
				
				$(".notg").addClass("r--Show fadein");
				
			} else {
				
				$(".lostg").addClass("r--Show fadein");
			}
			
		} else if (hotcold === 2) { 
		$(".starter").addClass("s--Hide");
		
			
	
			if(yesno) {
				
				$(".wong").addClass("r--Show fadein");
				
			} else {
				$(".yesg").addClass("r--Show fadein");
				
			}
			
		
		
		
		}
			clickedlast = true;
		}
		
	})

})
