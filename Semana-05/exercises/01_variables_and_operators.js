console.log('--EXERCISE 1: VARIABLES AND OPERATORS');

/* a. Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la
suma de ambos números en una 3er variable */

console.log('-Exercise 1.a:');
var num1, num2, sum;
num1 = 24;
num2 = 45;
sum = num1 + num2;

console.log('Number 1: '+ num1 +',\nNumber 2: '+ num2 +',\nResult: '+ sum);

// b. Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable 

console.log('-Exercise 1.b:');
var a, b, str;
a = 'Radium';
b = 'Rocket';
str = a + b;

console.log('String 1: '+ a +',\nString 2: '+ b +',\nResult: '+ str);

/* c. Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras
del string) guardando el resultado de la suma en una 3er variable (utilizar length). */

console.log('-Exercise 1.c:');
var str1, str2, strLength;
str1 = 'Java';
str2 = 'Script';
strLength = str1.length + str2.length;

console.log('String 1: '+ str1 +',\nString 2: '+ str2 +',\nResult: '+ strLength);

