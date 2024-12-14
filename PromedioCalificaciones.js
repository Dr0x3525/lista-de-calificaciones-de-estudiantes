
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

function verificarSerNumeros(NotasEstudiantes) {
    
    //aqui se comprueban si los valores son o no numeros
}


function AñadirNotas(NotasEstudiantes) { 


    let finalizar = true

    while (finalizar === true) {

        for (i=0;finalizar = true;i++) {
            let Nota = prompt("Cual es la nota del estudiante " )
            NotasEstudiantes.push(Nota)
            console.log(NotasEstudiantes)
            if (NotasEstudiantes.length > 5) {
                TerminarPrograma = prompt("deseas agregar mas estudiante Y/N")
                if (TerminarPrograma === "Y") {
                    finalizar = true
                }
                
            }
        }
    }
}

function InicializacionDeVariables() {

    
    let NotasEstudiantes = []

    AñadirNotas(NotasEstudiantes)

    //verificarSerNumeros(NotasEstudiantes)

    //console.log("Las notas de los estudiantes son: "+NotasEstudiantes)
    //SacarPromedio(NotasEstudiantes)

}


//Iniciazion del codigo

InicializacionDeVariables()