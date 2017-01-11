var minNum = 1;
var maxNum = 50;
var numInterval = 100;
var limitTime = 5000; /*mili second*/
var curTime = 5000;
var intervalNumber, numRandom;
var flgNext = false;

function initNumbers(){
	for (var i= minNum ; i <= maxNum; i++) {
		var tmpli = "<li>" + i + "</li>" ;
	  $(".numbers").append(tmpli);
	}
}

function refreshNumbers(){
	$(".numbers").html("");
}

function setCountTime(){
	$('#countTime').html(curTime/1000);
}

$(function(){
	setOptions();
});
function startGame(){
	if(flgNext){
		curTime = limitTime;
		setCountTime();
		$(".numbers li:nth-child(" + numRandom +  ")").remove();
	}
	$("#btnStart").prop( "disabled", true );
	intervalNumber = setInterval(function(){ 
		numRandom = Math.floor((Math.random() * $(".numbers li").length) + 1);
		$(".numbers li.active").removeClass("active");
		$(".numbers li:nth-child(" + numRandom +  ")").addClass("active");
		curTime  = (curTime - numInterval);
		setCountTime();
		if(curTime == 0){
			var tmpLi = "<li>" + $(".numbers li:nth-child(" + numRandom +  ")").html() + "</li>" ; 
			$('.ulresult').append(tmpLi);
			$(".block-result").show();
			stopGame();
			$("#btnStart").prop( "disabled", false );
			flgNext = true;
		}
	}, numInterval);
}

function stopGame(){
	clearInterval(intervalNumber);
}

function toggleSettings(){
	$(".form-settings").toggle();
	$(".setting-success").hide();
}
function setOptions(){
	$(".ulresult").html("");
	$(".block-result").hide();
	minNum = $("#minnum").val();
	maxNum = $("#maxnum").val();
	numInterval = $("#numinterval").val();
	limitTime = $("#limittime").val();
	curTime = limitTime;
	setCountTime();
	refreshNumbers();
	initNumbers();
	$(".setting-success").toggle();
}
