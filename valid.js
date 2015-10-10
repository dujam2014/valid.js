/*
Valid JS
create by
Abhishek kanojia
Just include this file in your web app
using Below link :
<script type="text/javascript" src="/path-to/this-file/valid.js"></script>

Each function requires 2 parameter 
1. Id of input field
2. Id of html element to display errors on the html page. 


*/


var id,error;

/*
var regex='';
*/
/*
you can define regex here for function valid_regex
*/


function _(id){
	return document.getElementById(id);	
}

 

function valid_length(id,error,length){

	var a = _(id).value;
	var len=a.length;

	if(len!=length){
		_(error).innerHTML='<font style="color:red;">Must be of '+length+' characters</font>';
		return false;
	}else{
		_(error).innerHTML='';
		return true;
	}
}//verified

/*
Valid general also required pattern or regex
regex can be any pattern e.g regex=/^[a-zA-Z]*$/ allowing only alphabets
*/
function valid_general(id,error,regex){
	var a=_(id).value;
	var nameformat = regex;  //need to change in all
	
	if(a.match(nameformat))  
	{  
	  _(error).innerHTML='';
		return true;  
	}else{//if the conditions are not matched  
  		_(error).innerHTML='<font style="color:red;">*Only Alphabets are allowed</font>';
  			return false;  
	}

}//verified


/*
function that allows alphabets alongwith space
*/
function valid_alphabets_space(id,error){
	var a=_(id).value;
	var nameformat = /^[a-zA-Z ]*$/;  //need to change in all
	
	if(a.match(nameformat))  
	{  
	  _(error).innerHTML='';
		return true;  
	}else{ 
  		_(error).innerHTML='<font style="color:red;">*Only Alphabets and spaces are allowed</font>';
  			return false;  
	}

}//verified

function valid_mobile(id,error){
	var a=_(id).value;
	var len= a.length;
	var letters = /^[0-9]+$/;

	if(len==10 && a.match(letters)){
		_(error).innerHTML='';
		return true;
	}else{
		_(error).innerHTML='<font style="color:red;">* Please enter a valid mobile number.</font>';
		return false;
	}
}//verified

function valid_alphabets(id,error,len){
	var a=_(id).value;
	var nameformat = /^[a-zA-Z]*$/;  //need to change in all
	
if(len)
{


	if(a.match(nameformat) && a.length==len)  
	{  
	  _(error).innerHTML='';
		return true;  
	}else{  
  		_(error).innerHTML='<font style="color:red;">*Only Alphabets of length '+len+' are allowed</font>';
  			return false;  
	}

}else
	{
		if(a.match(nameformat))  
		{  
	  		_(error).innerHTML='';
				return true;  
		}else{//if the conditions are not matched  
  			_(error).innerHTML='<font style="color:red;">*Only Alphabets are allowed</font>';
  			return false;  
		}
	}
}//verified

function valid_number(id,error,start,end){
	var a=_(id).value;

	var letters = /^[0-9]+$/;
	

if(start && end)//if start and end is defined 
{
	if(a.match(letters) && a>=start && a<=end){
		_(error).innerHTML="";
		alert('cehck');
	}else{  
			_(error).innerHTML="<font style='color:red;'>*Please provide a valid Number between "+start+"and "+end+" the specified</font>"; 
 			return false;  
		} 

}else if (start){// if only start is defined then the number should be greater than start 
	if(a.match(letters) && a>=start)  
	{  
		 _(error).innerHTML=""; 
		 return true;
	}else{  
		_(error).innerHTML="<font style='color:red;'>*Please provide a valid Number greater or equal to "+start+" .</font>"; 
 			return false;   
		} 
}else{// only two parameters are defined
	if(a.match(letters))  
	{  
		 _(error).innerHTML=""; 
		 return true;
	}else{  
			_(error).innerHTML="<font style='color:red;'>*Please provide a valid Number</font>"; 
 			return false;  
		}  
}

}//error wit limited in between values


function check(id,start,end){
	var a=_(id).value;
		var letters = /^[0-9]+$/;

	if(a.match(letters) && a>=start && a<=end){
		alert('checkd');
	}else{
		alert('dalse');
	}
}