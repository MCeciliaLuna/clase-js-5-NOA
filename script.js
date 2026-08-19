console.log("HOLA MUNDO");

const inputData = document.getElementById("texto");

//FUNCION FLECHA
const funcionFlecha = () => {
    const inputDataValue = inputData.value
    console.log(inputDataValue);
};

const onChangeFunction = () => {
    const inputDataValue = inputData.value;
    console.log(inputDataValue);
};

const onSubmitFunction = (event) => {
    event.preventDefault(); //prevenir el comportamiento por defecto del button
    console.log('Formulario enviado');
}

const emailUser = document.getElementById("email");
const passwordUser = document.getElementById("contrasenia");

// const guardarLocal = () => {
//     const usuario = emailUser.value
//     localStorage.setItem("emailUserData", usuario) //crea el item en la memoria del navegador
//     console.warn("Datos guardados LOCALMENTE", usuario);
// }

// const alertLogin =()=>{
//     const chequeoEmail = localStorage.getItem("emailUserData") // trae el item para cualquier uso

//     if (chequeoEmail === "lunama.cecilia@gmail.com") {
//         alert("Ese email ya está logueado")
//     } else {
//         alert("necesitas loguearte para continuar")
//     }

// }

// const borrarUsuarioLocal =()=>{
//     localStorage.clear() //ELIMINAR TODA LA DATA DEL LOCALSTORAGE
// }

// // alertLogin()

const guardarLocal = () => {
    const usuario = emailUser.value
    sessionStorage.setItem("emailUserData", usuario) //crea el item en la pestaña del navegador
    console.warn("Datos guardados EN LA SESION/PESTAÑA", usuario);
}

const alertLogin =()=>{
    const chequeoEmail = sessionStorage.getItem("emailUserData") // trae el item para cualquier uso

    if (chequeoEmail === "lunama.cecilia@gmail.com") {
        alert("Ese email ya está logueado")
    } else {
        alert("necesitas loguearte para continuar")
    }

}

const borrarUsuarioLocal =()=>{
    sessionStorage.clear() //ELIMINAR TODA LA DATA DEL SESSION
}

// alertLogin()