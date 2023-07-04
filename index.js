console.log ("Segunda Parte Funciones/Array")
console.log("Ejercicio 1 \n doblar numero");
/*Doblar números:

Crea una función que tome un array de números y devuelva un nuevo array donde cada número sea el doble del original.

Ejemplo:

Input: [1, 2, 3, 4]

Output: [2, 4, 6, 8]
 */
function nroDoble(nro){
    return nro.map(function(e){return e * 2});
}
let nro=[5,4,8,10];
console.log(nro);
 console.log(nroDoble(nro));


 console.log("Ejercicio 2 \n convertir en mayusculas")
 /*Nombre a mayúsculas:

Crea una función que tome un array de nombres y los transforme todos a mayúsculas.

Ejemplo:

Input: ['Pedro', 'Ana', 'Juan']

Output: ['PEDRO', 'ANA', 'JUAN']

Intermedio
 */
function nombreMay(nombres){
    return nombres.map(function(a){
        return a.toUpperCase()
    })
}
let nombres =["Hola","Juan","Sol"];
console.log(nombres);
console.log(nombreMay(nombres));

console.log("Ejercicio 3 \n numero al cuadrado");

/*
Cuadrado de números:

Crea una función que tome un array de números y devuelva un nuevo array donde cada número sea el cuadrado del original.

Ejemplo:

Input: [1, 2, 3, 4]

Output: [1, 4, 9, 16]
 */
function cuadrado(num) {
    return num.map(function (e) { return Math.pow(e,2) });
}
let num = [3, 4, 8, 10];
console.log(num);
console.log(cuadrado(num));

console.log("Ejercicio 4 \n primer letra");
/*
Primera letra de cada palabra:

Dado un array de palabras, crea una función que devuelva un nuevo array donde cada elemento sea la primera letra de cada palabra.

Ejemplo:
Input: ['Hola', 'mundo', 'desde', 'JavaScript']
Output: ['H', 'm', 'd', 'J']
 */
function primerLetra(palabra){
    return palabra.map(function (l){return l[0]})
}
let palabra = ["Como","Estas","tres","comiendo"];
console.log(palabra)
console.log(primerLetra(palabra));


console.log("Ejercicios con FILTER");
console.log("Ejercicio 1 \n filtrar numeros pares ");
/* Filtrar números pares:

Crea una función que tome un array de números y devuelva un nuevo array que contenga sólo los números pares.

Ejemplo:

Input: [1, 2, 3, 4, 5, 6]

Output: [2, 4, 6]

*/
function par(nro) {
    return nro.filter(function(n){ return n % 2== 0})
    
}
let nro2=[1,2,3,4,40,13,20,8];
console.log(nro2)
console.log(par(nro2));

console.log("Ejercicio 2 \n palabra larga muestra las de 4 o mas caracteres ");
/*Filtrar palabras largas 

Crea una función que tome un array de palabras y devuelva un nuevo array que contenga sólo las palabras que tienen más de 4 letras.

Ejemplo:

Input: ['Hola', 'yo', 'soy', 'JavaScript']

Output: ['Hola', 'JavaScript']
 */
function caracteres(palabras){
    return palabras.filter(function (pala){ return pala.length>= 4;
    })
}
 let palabras=["holanda","por","ver","valiente","dos","cuatro","hijo"];
 console.log(palabras);
 console.log(caracteres(palabras));
  
 
 console.log("Ejercicio 3 \n palabra que empieza con un letra especifica");

 /*
Filtrar palabras que empiezan con una letra específica:

Crea una función que tome un array de palabras y una letra. La función debería devolver un nuevo array que contenga sólo las palabras que comienzan con esa letra.

Ejemplo:

Input: ['manzana', 'banana', 'mango', 'naranja'] y 'm'

Output: ['manzana', 'mango']

 */

function buscadorLetra(cadena){
    return cadena.filter(function (l) {
        return l.includes("m");

    })
}
let cadena =["mango","viento","mar","lupa","oveja","mariposa","m"]
console.log(cadena);
console.log(buscadorLetra(cadena));

console.log("Ejercicios con REDUCE")
console.log("Ejercicio 1 \n sumar numeros ")
/* Sumar números:

Crea una función que tome un array de números y devuelva la suma de todos los números en el array.

Ejemplo:

Input: [1, 2, 3, 4, 5]

Output: 15
*/
function sumaTotal(nro1){
    return nro1.reduce(function(a,b){
        return a+b
    },0)
}

let nro1 =[5,4,2,25,14,50];
console.log(nro1);
console.log(sumaTotal(nro1));

console.log("ejercicio 2 \n concatenar cadenas")
/*Concatenar cadenas:

Crea una función que tome un array de palabras y las combine todas en una sola cadena.

Ejemplo:

Input: ['Hola', 'mundo', 'desde', 'JavaScript']

Output: 'Hola mundo desde JavaScript
 */
function texto(oracion){
    return oracion.reduce(function(a,b) { return a + " "+b
        
    },)
}
let oracion=["Hola","como","estas","jonathan","?"]
console.log(oracion);
console.log(texto(oracion));

console.log("Ejercicio 3 \n Producto de numeros")
/*Producto de números:

Crea una función que tome un array de números y devuelva el producto de todos los números en el array.

Ejemplo:

Input: [1, 2, 3, 4]

Output: 24
 */

function producto(multi){
    return multi.reduce(function(a,b){
        return a*b
    })
}

let multi =[2,5,3,4]
console.log(multi);
console.log(producto(multi));
console.log("Ejercicio 4 \n contar letra ")
/*Contar ocurrencias de una letra:

Crea una función que tome una cadena de texto y una letra, y devuelva el número de veces que aparece esa letra en la cadena.

Ejemplo:

Input: 'hola mundo desde javascript', 'o'

Output: 2

 */
function buscandoLetra(palabra1, letra) {
    let cadena = palabra1.join('');

    let contador = cadena.split('').reduce(function (acumulador, caracter) {
        if (caracter === letra) {
            return acumulador + 1;
        } else {
            return acumulador;
        }
    }, 1);

    return contador;
}

let palabra1 =["hola como estas todo bien"]
console.log(palabra1);
let letra = "o";
console.log(" buscar la letra " +letra)
console.log(buscandoLetra(palabra,letra));