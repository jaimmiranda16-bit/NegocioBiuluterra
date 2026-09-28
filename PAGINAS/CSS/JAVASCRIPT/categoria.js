const categorias = [
    {
        nombre:"shampoo",
        categoria:"shampoo",
        image: "/FOTOS\ Y\ VIDEOS/shampoo.png",
        enlace:"/PAGINAS/Shampoo.html"
       
    },

     {
        nombre:"Jabones",
        categoria:"jabon",
        image:"/FOTOS\ Y\ VIDEOS/jabon.png",
        enlace:"/PAGINAS/Jabones"
    },

     {
        nombre:"Cremas",
        categoria:"crema",
        image:"/FOTOS\ Y\ VIDEOS/crema.png",
        enlace:"/PAGINAS/cremas.html"
    },
];

const cardCate = document.querySelector("#categoria");

categorias.forEach(categoria => {
    const cartasCate = document.createElement("div");
    cartasCate.style.backgroundImage = `
        linear-gradient(rgba(0,0,0,.25), rgba(0,0,0,.55)),
        url("${categoria.image}")
    `;

    cartasCate.innerHTML =  `
     <img class="foto"  src="${categoria.image}" alt="${categoria.nombre}">
     <h3 class="subtituloCate">${categoria.nombre}</h3>
     <button class="button">Ver más</button>
    `
    
    const boton = cartasCate.querySelector(".button");
    boton.addEventListener("click", () =>{
        window.location.href = categoria.enlace;
    });
    cardCate.appendChild(cartasCate);
});
const enlaces = document.querySelectorAll(".enlaces");

enlaces.forEach(enlace => {

    if (enlace.pathname === window.location.pathname) {
        enlace.classList.add("activo");
    }

});

const imagenesDos = [
    "/FOTOS Y VIDEOS/spa-still-life-wooden-background-concept-beauty-body-care.jpg",
    "/FOTOS Y VIDEOS/close-up-hand-with-cream-finger.jpg",
    "/FOTOS Y VIDEOS/shampoo-bottle-beauty-product.jpg"
];

const titulosDos = [
    "jabones artesanales",
    "cremas naturales",
    "shampoos y acondicionadores"
]

const heroDos = document.querySelector("#categorias");
const tituloDos = document.querySelector("#tituloDos");

const siguienteDos = document.querySelector("#siguienteDos");
const anteriorDos = document.querySelector("#anteriorDos");

let posicionDos = 0;

function cambiarHeroDos() {

    heroDos.style.backgroundImage = `url("${imagenesDos[posicionDos]}")`;

    tituloDos.textContent = titulosDos[posicionDos];

}
siguienteDos.addEventListener("click", function() {

    posicionDos++;

    if (posicionDos >= imagenesDos.length) {
        posicionDos = 0;
    }

    cambiarHeroDos();

});

anteriorDos.addEventListener("click", function() {

    posicionDos--;

    if (posicionDos < 0) {
        posicionDos = imagenesDos.length - 1;
    }

    cambiarHeroDos();

});
setInterval(function() {

    posicionDos++;

    if (posicionDos >= imagenesDos.length) {
        posicionDos = 0;
    }

    cambiarHeroDos();

}, 4000);

cambiarHeroDos();