const productos = [
    {
        nombre:"promo 1",
        empresa:"Tan Natural",
        precioAntes:40,
        precio: 20,
        categoria:"oferta",
        image:"/FOTOS Y VIDEOS/promo_1.png",
    },

     {
        nombre:"promo 2",
        empresa:"Tan Natural",
        precioAntes:40,
        precio: 20,
        categoria:"oferta",
        image:"/FOTOS Y VIDEOS/promo_2.png",
    },

     {
        nombre:"promo 3",
        empresa:"Tan Natural",
        precioAntes:40,
        precio: 20,
        categoria:"oferta",
        image:"/FOTOS Y VIDEOS/promo_3.png",
    },

     {
        nombre:"promo 4",
        empresa:"Tan Natural",
        precioAntes:40,
        precio: 20,
        categoria:"oferta",
        image:"/FOTOS Y VIDEOS/promo_4.png",
    },

     {
        nombre:"promo 6",
        empresa:"Tan Natural",
        precioAntes:40,
        precio: 20,
        categoria:"oferta",
        image:"/FOTOS Y VIDEOS/promo_6.png",
    },

     {
        nombre:"promo 7",
        empresa:"Tan Natural",
        precioAntes:40,
        precio: 20,
        categoria:"oferta",
        image:"/FOTOS Y VIDEOS/promo_7.png",
    },

     {
        nombre:"promo 8",
        empresa:"Tan Natural",
        precioAntes:40,
        precio: 20,
        categoria:"oferta",
        image:"/FOTOS Y VIDEOS/promo_8.png",
    },

     {
        nombre:"promo 9",
        empresa:"Tan Natural",
        precioAntes:40,
        precio: 20,
        categoria:"oferta",
        image:"/FOTOS Y VIDEOS/promo_9.png",
    },

     {
        nombre:"promo 10",
        empresa:"Tan Natural",
        precioAntes:40,
        precio: 20,
        categoria:"oferta",
        image:"/FOTOS Y VIDEOS/promo_10.png",
    },

     {
        nombre:"promo 11",
        empresa:"Tan Natural",
        precioAntes:40,
        precio: 20,
        categoria:"oferta",
        image:"/FOTOS Y VIDEOS/promo_11.png",
    },

     {
        nombre:"promo 12",
        empresa:"Tan Natural",
        precioAntes:40,
        precio: 20,
        categoria:"oferta",
        image:"/FOTOS Y VIDEOS/promo_12.png",
     },
];

const ofer = document.querySelector("#ofer");

const productosTwo = productos.filter(producto=> producto.categoria === "oferta");

productosTwo.forEach(producto =>{
    const cartasOfertas = document.createElement("div");

       
    cartasOfertas.innerHTML =  ` 
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
    `
    // BOTÓN AGREGAR AL CARRITO
    const botonAgregar = cartasOfertas.querySelector(".agregar");

    botonAgregar.addEventListener("click", () => {
        agregarAlCarrito(producto);
    });

    // BOTÓN COMPRAR
    const botonComprar = cartasOfertas.querySelector(".comprar");

    botonComprar.addEventListener("click", () => {
        comprarProducto(producto);
    });


    ofer.appendChild(cartasOfertas);
})

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

const enlaces = document.querySelectorAll(".enlaces");

enlaces.forEach(enlace => {

    if (enlace.pathname === window.location.pathname) {
        enlace.classList.add("activo");
    }

});

const imagenes = [
    "/FOTOS Y VIDEOS/imgaenUno.jpg",
    "/FOTOS Y VIDEOS/imagenDos.jpg",
    "/FOTOS Y VIDEOS/imagenTres.jpg"
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