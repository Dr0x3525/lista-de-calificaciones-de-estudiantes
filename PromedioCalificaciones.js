
function SacarPromedio(NotasEstudiantes) {
    
    //console.log(NotasEstudiantes)
    let suma = 0;
    let promedio = 0;
    let notaMinima = 6;
    for (i = 0; i < NotasEstudiantes.length ; i++) {

        //console.log(NotasEstudiantes[i])
        suma = suma + NotasEstudiantes[i]
        promedio = suma / NotasEstudiantes.length 
    }

    //console.log(suma)
    //console.log(promedio)

    if (promedio >= notaMinima) {
        console.log("El promedio esta en: " + promedio)
        console.log("los estudiantes  pasaron")
    }
    else {
        console.log("El promedio esta en: " + promedio)
        console.log("los estudiantes no pasaron")
    }


}

function InicializacionDeVariables() {
    
    let NotasEstudiantes = [5,4,6,8,4]
    console.log("Las notas de los estudiantes son: "+NotasEstudiantes)
    SacarPromedio(NotasEstudiantes)

}


//Iniciazion del codigo

InicializacionDeVariables()