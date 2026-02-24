document.addEventListener("DOMContentLoaded", () => {

  // ====== Selección de elementos ======
  const carousel = document.getElementById("galeriaCarousel");
  const btnIzquierda = document.querySelector(".galeria-btn.izquierda");
  const btnDerecha = document.querySelector(".galeria-btn.derecha");

  const scrollAmount = 300; // Distancia en píxeles

  // ====== Validación de existencia ======
  if (!carousel || !btnIzquierda || !btnDerecha) {
    console.warn("Elementos del carrusel no encontrados.");
    return;
  }

  // ====== Función de desplazamiento ======
  const moverCarrusel = (direccion) => {
    carousel.scrollBy({
      left: direccion * scrollAmount,
      behavior: "smooth"
    });
  };

  // ====== Eventos ======
  btnIzquierda.addEventListener("click", () => moverCarrusel(-1));
  btnDerecha.addEventListener("click", () => moverCarrusel(1));

});