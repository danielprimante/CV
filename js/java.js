const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const telefono = document.getElementById('telefono');
const lugar = document.getElementById('lugar');
const imagen = document.getElementById('foto');
const edad= document.getElementById('edad');




const generardatos = async ()=>{
    try {
    const respuesta = await fetch('https://randomuser.me/api/');
    const { results } = await respuesta.json();
    const datos = results[0];
    
    
    nombre.textContent = datos.name.first +"  "+ datos.name.last;
    email.textContent = datos.email;
    telefono.textContent = datos.phone;
    lugar.textContent = datos.location.country +" / "+ datos.location.city;
    imagen.src = datos.picture.large;
    edad.textContent = datos.registered.age;


}   catch (error){}
}

document.addEventListener('DOMContentLoaded', generardatos);


