$( document ).ready(function() {
	$( "#sTable" ).keydown(function() {
		updateScores();
	});
	
	$( "#sTable" ).keyup(function() {
		updateScores();
	});
	
	$("#po1").click(function() {
	var answer = confirm("Ha! That sucks! Are you sure?")
	if (answer){
		$('.player1').each(function(i, obj) {
			this.value="0";
			updateScores();
		});
	}
	});
	$("#po2").click(function() {
	var answer = confirm("Ha! That sucks! Are you sure?")
	if (answer){
		$('.player2').each(function(i, obj) {
			this.value="0";
			updateScores();
		});
	}
	});	
	$("#po3").click(function() {
	var answer = confirm("Ha! That sucks! Are you sure?")
	if (answer){
		$('.player3').each(function(i, obj) {
			this.value="0";
			updateScores();
		});
	}
	});

});
 $( document ).ready(function() {
    var player1namecookie = $.cookie('player1') || "Player 1";
	document.getElementById("player1name").innerHTML = player1namecookie;
	
	var player2namecookie = $.cookie('player2') || "Player 2";
	document.getElementById("player2name").innerHTML = player2namecookie;
	
	var player3namecookie = $.cookie('player3') || "Player 3";
	document.getElementById("player3name").innerHTML = player3namecookie;
  });


function addRow(){
	var table = $('table#sTable tbody');
	var len = $('input[type=text]', table).length;
	var sum1 = 0;
	var sum2 = 0;
	var sum3 = 0;
	
	table.append('<tr><td><input class="player1" size="4" type="text" pattern="[0-9]*" /></td><td><input class="player2" size="4" type="text" pattern="[0-9]*"  /></td><td><input class="player3" size="4" type="text" pattern="[0-9]*"  /></td></tr>');
	
	$('.player1').each(function(){
		sum1 += parseFloat($(this).val()) || 0; 
	})
	$('.player2').each(function(){
		sum2 += parseFloat($(this).val()) || 0;
	})
	$('.player3').each(function(){
		sum3 += parseFloat($(this).val()) || 0;
	})
	document.getElementById("p1total").innerHTML =  sum1;
	document.getElementById("p2total").innerHTML =  sum2;
	document.getElementById("p3total").innerHTML =  sum3;
	
	$(".player1 :last").focus();
};

function newGame(){
	var answer = confirm("Are you sure? All scores will be removed.")
	if (answer){
	  $('#sTable tr:gt(1)').remove();
		
	  document.getElementById("p1total").innerHTML = 0;
	  document.getElementById("p2total").innerHTML = 0;
	  document.getElementById("p3total").innerHTML = 0;
	  
	   $("#p1first").val("0");
	   $("#p2first").val("0");
	   $("#p3first").val("0");
	  
	}
	
}

function updateScores(){
	var sum1 = 0;
	var sum2 = 0;
	var sum3 = 0;
	
	$('.player1').each(function(){
		sum1 += parseFloat($(this).val()) || 0;  //Or this.innerHTML, this.innerText
	})
	$('.player2').each(function(){
		sum2 += parseFloat($(this).val()) || 0;  //Or this.innerHTML, this.innerText
	})
	$('.player3').each(function(){
		sum3 += parseFloat($(this).val()) || 0;  //Or this.innerHTML, this.innerText
	})
	
	document.getElementById("p1total").innerHTML = sum1;
	document.getElementById("p2total").innerHTML = sum2;
	document.getElementById("p3total").innerHTML = sum3;
	
	//Set Cookies, this should be moved
	var player1name = document.getElementById("player1name").innerHTML;
	$.cookie('player1', player1name, { expires: 30 });
	
	var player2name = document.getElementById("player2name").innerHTML;
	$.cookie('player2', player2name, { expires: 30 });
	
	var player3name = document.getElementById("player3name").innerHTML;
	$.cookie('player3', player3name, { expires: 30 });
}
function findWinner(){

	var p1 = document.getElementById("p1total").innerHTML;
	var p2 = document.getElementById("p1total").innerHTML;
	var p3 = document.getElementById("p1total").innerHTML;	
	
	var winner = p1;
	
	if (p2>p1){
		winner = p2;
	}
	
	if (p3>winner){
		winner = p3;
	}

	//document.getElementById("test").innerHTML = winner;
}
function deleteRow(row)
{
	var rows = document.getElementById("sTable").rows;
	var n = rows.length;
    var i=row.parentNode.parentNode.rowIndex;
    if (i>1){
    document.getElementById('sTable').deleteRow(i);
    }
	updateScores();
}
