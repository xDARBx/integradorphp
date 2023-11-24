console.log ("COPYRIGHT DARB 2023");


var dato1 = document.getElementById("nombre");
var dato2 = document.getElementById("apellido");
var dato3 = document.getElementById("correo");
var costo = 200;
var cantidad = document.getElementById("cantidad");
var categoria = document.getElementById("categoria");
var precioPagar = document.getElementById("precioPagar");
var capturaSubmit = document.getElementById("formulario")

// function resetear(){

//     dato1.value = "";
//     dato2.value = "";
//     dato3.value = "";
//     document.getElementById("cantidad").value = "";
//     document.getElementById("precioPagar") = "";
// };
capturaSubmit.addEventListener('submit', function(e) {

  e.preventDefault()
  resumen()
  validar()
})


function resumen() {
  
    var total = costo * cantidad.value;
    // console.log(total)
    var descuento = (total * categoria.value)/100;
    // console.log(descuento)
    precioPagar = total - descuento;
    //console.log(precioPagar)
    document.getElementById("precioPagar").innerText = Number(total) - Number(descuento);
  };


  // var total = Number(costo * cantidad);
    // console.log(total)
    // var descuento = (total * categoria)/100 ;
    // console.log(descuento)
    // console.log(total-descuento + "hola")

//   ____________pruebas________________


  /* var dato1 = document.getElementById("nombre")
var dato2 = document.getElementById("apellido")
var dato3 = document.getElementById("correo")
var dato4 = document.getElementById("cantidad")

function resetear(){

    dato1.value = "";
    dato2.value = "";
    dato3.value = "";
    dato4.value = "";  
}

var seleccionar = document.getElementById("categoria");
var opcion1 = document.getElementById("estudiante");
var opcion2 = document.getElementById("trainee");
var opcion3 = document.getElementById("junior");

function resumen(){

    // if (seleccionar = opcion1){
        
    //     alert((dato4.value*200)-(200*0.8))
    // }
    if (seleccionar == opcion2){
        
        alert((dato4.value*200)-(200*0.5))

    }

} */



 /*  function mostrar(){
    precioPagar.innerText = resumen(
        precio,
        cantidad,
        categoria
      );
      console.log(resumen)
  }; */




