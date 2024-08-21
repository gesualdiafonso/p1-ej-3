"use strict";

let notas = [];
let nota;
let sumDesaprobados = 0, countDesaprobados = 0;
let sumAprobados = 0, countAprobados = 0;
let sumPromocionados = 0, countPromocionados = 0;
let minNota = 10, maxNota = 0;
do {
    nota = parseFloat(prompt("Ingresa una nota (o ingresa un número negativo para terminar):"));
    if (nota >= 0 && nota <= 10) {
        notas.push(nota);

        // Calcular mínimos y máximos
        if (nota < minNota) minNota = nota;
        if (nota > maxNota) maxNota = nota;

        // Clasificación y acumulación de notas
        if (nota < 4) {
            sumDesaprobados += nota;
            countDesaprobados++;
        } else {
            sumAprobados += nota;
            countAprobados++;

            if (nota >= 7) {
                sumPromocionados += nota;
                countPromocionados++;
            }
        }
    }
} while (nota >= 0);

let promedioDesaprobados = countDesaprobados ? (sumDesaprobados / countDesaprobados).toFixed(2) : 0;
let promedioAprobados = countAprobados ? (sumAprobados / countAprobados).toFixed(2) : 0;
let promedioPromocionados = countPromocionados ? (sumPromocionados / countPromocionados).toFixed(2) : 0;

// Mostrar resultados
console.log(`Promedio de alumnos desaprobados: ${promedioDesaprobados}`);
console.log(`Promedio de alumnos aprobados: ${promedioAprobados}`);
console.log(`Promedio de alumnos promocionados: ${promedioPromocionados}`);
console.log(`Nota mínima ingresada: ${minNota}`);
console.log(`Nota máxima ingresada: ${maxNota}`);