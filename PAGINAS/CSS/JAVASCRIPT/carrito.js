const contenedorCarrito = document.querySelector("#productos-carrito");
const totalElemento = document.querySelector("#total");
const botonComprar = document.querySelector("#comprar-todo");
const botonVaciar = document.querySelector("#vaciar-carrito");


let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
//-------------------------------------------------------------------
// MOSTRAR CARRITO

function mostrarCarrito() {
    contenedorCarrito.innerHTML = "";
    if (carrito.length === 0) {
        contenedorCarrito.innerHTML = `
            <div class="carrito-vacio">
                <i class="fa-solid fa-cart-shopping"></i>
                <h2>Tu carrito está vacío</h2>
                <p>Agregá algunos productos para comenzar.</p>
                <a href="/PAGINAS/categoria.html">Ver productos</a>
            </div>
        `;
        totalElemento.textContent = "$0";
        return;
    }

    carrito.forEach((producto, indice) => {
        const productoHTML = document.createElement("div");
        productoHTML.classList.add("producto-carrito");

        productoHTML.innerHTML = `
            <img src="${producto.image}" alt="${producto.nombre}">
            <div class="informacion-producto">
                <span>${producto.empresa}</span>
                <h2>${producto.nombre}</h2>
                <strong>$${producto.precio}</strong>
            </div>
            <div class="cantidad">
                <button class="menos">-</button>
                <span>${producto.cantidad}</span>
                <button class="mas">+</button>
            </div>
            <button class="eliminar"><i class="fa-solid fa-trash"></i></button>
        `;

//----------------------------------------------------------
        // RESTAR
        productoHTML
            .querySelector(".menos")
            .addEventListener("click", () => {
                if (producto.cantidad > 1) {
                    producto.cantidad--;
                } else {
                  carrito.splice(indice, 1);
                }
                guardarCarrito();
                mostrarCarrito();
            });

//--------------------------------------------------------------
        // SUMAR
        productoHTML
            .querySelector(".mas")
            .addEventListener("click", () => {
                producto.cantidad++;
                guardarCarrito();
                mostrarCarrito();
            });
//-----------------------------------------------------------------------
        // ELIMINAR
        productoHTML
            .querySelector(".eliminar")
            .addEventListener("click", () => {
                carrito.splice(indice, 1);
                guardarCarrito();
                mostrarCarrito();
            });
        contenedorCarrito.appendChild(productoHTML);
    });
    calcularTotal();
}

//--------------------------------------------------------------------------
// CALCULAR TOTAL

function calcularTotal() {
    let total = 0;
    carrito.forEach(producto => {
        total += producto.precio * producto.cantidad;
    });
    totalElemento.textContent = "$" + total;
}

//-----------------------------------------------------------------------------
// GUARDAR CARRITO

function guardarCarrito() {
    localStorage.setItem(
        "carrito",
        JSON.stringify(carrito)
    );
}

//------------------------------------------------------------------------------
// COMPRAR

botonComprar.addEventListener("click", () => {
    if (carrito.length === 0) {
        alert("Tu carrito está vacío.");
        return;
    }
    alert("¡Compra realizada correctamente! 🛍️");
    carrito = [];
    guardarCarrito();
    mostrarCarrito();
});

//------------------------------------------------------------------
// VACIAR

botonVaciar.addEventListener("click", () => {
    carrito = [];
    guardarCarrito();
    mostrarCarrito();
});

mostrarCarrito();

const enlaces = document.querySelectorAll(".enlaces");

enlaces.forEach(enlace => {

    if (enlace.pathname === window.location.pathname) {
        enlace.classList.add("activo");
    }

});