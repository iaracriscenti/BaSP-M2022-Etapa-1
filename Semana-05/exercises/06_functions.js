console.log('--EXERCISE 6: FUNCTIONS');

/* a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar
la función y guardar el resultado en una variable, mostrando el valor de dicha variable en
la consola del navegador */

console.log('-Exercise 6.a:');

function sum (num1, num2) {
    return num1 + num2;
}
var result = sum (34,21);

console.log('Result: ' + result);

/* b. A la función suma anterior, agregarle una validación para controlar si alguno de los
parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros
tiene error y retornar el valor NaN como resultado.*/

console.log('-Exercise 6.b:');

function sumB (num1, num2) {
    if (typeof num1 == 'number' && typeof num2 == 'number'){
        return num1 + num2;
    } else {
        alert('An error has been detected in one of the parameters.');
        return NaN;
    }
}

// To make sure it works:
console.log('Result: '+ sumB(32,'hi') +' '+sumB(12,12));

/* c. Crear una función validate integer que reciba un número como parámetro y devuelva
verdadero si es un número entero. */

console.log('-Exercise 6.c:');

function validateInteger (number) {
    return number == Math.round(number);
}

// To make sure it works:
console.log('Result: '+ validateInteger(3.7)+' '+validateInteger(8));

/* d. A la función suma del ejercicio 6b) agregarle una llamada que valide que los números
sean enteros. En caso que haya decimales mostrar un alerta con el error y retorna el
número convertido a entero (redondeado) */

console.log('-Exercise 6.d:');

function sumD (num1, num2) {
    if (typeof num1 == 'number' && typeof num2 == 'number') {
        if (!validateInteger(num1)) {
            alert('The number '+num1+' is not an integer');
            num1 = Math.round(num1);
        }
        if (!validateInteger(num2)) {
            alert('The number '+num2+' is not an integer');
            num2 = Math.round(num2);
        }
        return num1 + num2;
    } else {
        alert('An error has been detected in one of the parameters.');
        return NaN;
    }
}

// To make sure it works:
console.log('Result: '+ sumD(3.6,5)+' '+sumD('hi',7.5));

/* e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la
función suma probando que todo siga funcionando igual */

console.log('-Exercise 6.e:');

function intMaker (num) {
    if (!validateInteger(num)){
        alert('The number '+num+' is not an integer');
        num = Math.round(num);
    }
    return num;
}

function sumE (num1, num2) {
    if (typeof num1 == 'number' && typeof num2 == 'number'){
        num1 = intMaker(num1)
        num2 = intMaker (num2);
        return num1 + num2;
    } else {
        alert('An error has been detected in one of the parameters.');
        return NaN;
    }
}

// // To make sure it works:
console.log('Result: '+ sumE('f',8) +' '+ sumE(4,7) +' '+ sumE (5.7,6.7));