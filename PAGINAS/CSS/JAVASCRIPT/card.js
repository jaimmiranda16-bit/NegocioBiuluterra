const productos = [
   {
        nombre: "shampoo con Aceites Florales Libre de Sulfatos",
        empresa: "Tan Natural",
        precio: 20,
        categoria: "shampoo",
        image: "/FOTOS\ Y\ VIDEOS/shampoo_con_aceites_florales_libre_de_sulfatos.png",
        descripcion: "Fórmula libre de sulfatos con tensioactivos suaves y aceites florales ricos en bioceramidas. Hidrata, define los rulos manteniendo su movimiento natural y aporta gran brillo, luminosidad y sedosidad sin dañar la protección natural del cuero cabelludo."
    },
    {
        nombre: "shampoo libre de gluten",
        empresa: "Tan Natural",
        precio: 20,
        categoria: "shampoo",
        image: "/FOTOS\ Y\ VIDEOS/shampoo_libre_de_gluten.png",
        descripcion: "Especialmente formulado para cabellos finos y debilitados. Contiene Biotina (Vitamina H o B7) y Quinina que estimulan el crecimiento, aportan elasticidad y contribuyen a disminuir la caída del cabello."
    },
    {
        nombre: "shampoo neutro",
        empresa: "Tan Natural",
        precio: 20,
        categoria: "shampoo",
        image: "/FOTOS\ Y\ VIDEOS/shampoo_neutro.png",
        descripcion: "Indicado para todo tipo de cabellos y uso diario de toda la familia. Contiene aceites de Palta y Lino (ricos en vitaminas B y F, oligoelementos y Omega 3) que hidratan, desenredan, nutren y aportan brillo, flexibilidad y vitalidad."
    },
    {
        nombre: "Shampoo Oro",
        empresa: "Tan Natural",
        precio: 20,
        categoria: "shampoo",
        image: "/FOTOS\ Y\ VIDEOS/shampoo_oro.png",
        descripcion: "Ideado para cabellos alisados químicamente o lacios naturales. Su fórmula con Keratina y Caviar repara las fibras capilares, elimina el frizz, nutre intensamente y ayuda a prolongar el tratamiento devolviendo fuerza, brillo y suavidad."
    },
    {
        nombre: "shampoo para la caida del pelo",
        empresa: "Tan Natural",
        precio: 20,
        categoria: "shampoo",
        image: "/FOTOS\ Y\ VIDEOS/shampoo_para_la_caida_del_pelo.png",
        descripcion: "Formulado con Biotina y Quinina para estimular el crecimiento, proporcionar elasticidad y disminuir la caída en cabellos finos y debilitados."
    },

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
                <h2 class="card--titulo">${producto.empresa}</h2>
                <span class="card--descripcion">${producto.descripcion}</span>
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