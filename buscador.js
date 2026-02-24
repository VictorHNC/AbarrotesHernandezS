document.addEventListener("DOMContentLoaded", function () {

  const palabrasClave = [
  { palabra: "Tienda de abarrotes", destino: "#inicio" },
  { palabra: "Abarrotes cerca de mi", destino: "#inicio" },
  { palabra: "Mini supermercado", destino: "#inicio" },
  { palabra: "Abarrotes Hernandez Sarabia", destino: "#inicio" },

  { palabra: "Tienda local", destino: "#nosotros" },
  { palabra: "Tienda economica", destino: "#nosotros" },
  { palabra: "Productos basicos para el hogar", destino: "#nosotros" },

  { palabra: "Servicio a domicilio", destino: "#servicios" },
  { palabra: "Tienda con envio a domicilio", destino: "#servicios" },
  { palabra: "Compra de abarrotes en linea", destino: "#servicios" },
  { palabra: "Entrega rapida", destino: "#servicios" },
  { palabra: "Pedidos por whatsapp", destino: "#contacto-final" },

  { palabra: "Chiles secos", destino: "#servicios" },
  { palabra: "Semillas", destino: "#servicios" },
  { palabra: "Abarrotes economicos", destino: "#servicios" }
];

  const input = document.getElementById("busquedaInput");
  const lista = document.getElementById("listaResultados");

  function mostrarResultados(filtro = "") {
    lista.innerHTML = "";

    palabrasClave
      .filter(item =>
        item.palabra.toLowerCase().includes(filtro.toLowerCase())
      )
      .forEach(item => {
        const li = document.createElement("li");
        li.textContent = item.palabra;
        li.addEventListener("click", () => {
          document.querySelector(item.destino)
            .scrollIntoView({ behavior: "smooth" });
          lista.style.display = "none";
          input.value = item.palabra;
        });
        lista.appendChild(li);
      });

    lista.style.display = "block";
  }

  input.addEventListener("focus", () => mostrarResultados());
  input.addEventListener("input", e => mostrarResultados(e.target.value));

  document.addEventListener("click", function (e) {
    if (!e.target.closest(".buscador")) {
      lista.style.display = "none";
    }
  });

});