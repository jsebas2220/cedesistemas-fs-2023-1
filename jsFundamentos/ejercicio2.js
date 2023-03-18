/*let num1 = prompt("Ingrese el primer numero: ");
let num2 = prompt("Ingrese el segundo numero: ");

let suma = (num1 + num2)

console.log("La suma es: ", suma)*/


/*Algoritmo suma
	Escribir "Escriba el primer numero: "
	leer num1
	Escribir "Escriba el segundo numero: "
	leer num2
	sum<-num1+num2
	Escribir "La suma es: ", sum	
FinAlgoritmo*/

/*function sumar (num1, num2){
	let resultado = (num1 + num2)
	return resultado
}
console.log(sumar(3, 7))*/

// Functio flecha (arrow function)


// Uso esta funcioncon llaves cunado tengo varias lineas para hace el proceso con retorno explicito.
const sumarFlecha = (num1, num2) => {
//Operaciones
//procesos
//
return num1 + num2
}


// Funcion con parentesis cuando hay retorno implicito, colocando solo la operacion dentro de parentesis
const sumarFlecha2 = (num1, num2) => (num1 + num2);

// Funcion sin parentesis
const sumarFlecha3 = (num1, num2) => num1 + num2;