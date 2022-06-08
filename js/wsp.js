
let mensajeWsp = document.getElementById('WSP');

console.log(mensajeWsp);

function mensaje_wsp(){
    var nombre = document.getElementById("contact-name")
    var mail = document.getElementById("contact-mail")
    var mensaje = document.getElementById("contact-message")

    var mensaje_final
    mensaje_final = "Hola!,%20Mi%20nombre%20es:%20" + nombre.value + ",%20"
    mensaje_final = mensaje_final + "%20Mi%20mail%20es:%20" + mail.value
    mensaje_final = mensaje_final + "%20Mensaje:%20" + mensaje.value

    var mensaje = "https://api.whatsapp.com/send?phone=+5491173699066&text=" + mensaje_final

    mensajeWsp.href = mensaje
}

mensajeWsp.addEventListener('click', mensaje_wsp())