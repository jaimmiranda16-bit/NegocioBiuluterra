const productos = [
    {
        nombre:"shampoo con Aceites Florales Libre de Sulfatos",
        empresa:"Tan Natural",
        precio: 3000,
        categoria:"shampoo",
        image: "/FOTOS\ Y\ VIDEOS/shampoo_con_aceites_florales_libre_de_sulfatos.png",
    },

     {
        nombre:"shampoo libre de gluten",
        empresa:"Tan Natural",
        precio: 20,
        categoria:"shampoo",
        image:"/FOTOS\ Y\ VIDEOS/shampoo_libre_de_gluten.png",
    },

     {
        nombre:"shampoo neutro",
        empresa:"Tan Natural",
        precio: 20,
        categoria:"shampoo",
        image:"/FOTOS\ Y\ VIDEOS/shampoo_neutro.png",
    },

    {
        nombre:"Shampoo Oro",
        empresa:"Tan Natural",
        precio: 20,
        categoria:"shampoo",
        image:"/FOTOS\ Y\ VIDEOS/shampoo_oro.png",
    },

    {
        nombre:"shampoo para la caida del pelo",
        empresa:"Tan Natural",
        precio: 20,
        categoria:"shampoo",
        image:"/FOTOS\ Y\ VIDEOS/shampoo_para_la_caida_del_pelo.png",
    },

    {
        nombre:"Enjuague triaminico",
        empresa:"Tan Natural",
        precio: 20,
        categoria:"enjuague",
        image:"/FOTOS\ Y\ VIDEOS/enjuague_triaminico.png",
    },

    {
        nombre:"Enjuague",
        empresa:"Tan Natural",
        precio: 20,
        categoria:"enjuague",
        image:"/FOTOS\ Y\ VIDEOS/enjuague.png",
    },


    {
        nombre:"Mascara Reacondicionadora capilar",
        empresa:"Tan Natural",
        precio: 20,
        categoria:"crema",
        image:"/FOTOS\ Y\ VIDEOS/mascara_reacondicionadora_capilar.png",
    },

    {
        nombre:"promo 1",
        empresa:"Tan Natural",
        precioAntes:40,
        precio: 20,
        categoria:"oferta",
        image:"/FOTOS\ Y\ VIDEOS/promo_1.png",
    },

     {
        nombre:"promo 2",
        empresa:"Tan Natural",
        precioAntes:40,
        precio: 20,
        categoria:"oferta",
        image:"/FOTOS\ Y\ VIDEOS/promo_2.png",
    },

     {
        nombre:"promo 3",
        empresa:"Tan Natural",
        precioAntes:40,
        precio: 20,
        categoria:"oferta",
        image:"/FOTOS\ Y\ VIDEOS/promo_3.png",
    },

     {
        nombre:"promo 4",
        empresa:"Tan Natural",
        precioAntes:40,
        precio: 20,
        categoria:"oferta",
        image:"/FOTOS\ Y\ VIDEOS/promo_4.png",
    },

     {
        nombre:"promo 6",
        empresa:"Tan Natural",
        precioAntes:40,
        precio: 20,
        categoria:"oferta",
        image:"/FOTOS\ Y\ VIDEOS/promo_6.png",
    },

     {
        nombre:"promo 7",
        empresa:"Tan Natural",
        precioAntes:40,
        precio: 20,
        categoria:"oferta",
        image:"/FOTOS\ Y\ VIDEOS/promo_7.png",
    },

     {
        nombre:"promo 8",
        empresa:"Tan Natural",
        precioAntes:40,
        precio: 20,
        categoria:"oferta",
        image:"/FOTOS\ Y\ VIDEOS/promo_8.png",
    },

     {
        nombre:"promo 9",
        empresa:"Tan Natural",
        precioAntes:40,
        precio: 20,
        categoria:"oferta",
        image:"/FOTOS\ Y\ VIDEOS/promo_9.png",
    },

     {
        nombre:"promo 10",
        empresa:"Tan Natural",
        precioAntes:40,
        precio: 20,
        categoria:"oferta",
        image:"/FOTOS\ Y\ VIDEOS/promo_10.png",
    },

     {
        nombre:"promo 11",
        empresa:"Tan Natural",
        precioAntes:40,
        precio: 20,
        categoria:"oferta",
        image:"/FOTOS\ Y\ VIDEOS/promo_11.png",
    },

     {
        nombre:"promo 12",
        empresa:"Tan Natural",
        precioAntes:40,
        precio: 20,
        categoria:"oferta",
        image:"/FOTOS\ Y\ VIDEOS/promo_12.png",
     },
];

const card = document.querySelector("#cards");
const ofer = document.querySelector("#ofer");

const productosOne = productos.filter(producto=> producto.categoria !== "oferta");

productosOne.forEach(producto =>{
    const cartas = document.createElement("div");

    cartas.innerHTML = `
        <div class="card">
            <div class="face front">
                <img src="${producto.image}" alt="${producto.nombre}" class="card__img">
                <h3>${producto.nombre}</h3>
            </div>

            <div class="face back">
                <span class="card--descripcion">${producto.empresa}</span>
                <h2 class="card--titulo">${producto.nombre}</h2>
                <h2 class="card--precio">$${producto.precio}</h2>

                <div class="link">
                    <button class="card__button agregar">Agregar al carrito</button>
                    <button class="card__button comprar">Comprar</button>
                </div>
            </div>
        </div>
    `;

    // BOTÓN AGREGAR AL CARRITO
    const botonAgregar = cartas.querySelector(".agregar");

    botonAgregar.addEventListener("click", () => {
        agregarAlCarrito(producto);
    });

    // BOTÓN COMPRAR
    const botonComprar = cartas.querySelector(".comprar");

    botonComprar.addEventListener("click", () => {
        comprarProducto(producto);
    });

    card.appendChild(cartas);
});

//--------------------------------------------------------------------------------------
const productosTwo = productos.filter(
    producto => producto.categoria === "oferta"
);

productosTwo.forEach(producto => {
    const cartasOfertas = document.createElement("div");

    cartasOfertas.innerHTML = `
         <div class="card">
            <div class="face front">
                <img src="${producto.image}" alt="${producto.nombre}" class="card__img">
                <h3>${producto.nombre}</h3>
            </div>

            <div class="face back">
                <span class="card--descripcion">${producto.empresa}</span>
                <h2 class="card--titulo">${producto.nombre}</h2>
                <h2 class="card--precioOferta">$${producto.precioAntes}</h2>
                <h2 class="card--precio">$${producto.precio}</h2>

                <div class="link">
                    <button class="card__button agregar">Agregar al carrito</button>
                    <button class="card__button comprar">Comprar</button>
                </div>
            </div>
        </div>
    `;

    const botonAgregar = cartasOfertas.querySelector(".agregar");

    botonAgregar.addEventListener("click", () => {
        agregarAlCarrito(producto);
    });

    const botonComprar = cartasOfertas.querySelector(".comprar");

    botonComprar.addEventListener("click", () => {
        comprarProducto(producto);
    });

    ofer.appendChild(cartasOfertas);
});

//--------------------------------------------------------------------------------------
function agregarAlCarrito(producto) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    const productoExistente = carrito.find(
        item => item.nombre === producto.nombre
    );

    if (productoExistente) {
        productoExistente.cantidad++;
    } else {
        carrito.push({...producto,cantidad: 1});
    }
    localStorage.setItem("carrito", JSON.stringify(carrito));

    alert("Producto agregado al carrito 🛒");
}

//--------------------------------------------------------------------------------------
function comprarProducto(producto) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    const productoExistente = carrito.find(
        item => item.nombre === producto.nombre
    );

    if (productoExistente) {
        productoExistente.cantidad++;
    } else {
        carrito.push({...producto,cantidad: 1});
    }
    localStorage.setItem("carrito", JSON.stringify(carrito));

    window.location.href = "/PAGINAS/carrito.html";
}


// -------------------------------------------------------------------------------------------------------------------

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



const imagenes = [
    "/FOTOS Y VIDEOS/imgaenUno.jpg",
    "/FOTOS Y VIDEOS/imagenDos.jpg",
    "/FOTOS Y VIDEOS/imagenTres.jpg",
    "/FOTOS Y VIDEOS/imagenCuatro.jpg",
    "/FOTOS Y VIDEOS/imagenCinco.jpg"
];


const hero = document.querySelector(".encabezado");


let posicion = 0;

function cambiarHero() {

    hero.style.backgroundImage = `url("${imagenes[posicion]}")`;


}

setInterval(function() {

    posicion++;

    if (posicion >= imagenes.length) {
        posicion = 0;
    }

    cambiarHero();

}, 4000);

cambiarHero();

const enlaces = document.querySelectorAll(".enlaces");

enlaces.forEach(enlace => {

    if (enlace.pathname === window.location.pathname) {
        enlace.classList.add("activo");
    }

});