/*Algoritmo edad
	Escribir "Ingrese la nota 1: "
	leer nota1
	Escribir "Ingrese la nota 2: "
	leer nota2
	Escribir "Ingrese la nota 3: "
	leer nota3
	Escribir "Ingrese la nota 4: "
	leer nota4
	Escribir "Ingrese la nota 5: "
	leer nota5
	sumaNotas<-nota1 + nota2 + nota3 + nota4 + nota5
	promedio<-sumaNotas / 5
	Escribir "Su promedio final es: ", promedio
FinAlgoritmo*/

// let nota1 = prompt("Ingrese el valor ded la nota1: ");
// let nota2 = prompt("Ingrese el valor ded la nota2: ");
// let nota3 = prompt("Ingrese el valor ded la nota3: ");
// let nota4 = prompt("Ingrese el valor ded la nota4: ");
// let nota5 = prompt("Ingrese el valor ded la nota5: ");
// let sumaNotas = (nota1 + nota2 + nota3 + nota4 + nota5);
// let promedioNotas = (sumaNotas / 5);

// console.log("Su promedio de notas es: ", promedioNotas);

const calculateAverage = (note1, note2, note3, note4, note5) => {
	let average = (note1 + note2 + note3 + note4 + note5) / 5;
	return average;
  }

console.log (calculateAverage(1 , 3, 4, 5, 7))

const calculateAverageV2 = (...n) => {
	let sumNotes = 0;
	n.forEach ((grade, index) => {
		sumNotes += grade;
	});
	return (sumNotes) / n.length
}
console.log (calculateAverageV2(1, 3, 4, 5, 7))


const calculateAverageV3 = (...n) => {
	let sumNotes = 0;
	n.map ((grade, index) => {
		sumNotes += grade;
	});
	return (sumNotes) / n.length
}
console.log (calculateAverageV2(1, 3, 4, 5, 7))