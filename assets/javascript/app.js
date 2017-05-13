document.getElementById("form1").onsubmit=function() {
       variable = parseInt(document.querySelector('input[name = "variable"]:checked').value);
	   sub = parseInt(document.querySelector('input[name = "sub"]:checked').value);
	   arr = parseInt(document.querySelector('input[name = "arr"]:checked').value);
	   con = parseInt(document.querySelector('input[name = "con"]:checked').value);
	   ifstate = parseInt(document.querySelector('input[name = "ifstate"]:checked').value);
	   	   
	   result = variable + sub + arr + con + ifstate;
	   
	document.getElementById("grade").innerHTML = result;
 		
 		if (result == 0) {result2 = "You suck!<br /><img src='../images/0.jpg' width='300' />"};
    	if (result == 20) {result2 = "I don't think you studied!<br /><img src='../images/20.jpg' width='300' />"};
    	if (result == 40) {result2 = "You need to work harder - try again!<br /><img src='../images/40.jpg' width='300' />"};
    	if (result == 60) {result2 = "I think you could do better - try again!<br /><img src='../images/60.jpg' width='300' />"};
    	if (result == 80) {result2 = "So close - try again!<br /><img src='../images/80.jpg' width='300' />"};
    	if (result == 100) {result2 = "Excellent! You're a JavaScript PRO!<br /><img src='../images/100.jpg' width='300' />"};

 		grading = [
	   		{score:0,feedback:"You suck!", image: "../images/0.jpg"},
	   		{score:20,feedback:"I don't think you studied!", image: "../images/20.jpg"},
	   		{score:40,feedback:"You need to work harder - try again!", image: "../images/40.jpg"},
	   		{score:60,feedback:"I think you could do better - try again!", image: "../images/60.jpg"},
	   		{score:80,feedback:"So close - try again!", image: "../images/80.jpg"},
	   		{score:100,feedback:"Excellent! You're a JavaScript PRO!", image: "../images/100.jpg"}
	   ];

	   for(i=0; i<grading.length; i++) {
    		if(result == grading[i].score) {
    		result2 = grading[i].feedback + "<br /><img src='" + grading[i].image + "' width='300'  />";
	  }
	  }


	document.getElementById("grade2").innerHTML = result2;

return false; // required to not refresh the page
} //end of submission