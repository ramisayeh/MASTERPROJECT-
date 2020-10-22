//ex1:
function sum(num) {
  if (num === 0) {
        return num;
  }
 return num + sum(num - 1);
}

//ex2:
function factorial(num) {
  if (num < 0) 
        return -1;

  else if (num == 0) 
      return 1;
    
  else {
        return (num * factorial(num - 1));
}}

//ex3:

function repeatString(str, count) {
  if (count===0) {
  	return '';
  } 
return str + repeatString(str, count-1)
}
//ex4:

function fibonacci(num) {
  if (num <= 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}