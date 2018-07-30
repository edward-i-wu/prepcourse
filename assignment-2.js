
//challenge 1

 
var tags="#";
for(var i=0; i<7; i++){
	console.log(tags); 
	tags = tags + "#"; 
}
/* create string of "#" symbol
and then print and concat additional "#" symbols in the body of the loop. The loop runs 7 times */

//challenge 2

function isEven(number){
	if(typeof(number) === "number"){
		return number%2===0;
	}
	console.log("please input a number"); 
} 

console.log(isEven(3)); 
console.log(isEven(26));
console.log(isEven("YEET"));  