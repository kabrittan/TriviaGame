document.getElementById("form1").onsubmit=function() {
       variable = parseInt(document.querySelector('input[name = "variable"]:checked').value);
	   sub = parseInt(document.querySelector('input[name = "sub"]:checked').value);
	   arr = parseInt(document.querySelector('input[name = "arr"]:checked').value);
	   con = parseInt(document.querySelector('input[name = "con"]:checked').value);
	   ifstate = parseInt(document.querySelector('input[name = "ifstate"]:checked').value);
	   	   
	   result = variable + sub + arr + con + ifstate;
	   
	document.getElementById("grade").innerHTML = result;
	 	if (result == 0) {result2 = "You suck!"};
	 	if (result == 20) {result2 = "I don't think you studied!"};
		if (result == 40) {result2 = "You need to work harder - try again!"};
		if (result == 60) {result2 = "I think you could do better - try again!"};
		if (result == 80) {result2 = "So close - try again!"};
		if (result == 100) {result2 = "Excellent! You're a JavaScript PRO!"};
	document.getElementById("grade2").innerHTML = result2;

return false; // required to not refresh the page
} //end of submission