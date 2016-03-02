var percent = 0;
var mark = 0;

function resultTest(){
	 mark = mark + 1;
	 percent = percent + 20;
}
 function inpAnswer(){
  qwOne = document.getElementById("answerOne").checked;
  if (qwOne == true){    
	resultTest();
}
  var qwTwo = document.getElementById("answerTwo").checked;	 
 if (qwTwo == true){	
	resultTest();
}
   var qwThree = document.getElementById("answerThree").checked; 
 if (qwThree == true){	   
	 resultTest();
} 
 var qwFour = document.getElementsByName("table");
 if (qwFour[0].checked == false && qwFour[1].checked == true && qwFour[2].checked == false && qwFour[3].checked == true){
	 resultTest();
}
	 var qwFive = document.getElementsByName("form");
	 
 if (qwFive[0].checked == true && qwFive[1].checked == true && qwFive[2].checked == false && qwFive[3].checked == false){
	 resultTest();
}
	alert("Ваш результат"+ " "+ mark + " баллов" + "," + " " + percent + " %" );
	percent = 0;
    mark = 0;
}
 
 document.getElementById("result").onclick = inpAnswer; 
