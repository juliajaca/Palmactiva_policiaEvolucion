var letras = [
    "T",
    "R",
    "W",
    "A",
    "G",
    "M",
    "Y",
    "F",
    "P",
    "D",
    "X",
    "B",
    "N",
    "J",
    "Z",
    "S",
    "Q",
    "V",
    "H",
    "L",
    "C",
    "K",
    "E"
];

var nombre = document.getElementById("nombre");
var dni = document.getElementById("dni");
var btn_submit = document.getElementById("submit");
var comprobacion = document.getElementById("comprobacion");

// CLASE PERSONA
class Persona {
    constructor(nombre, dni){
        this.nombre = nombre;
        this.dni = dni;
    }

    policia(comprobar){
        var comprobar = comprobar_dni(this.dni);
        if(comprobar){
            comprobacion.innerHTML = `El DNI de ${this.nombre} es correcto`;
        } else {
            comprobacion.innerHTML = `El DNI de ${this.nombre} no es correcto`;
        }
    }
}

// FUNCION externa a la clase. Comprobar dni correcto
function comprobar_dni(dni){
    var numero_sin_letra = Number(dni.substring(0,8));
    // logica del dni
    const RESTO = numero_sin_letra % 23;
    var dni_completo = String(numero_sin_letra + letras[RESTO]);
    if (dni_completo===dni.toUpperCase()){
        return true;
    }else {
        return false;
    }
}

btn_submit.addEventListener('click', function(){
    // sacamos los valores, no el texto
    // INICIAR
    let persona = new Persona(nombre.value, dni.value);

    // Envío de la función como argumento hacia el prametro
    persona.policia(comprobar_dni);
})


