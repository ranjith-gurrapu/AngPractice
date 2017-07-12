// JavaScript Document

function reverse()
{
  var x="hyderabad";
var i=0;

var newString = "";

/*
for(var i=x.length-1 ; i>=0 ;i--)
{
	newString += x[i];
}
*/
//document.write("x:"+x[2]);
//for (i=0; i<x.length; i++)
	

	for (i=1; i<x.length; i++)
  {
	 
	
	//var rever="a";
	
	
	//k=x.substr(-1,i);
	
	newString=newString+x.substr(-i,1);
		
   
	
  }
document.write(newString.concat("Ranjith"));	
  document.write("rev :"+newString);
 // return x.split("").reverse().join("");
  // document.write("Reverse :"+x.split("").reverse().join(""));
}