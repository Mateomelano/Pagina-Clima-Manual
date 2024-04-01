let api_key = '4a0b3aecc3e2ad0ccbbb28833de5dfaf' 
let url =  'api.openweathermap.org/data/2.5/weather?q'
let defcalvin = 273.15


document.getElementById('botonBusqueda').addEventListener("click", () => {
    const ciudad = document.getElementById("ciudadEntrada").value
    if (ciudad) {
        Datos(ciudad)
    }
})

function Datos(ciudad){
    fetch(
        (`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${api_key}`)
      )
        .then((data) => data.json())
        .then((data) => mostrarDatos(data));
}

function mostrarDatos(data){
    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML= ''
    const ciudadNombre = data.name
    const ciudadPais = data.sys.country
    const temperatura = data.main.temp
    const humedad = data.main.humidity
    const descripcion = data.weather[0].description
    const icono = data.weather[0].icon


    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = `${ciudadNombre}, ${ciudadPais}`

    const temperaturaInfo = document.createElement('p')
    temperaturaInfo.textContent = `La temperatura es: ${Math.floor(temperatura-defcalvin)} C°`

    const humedadInfo = document.createElement('p')
    humedadInfo.textContent = `la humedad es:  ${humedad}%`

    const iconoInfo = document.createElement('img')
    iconoInfo.src = `https://openweathermap.org/img/wn/10d@2x.png`

    const descripcionInfo = document.createElement('p')
    descripcionInfo.textContent = `La descripcion meteorologica es : ${descripcion}`

    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(temperaturaInfo)
    divDatosClima.appendChild(humedadInfo)
    divDatosClima.appendChild(iconoInfo)
    divDatosClima.appendChild(descripcionInfo)

}
