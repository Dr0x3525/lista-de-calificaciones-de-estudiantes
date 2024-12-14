
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

function ValorNanNumero(Nota) {
    while (isNaN(Nota)) {
        Nota = prompt("Esto no es numero cambialo")
        Nota = parseFloat(Nota)
    }
    
    return Nota
}

function verificarSerNumeros(Nota) {

    Nota = parseFloat(Nota)

    if (isNaN(Nota)) {
        Nota = ValorNanNumero(Nota)
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
                TerminarPrograma = prompt("sI deseas agregar mas estudiante escriba Y")
                TerminarPrograma = TerminarPrograma.toUpperCase()
                if (TerminarPrograma != "Y") {
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