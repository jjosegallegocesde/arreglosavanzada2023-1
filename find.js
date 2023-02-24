let estudiantes=[
    {
        id:1,
        nombre:"Juan",
        equipo:"NACIONAL"
    },
    {
        id:2,
        nombre:"Francia",
        equipo:"MEDELLIN"
    },
    {
        id:3,
        nombre:"Ana",
        equipo:"MEDELLIN"
    }
]

let buscador=estudiantes.find(function(estudiante){
    return estudiante.id==3
})
let filtro=estudiantes.filter(function(estudiante){
    return estudiante.id==3
})
let busqueda=estudiantes.some(function(estudiante){
    return estudiante.id==3
})
console.log(buscador)
console.log(filtro)
console.log(busqueda)