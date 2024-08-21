"use strict";
//while(){
    
//};
//do() {
    //Primero hace después
//} while();

//for(){

//}; 


//let AcumuladorDesaprobados, AcumuladorAprobados, AcumuladorPromocionados; //PascalCase
//let contador_desaprobados, contador_aprobados, contador_promocionado //SnakeCase

//Contadores son todos los valores que vao arrancar de 0 e se somar dentro 
let contadorDesaprobado = 0, contadorAprobado = 0, contadorPromocionados = 0; //camelCase 
//Acumuladores sao as variaveis que estao sendo acumulada desde seu numero 0
let acumuladoresDesaprobados = 0, acumuludoresAprobados = 0, acumuladoresPromocionados = 0;
//Variaveis para maximos e minimos 
let minNota = 1, maxNota = 10;

do{
    let nota = parseInt(prompt("Ingrese una nota (1 a 10)"));

    //Empiezo a preguntar
    if (nota < 4){
    
        //Desaprobado
        //Estamos somando os valores das notas para sabermos quantos estão desaprovados
        contadorDesaprobado = contadorDesaprobado +1;
        acumuladoresDesaprobados = acumuladoresDesaprobados + nota;
    }
    else{
        //Aprobado

        //Estamos somando os valores das notas para sabermos quantos estão aprovados

        contadorAprobado++; // Do mesmo fuckin valor de sima só que resumida 
        acumuladoresAprobados =+ nota; 
        //Preguntamos si promociono o no
        if (nota >=7){
            //Promocionado

            //Estamos somando os valores das notas para sabermos quantos estão promocionados.
            contadorPromocionados++;
            acumuladoresDesaprobados += nota;
        }
    }

    //Pregunto si la nueva nota es mayor a la anterior
    if(nota > maxNota){
        //Caso seja assim, vamos encontrar um novo maximo
        maxNota = nota;
    }
    //Pergunto si a nova nota e menor a anterior
    if(nota < minNota){
        //Caso seja assim, vamos encontrar um novo minimo
        minNota = nota;
    }

} while(confirm("Otra nota?"));

//Uma vez que se vão carregar as notas, sacamos los promedios
alert(`Hubo ${contadorDesaprobado} alumnos Desaprobados y su nota promedio fue de ${(acumuladoresDesaprobados / contadorDesaprobado).toFixed(1)}`); // las ``así son para usar contas o variables a ser declarada
alert(`Hubo ${contadorAprobado} alumnos Aprobados y su nota promedio fue de ${(acumuludoresAprobados / contadorAprobado).toFixed(1)}`);
alert(`Hubo ${contadorPromocionados} alumnos Promocionados y su nota promedio fue de ${(acumuladoresPromocionados / contadorPromocionados).toFixed(1)}`); //to.FixedCuantas caracter de decimales queremos ver en los valores ingresado
//to.Fixed es un method dado para dar un Number que convierte en un string

alert(`La nota minima del curso fue${minNota}`);
alert(`La nota maxima del curso fue${maxNota}`);