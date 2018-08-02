
//challenge 1

 
var tags="#";
for(var i=0; i<7; i++){
	console.log(tags); 
	tags = tags + "#"; 
}
/* create string of "#" symbol
and then print and concat additional "#" symbols in the body of the loop. The loop runs 7 times */

//challenge 2

/* if the parameter was a number type, returns true if the number mod 2 is equal to zero, and false otherwise. If the parameter ss not a number 
	it will notify you of that in the console
 */

function isEven(number){
	if(typeof(number) === "number"){
		return number%2===0;
	}
	console.log("please input a number"); 
} 

