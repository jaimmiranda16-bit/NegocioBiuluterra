const productos = [
    {
        nombre:"shampoo con Aceites Florales Libre de Sulfatos",
        empresa:"Tan Natural",
        precio: 20,
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
];

const card = document.querySelector("#cards");

productos.forEach(producto => {
    const cartas = document.createElement("div");
    cartas.innerHTML =  `
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
    `
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

// Cambia esto en shampoo.js:
const enlacesMenu = document.querySelectorAll(".enlaces");
const paginaActual = window.location.pathname.split("/").pop().toLowerCase();

enlacesMenu.forEach(enlace => {
    const hrefEnlace = enlace.getAttribute("href");

    if (hrefEnlace) {
        if (hrefEnlace.includes(paginaActual) || 
           ((paginaActual.includes("jabones") || paginaActual.includes("cremas") || paginaActual.includes("shampoo")) && hrefEnlace.includes("categoria.html"))) {
            enlace.classList.add("activo");
        }
    }
});