function findNextSquare(sq) {
  // Return the next square if sq if a perfect square, -1 otherwise
  if(Math.sqrt(sq)=== Math.floor(Math.sqrt(sq)))
  return Math.pow(Math.sqrt(sq)+1,2)
  return -1;
}

function GetSum(a,b){
	if(a>b){
	return GetSum(b,a);
	}
	if(a===b){
		return a;
	}
	return a + GetSum(a+1,b);
}

function getCount(words) {
	var obj ={vowels : 0, consonants : 0};
	for (var i=0;i<words.length;i++){
		if(words[i] === 'i' || words[i] === 'o' || words[i] === 'u' || words[i] === 'e' || words[i]==='a'){
		obj.vowels++;
  	}else if(words[i]!== " "){
	  obj.consonants++;
	  }
	}
  return obj;
}
//My solution
function squareDigits(num){
	var string = num.toString();
	var result = "";
	for (var i = 0; i < string.length; i++) {
		var x = parseInt(string[i])*parseInt(string[i]);
		result+= x.toString();
	}
	return parseInt(result);
}
// Code war solution
function squareDigits(num){
  return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
}
// my solution 
function alphabetPosition(text) {
var text = text.toLowerCase();
var string="";
 for(var i=0; i<text.length; i++){
 var x = text[i].charCodeAt(0)-96;
 if(/[a-z]/i.test(text[i]))
 string+= x+" ";
 }
 string= string.slice(0,-1)
 return string;
}
// Code war solution 
function alphabetPosition(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z]/g,'')
    .replace(/./g, c => c + " ")
    .replace(/[a-z]/g, c => c.charCodeAt(0) - 96)
    .trim();    
}
// My soltion 
var isSquare = function(n){
		if(n>=0 && Math.sqrt(n)%1 ===0)
		  return true; 
		  return false;
}
// Code war solution 
var isSquare = function(n){
	return Math.sqrt(n)%1 ===0
}

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}