console.log('--EXERCISE 2: STRINGS');

/* a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en
mayúscula (utilizar toUpperCase). */

console.log('-Exercise 2.a:');

var text1 = 'helloworld';

console.log('Text: '+ text1 +'\nResult: '+ text1.toUpperCase());

/* b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar
substring). */

console.log('-Exercise 2.b:');

var text2, subText2;
text2 = 'softwareprofessional';
subText2 = text2.substring(0,5);

console.log('Text: '+ text2 +'\nResult: '+ subText2);

/* c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar
substring).*/

console.log('-Exercise 2.c:');

var text3, subText3;
text3 = 'todayisthursday';
subText3 = text3.substring(12);

console.log('Text: '+ text3 +'\nResult: '+ subText3);

/* d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en
una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +). */

console.log('-Exercise 2.d:');

var text4, subText4;
text4 = 'assignment';
subText4 = text4.substring(0,1).toUpperCase() + text4.substring(1).toLowerCase();

console.log('Text: '+ text4 +'\nResult: '+ subText4);

/* e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar
indexOf). */

console.log('-Exercise 2.e:');

var text5, spaceText5;
text5 = 'software professional';
spaceText5 = text5.indexOf(' ');

console.log('Text: '+ text5 +'\nResult: '+ spaceText5);

/* f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún
espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un
nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás
letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador
+). */

console.log('-Exercise 2.f:');

var text6, spaceText6, part1, part2;
text6 = 'industrial engineering';
spaceText6 = text6.indexOf(' ');
part1 = text6.substring(0,1).toUpperCase() + text6.substring(1,spaceText6).toLowerCase();
part2 = text6.substring(spaceText6+1,spaceText6+2).toUpperCase() + text6.substring(spaceText6+2).toLowerCase();

console.log('Text: '+ text6 +'\nResult: '+ part1 +' '+ part2);