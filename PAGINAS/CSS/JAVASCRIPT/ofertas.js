const productos = [
    {
        nombre: "Shampoo ORO + Shampoo Ultrahidratante + crema",
        empresa: "Tan Natural",
        precioAntes: 40,
        precio: 20,
        categoria: "oferta",
        image: "/FOTOS Y VIDEOS/promo_1.png",
        descripcion: "Combo ideal para nutrición profunda y cuidado de cabellos alisados o tratados químicamente, combinando el poder del Shampoo Oro (Keratina y Caviar), un shampoo ultrahidratante y una máscara capilar intensiva."
    },
    {
        nombre: "2 Shampoo + crema",
        empresa: "Tan Natural",
        precioAntes: 40,
        precio: 20,
        categoria: "oferta",
        image: "/FOTOS Y VIDEOS/promo_2.png",
        descripcion: "Pack completo de mantenimiento diario con dos shampoos de la línea y una máscara reacondicionadora para mantener el cabello hidratado, suave y protegido todos los días."
    },
    {
        nombre: "2 shampoo ultrahidratante + crema",
        empresa: "Tan Natural",
        precioAntes: 40,
        precio: 20,
        categoria: "oferta",
        image: "/FOTOS Y VIDEOS/promo_3.png",
        descripcion: "Doble nutrición e hidratación profunda diseñada para cabellos secos o deshidratados, acompañado de una crema de tratamiento que reestructura y sella la fibra capilar."
    },
    {
        nombre: " 2 Shampoo + Enjuague capilar",
        empresa: "Tan Natural",
        precioAntes: 40,
        precio: 20,
        categoria: "oferta",
        image: "/FOTOS Y VIDEOS/promo_4.png",
        descripcion: "Dúo esencial de limpieza y acondicionamiento diario. Desenreda, nutre y aporta elasticidad y brillo natural a todo tipo de cabellos."
    },
    {
        nombre: "2 Shampoo reparador + Mascarilla capilar",
        empresa: "Tan Natural",
        precioAntes: 40,
        precio: 20,
        categoria: "oferta",
        image: "/FOTOS Y VIDEOS/promo_6.png",
        descripcion: "Tratamiento intensivo de reparación capilar con doble shampoo y mascarilla con óleos vitales o lino, ideal para revitalizar cabellos frágiles, dañados o maltratados."
    },
    {
        nombre: "Shampoo Triaminico + Enjuague",
        empresa: "Tan Natural",
        precioAntes: 40,
        precio: 20,
        categoria: "oferta",
        image: "/FOTOS Y VIDEOS/promo_7.png",
        descripcion: "Kit con Complejo Triamínico (Cistina, Cisteína y Metionina) que penetra profundamente para reparar áreas dañadas internas, sellar fisuras y devolverle el brillo y la flexibilidad al cabello."
    },
    {
        nombre: "Shampoo caida del pelo + Neutro",
        empresa: "Tan Natural",
        precioAntes: 40,
        precio: 20,
        categoria: "oferta",
        image: "/FOTOS Y VIDEOS/promo_8.png",
        descripcion: "Combinación perfecta entre el shampoo con Biotina y Quinina para estimular el crecimiento y frenar la caída, y el shampoo neutro ideal para la limpieza suave y frecuente de toda la familia."
    },
    {
        nombre: "Shampoo hidratante + Enjuague",
        empresa: "Tan Natural",
        precioAntes: 40,
        precio: 20,
        categoria: "oferta",
        image: "/FOTOS Y VIDEOS/promo_9.png",
        descripcion: "Dúo hidratante con extractos naturales de Sésamo y Lino, formulado especialmente para devolverle la humedad esencial a los cabellos secos, quebradizos y sin vida."
    },
    {
        nombre: "Shampoo vegetal+ Enjuague",
        empresa: "Tan Natural",
        precioAntes: 40,
        precio: 20,
        categoria: "oferta",
        image: "/FOTOS Y VIDEOS/promo_10.png",
        descripcion: "Rutina natural con ingredientes botánicos para una limpieza delicada, respetando la fibra capilar y aportando frescura, vitalidad y suavidad al peinar."
    },
    {
        nombre: "Shampoo + Enjuague con caviaer",
        empresa: "Tan Natural",
        precioAntes: 40,
        precio: 20,
        categoria: "oferta",
        image: "/FOTOS Y VIDEOS/promo_11.png",
        descripcion: "Tratamiento con Keratina y Caviar ideado para cabellos alisados o lacios naturales; repara las fibras, elimina el frizz e hidrata intensamente cada hebra."
    },
    {
        nombre: "Shampoo + Enjuague + crema ",
        empresa: "Tan Natural",
        precioAntes: 40,
        precio: 20,
        categoria: "oferta",
        image: "/FOTOS Y VIDEOS/promo_12.png",
        descripcion: "El set definitivo de cuidado capilar completo (Shampoo, Enjuague y Baño de Crema) para lograr una nutrición total, brillo extremo, suavidad y un control absoluto del frizz."
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
                <h2 class="card--titulo">${producto.empresa}</h2>
                <span class="card--descripcion">${producto.descripcion}</span>
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