
/*Algoritmo edad
	Escribir "Digite su año de nacimiento : "
	leer anoNacimiento
	Escribir "Digite el año actual : "
	leer anoActual
	años<-anoActual-anoNacimiento
	Escribir "Usted tiene: ", años, " Años"
FinAlgoritmo*/

// let anoNacimiento = prompt("Ingrese su año de nacimiento: ");
// let anoActual= prompt("Ingrese el año actual: ")

// let edad = (anoActual - anoNacimiento)

// console.log("Usted tiene : ", edad, " Años");

const getEdge = (yearOfBirth) => {
	const currentYear = (new Date().getFullYear());
	return currentYear - yearOfBirth;
}

console.log(getEdge(1984))


