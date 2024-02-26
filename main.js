// Ejercicio 1

const imprimirMensaje = mensaje => console.log(mensaje)

imprimirMensaje("Hola mundo!")

// Ejercicio 2

const crearmultiplicacion = (n1,n2) => n1*n2

imprimirMensaje(crearmultiplicacion(20,5))

// Ejercicio 3

const array = [ 1,2,3,4,5,6,7,8,9,10 ]

let nuevoArray = array.map(crearmultiplicacion)

console.log(nuevoArray)

console.log(beers[0].abv)

// Ejercicio 4

function cervezaMayorAlcohol(cervezas){
    let nuevoArray =[]
    for(let i = 0; i<10; i++){
        nuevoArray.push(cervezas.toSorted((a,b) => b.abv - a.abv)[i].name) 
    }
    return nuevoArray
}

console.log(cervezaMayorAlcohol(beers))

// Ejercicio 5

function cervezaMenosAmarga(cervezas){
    let nuevoArray = []
    for(let i = 0; i<10; i++){
        nuevoArray.push(cervezas.toSorted((a,b)=> a.ibu - b.ibu)[i].name)
    }
    return nuevoArray
}

console.log(cervezaMenosAmarga(beers))

// Ejercicio 6

function buscarCervezaNombre(cervezas,nombre){
    let cervezaObjeto = {}
    for(i of cervezas){
        if(i.name == nombre){
            cervezaObjeto = i
            return cervezaObjeto
        }
    }
    return "Cerveza no encontrada"
}

console.log(buscarCervezaNombre(beers,"AB:12"))

// Ejercicio 7

function buscarCervezaIbu(cervezas,valor){
    let cervezaObjeto = {}
    for(i of cervezas){
        if(i.ibu == valor){
            cervezaObjeto = i
            return cervezaObjeto
        }
    }
    return `No hay cerveza con un ibu de ${valor}`
}

console.log(buscarCervezaIbu(beers,40))

// Ejercicio 8

function buscarCervezaNombre(cervezas,nombre){
    let cervezaObjeto
    let x = 0
    for(i of cervezas){
        if(i.name == nombre){
            cervezaObjeto = x
            return cervezaObjeto
        }
        x++
    }
    return `${nombre} No existe`
}

console.log(buscarCervezaNombre(beers,"Buzz"))

// Ejercicio 9

function buscarCervezaAlcohol(cervezas,abv){
    let arrayCervezas = []
    for(i of cervezas){
        if(i.abv <= abv){
            arrayCervezas.push({nombre: i.name, abv:i.abv, ibu:i.ibu})
        }
    }
    return arrayCervezas
}

console.log(buscarCervezaAlcohol(beers,100))

// Ejercicio 10

function cervezasOrdenadasPropiedad(cervezas,propiedad,tof){
    let nuevoArray =[]
    if(tof){
        for(let i = 0; i<10; i++){
            nuevoArray.push(cervezas.toSorted((a,b) => a[propiedad] - b[propiedad])[i])
        }
    } else{
        for(let i = 0; i<10; i++){
            nuevoArray.push(cervezas.toSorted((a,b) => b[propiedad] - a[propiedad])[i])
        }
    }
    return nuevoArray
}

console.log(cervezasOrdenadasPropiedad(beers,"ibu",false))

// Ejercicio 11

function crearTablaCervezas(cervezas,idHtml){
    let html = document.querySelector(idHtml)
    let tablaCompleta = `<tr class="border-black border bg-black text-white text-2xl">
    <th class="border-black border">Nombre</th>
    <th class="border-black border">ABV</th>
    <th class="border-black border">IBU</th>
</tr>`
    for(i of cervezas){
        tablaCompleta += `
        <tr class="border-black border bg-slate-600 text-white text-2xl">
                <td class="border-black border">${i.name}</td>
                <td class="border-black border">${i.abv}</td>
                <td class="border-black border">${i.ibu}</td>
            </tr>
        `
    }
    html.innerHTML = tablaCompleta
}

crearTablaCervezas(beers,"#tablas")






