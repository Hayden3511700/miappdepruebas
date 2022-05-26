    
    let intentos = sessionStorage.getItem("contador")
    
    if(intentos < 1){
        Swal.fire({
            html: 'Por favor revise nuestros <a style="color: blue; cursor: pointer; text-decoration: underline blue" onClick="hola()">terminos y condiciones</a>',
            confirmButtontText: 'Listo',
            icon: 'info',
        
            padding: '1rem',
            backdrop: true,
            // toast: true,
            position: 'bottom',
            
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
            stopKeydownPropagation: false,
            
            showConfirmButton: true,
            showCancelButtn: false,
            showCloseButton: false,
            closeButtonAriaLabel: 'Cerrar esta alerta',
        
            customClass:{
                content: 'content-class'
            }
        })  
        let contador = 1
        sessionStorage.setItem("contador", contador) 
    }
    
function avisoEnvio(){
    let nombre = document.getElementById("fname").value
    let correo = document.getElementById("femail").value
    let mensaje = document.getElementById("mes").value

    re=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
    
    if (nombre != '' && re.exec(correo) && mensaje != '') {
        Swal.fire({
            title: "Enviado",
            icon: "success",
            text: ".",
            position: "bottom",
            // backdrop: "linear-gradient(black, #EDCB54)",
            background: "#EDCB54",
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
            showConfirmButton: false,
            showCancelButton: false,
            timer: 9000
          });
        
    }else{
        Swal.fire({
            title: "Error",
            icon: "error",
            text: "Verifica tus datos",
            position: "top",
            // backdrop: "linear-gradient(black, #EDCB54)",
            background: "#EDCB54",
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
            showConfirmButton: false,
            showCancelButton: false,
            timer: 7000
          });
    }
}