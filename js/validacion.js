// Para valiad el formulario se van a utilizar los eventos de js

// 1.- Asignar los campos 
const nameField = document.getElementById("Nombre");
const apellidoField = document.getElementById("Apellido");
const mailField = document.getElementById("email");

//2.- Asignar los eventos 
// validacion Nombre
nameField.addEventListener("blur", function (e) {
    const fieldValue = e.target.value;
    if (fieldValue.length < 3) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El nombre debe tener al menos 4 letras!',
        })
    }
})

// Validacion Correo
mailField.addEventListener("blur", function (e) {
    const fieldValue = e.target.value;
    if (fieldValue.length < 6) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresar correo electronico valido',
        })
    }
})

//Validacion boton
botonEnviar.addEventListener(`click`,function(event){
    event.preventDefault(); 
        Swal.fire({
            icon: 'success',
            title: 'Registrado exitosamente',
            showConfirmButton: false,
            timer: 1500
        })
    
})


