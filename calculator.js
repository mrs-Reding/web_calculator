var operation, left, right;

$(document).ready(function() {
	empty();
});

function setOperation(action) {
	operation = action;
}

function printNumbers(number) {
	if(operation){
		if (number ==  '.' && !right.length) {
			right = "0.";
		} else if(number ==  '.' && right.indexOf('.') == -1 || number != '.'){
			right = right.concat(number);
		}
		
		$('.display').html(right);
	}else {
		if(number == '.' && !left.length) {
			left = "0" + number;	
		} else if(number ==  '.' && left.indexOf('.') == -1 || number != '.'){
			left = left.concat(number);
		}
		
		$('.display').html(left);
	}
}

function calculate() {
	var result;
	left = left.indexOf('.') > -1 ? Number.parseFloat(left) : Number.parseInt(left);
	right = right.indexOf('.') > -1 ? Number.parseFloat(right) : Number.parseInt(right)
		

	if(operation=='*'){
		result = left*right;
	} else if(operation=='/'){
		result = left/right;
	} else if(operation=='+'){
		result =  left+right;
	} else if(operation=='-'){
		result = left-right;
	} 
	empty();
	$('.display').html(result);
}
function empty() {
	operation=null;
	left="";
	right="";
	$('.display').html(0)
}
