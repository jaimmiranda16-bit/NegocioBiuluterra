const productos = [
    {
        nombre: "Jabón de Lavanda",
        empresa: "Tan Natural",
        precio: 20,
        categoria: "jabon",
        image: "/FOTOS Y VIDEOS/WhatsApp Image 2026-10-08 at 13.03.16 (1).jpeg",
        descripcion: "Formulado con aceite esencial de lavanda y flores secas. Calma la piel sensible, alivia irritaciones y brinda una experiencia de relajación profunda gracias a su aroma aromaterapéutico natural"
    },
        {
        nombre: "Jabón de Miel",
        empresa: "Tan Natural",
        precio: 20,
        categoria: "jabon",
        image: "/FOTOS Y VIDEOS/WhatsApp Image 2026-10-08 at 13.03.16.jpg",
        descripcion: "Enriquecido con miel pura y aceites nutritivos. La miel atrae y retiene la humedad natural de la piel, dejándola suave, elástica y profundamente hidratada."
    },
    {
        nombre: "Jabón de Arcilla",
        empresa: "Tan Natural",
        precio: 20,
        categoria: "jabon",
        image: "/FOTOS Y VIDEOS/WhatsApp Image 2026-10-08 at 13.03.18.jpeg",
        descripcion: " Elaborado con arcillas minerales naturales que absorben impurezas, desintoxican los poros y equilibran el exceso de grasitud sin resecar."
    }
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
    const numeroWhatsApp = "5493815003753"; 

    const mensaje = `Hola, quiero comprar este producto "${producto.nombre}", lo tendra disponible?`;

    const mensajeCodificado = encodeURIComponent(mensaje);

    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;

    window.open(urlWhatsApp, "_blank");
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