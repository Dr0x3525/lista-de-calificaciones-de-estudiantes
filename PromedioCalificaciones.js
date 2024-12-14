function SacarPromedio(NotasEstudiantes) {
    
    let suma = 0;
    let promedio = 0;
    let notaMinima = 6;
    for (i = 0; i < NotasEstudiantes.length ; i++) {

        suma = suma + NotasEstudiantes[i]
    }

    promedio = suma / NotasEstudiantes.length 


    if (promedio >= notaMinima) {
        console.log("El promedio esta en: " + promedio.toFixed(2))
        console.log("los estudiantes  pasaron")
    }
    else {
        console.log("El promedio esta en: " + promedio.toFixed(2))
        console.log("los estudiantes no pasaron")
    }


}

function verificarSerNumeros(Nota) {

    Nota = parseFloat(Nota)

    while (isNaN(Nota) || Nota < 0 || Nota > 10) {
        Nota = parseFloat(prompt("Por favor, ingrese una nota válida entre 0 y 10:"));
    }


    return Nota
}

function AñadirNotas(NotasEstudiantes) { 
    let finalizar = true
    while (finalizar === true) {
            let Nota = prompt("Cual es la nota del estudiante " )
            Nota = verificarSerNumeros(Nota)
            NotasEstudiantes.push(Nota)
            console.log(NotasEstudiantes)
            if (NotasEstudiantes.length >= 5) {
                let DeseaContinuar = prompt("sI deseas agregar mas estudiante escriba Y")
                DeseaContinuar = DeseaContinuar.toUpperCase()
                if (DeseaContinuar != "Y") {
                    finalizar = false
                }
                
            }
    }
}

function InicializacionDeVariables() {
    let NotasEstudiantes = []
    AñadirNotas(NotasEstudiantes)
    SacarPromedio(NotasEstudiantes)

}


//Iniciazion del codigo

InicializacionDeVariables()