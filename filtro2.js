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

//filtrar los estudiantes que son hinchas del MEDELLIN
let filtro=estudiantes.filter(function(estudiante){
    return estudiante.equipo=="MEDELLIN"
})
console.log(filtro)