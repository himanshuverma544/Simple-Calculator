var a = '';
var ans = '';

function send(value) {	
	
	if(value =='+' || value =='-' || value =='*' || value =='/')
	{	
		if (ans != '') {   // if there lies a answer
			a = ans  + value; // add the operator i.e., a = '10+' 
			document.getElementById('screen').innerHTML = a;
		}
		else // if the answer doesn't lies
		{
			if(a == '') // if we press operators at the starting
			{
				document.getElementById('screen').innerHTML = '';
			} 
			else if(a.charAt(a.length - 1) == '+' || a.charAt(a.length - 1) == '-' || a.charAt(a.length - 1) == '*' || a.charAt(a.length - 1) == '/') { // to stop operator from appending more than once at a time

			}
			else // appending operators
			{
				a += value;
				document.getElementById('screen').innerHTML = a;
			}
		}
	}
	else
	{
	   if(ans !='') // if there lies a answer then set answer to empty
	   {
     	ans = '';
	   }
	   else if((value.charAt(value.length - 3) == '.' || value == '.' || value == ')') && a == '') // if pressed first nothing happens
	   {
	    	document.getElementById('screen').innerHTML = '';
	   }
	   
	   else if(a.charAt(a.length - 1) == '.' && value == '.')  { // to stop decimal from appending more than once at a time

	   }
	    //   else if(value == '0' && a == '') {                  // printing zero at the starting
		// document.getElementById('screen').innerHTML = '0';
        // }
	   else if(a.charAt(a.length - 1) == '0' && (a.charAt(a.length - 2) == '+' || a.charAt(a.length - 2) == '-' || a.charAt(a.length - 2) == '*' || a.charAt(a.length - 2) == '/') ) { // handling zero's after such expression : 5+0
		   del();
		   a += value;
		   document.getElementById('screen').innerHTML = a;
	   }
	   else 
	   {
	          a += value;	// appending 
		       document.getElementById('screen').innerHTML = a;
	   }
	}
}

function clearScr() {
	
	document.getElementById('screen').innerHTML = '';
	a ='';
	ans = '';
}

function del() {
	
	a = a.substring(0, a.length-1);
	document.getElementById('screen').innerHTML = a;
}

function equalTo(){
	
	ans = eval(a);

	if(ans == undefined) // if pressed first nothing happens
	{
		
	}
	else{
	document.getElementById('screen').innerHTML = ans;
	}	
	a = '';
}