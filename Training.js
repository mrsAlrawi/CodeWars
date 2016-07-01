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

function squareDigits(num){
	var string = num.toString();
	var result = "";
	for (var i = 0; i < string.length; i++) {
		var x = parseInt(string[i])*parseInt(string[i]);
		result+= x.toString();
	}
	return parseInt(result);
}

function squareDigits(num){
  return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
}