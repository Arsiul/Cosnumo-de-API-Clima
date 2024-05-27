

let btn = document.getElementById('botonBusqueda').addEventListener("click",() =>{
    let ciudad = document.getElementById("ciudadEntrada").value
    if(ciudad){
        ConectarDatos(ciudad)
    }

    
})

function ConectarDatos(ciudad){
    
    const key = "2cdd51d7a8928894744c90bb2df8b6ef"
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${key}`)
        .then(response => response.json())
        .then(response => MostrarDatos(response))

}    

// DATOS A MOSTRAR

//name, country, main,description

function MostrarDatos(data){

    let divdatosclima = document.getElementById('datosClima')
    divdatosclima.innerHTML = ""

    let nombre = data.name
    let pais = data.sys.country
    let estado = data.main.temp
    let descripcion = data.weather[0].description


    let dc_titulo = document.createElement('h2')
    dc_titulo.classList.add('titulo')
    dc_titulo.textContent = `${nombre}, ${pais}`
    let dc_estado = document.createElement('p')
    dc_estado.classList.add('estado')
    dc_estado.textContent = `El estado es: ${estado}`
    let dc_description = document.createElement('p')
    dc_description.classList.add('descripcion')
    dc_description.textContent = `Descripcion: ${descripcion}`

    divdatosclima.appendChild(dc_titulo)
    divdatosclima.appendChild(dc_estado)
    divdatosclima.appendChild(dc_description)
    
}



