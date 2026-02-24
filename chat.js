document.addEventListener("DOMContentLoaded", function() {

  const chatBoton = document.getElementById("chatBoton");
  const chatContainer = document.getElementById("chatContainer");
  const cerrarChat = document.getElementById("cerrarChat");
  const enviarBtn = document.getElementById("enviarBtn");
  const chatInput = document.getElementById("chatInput");
  const chatMensajes = document.getElementById("chatMensajes");

  if (!chatBoton) return; // evita error si no existe

  chatBoton.addEventListener("click", function() {
    chatContainer.style.display = "flex";
  });

  cerrarChat.addEventListener("click", function() {
    chatContainer.style.display = "none";
  });

  enviarBtn.addEventListener("click", enviarMensaje);

  chatInput.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
      enviarMensaje();
    }
  });

  function enviarMensaje() {
    if (chatInput.value.trim() === "") return;

    const mensajeUsuario = document.createElement("div");
    mensajeUsuario.className = "mensaje usuario";
    mensajeUsuario.textContent = chatInput.value;
    chatMensajes.appendChild(mensajeUsuario);

    let respuesta = "Gracias por tu mensaje 😊";

    const texto = chatInput.value.toLowerCase();

    if (texto.includes("horario")) {
      respuesta = "Nuestro horario es de lunes a viernes de 8:00 AM a 9:00 PM.";
    } else if (texto.includes("ubicacion") || texto.includes("donde")) {
      respuesta = "Estamos ubicados en el centro de la ciudad.";
    } else if (texto.includes("precio")) {
      respuesta = "Tenemos precios accesibles y promociones especiales.";
    }

    const mensajeBot = document.createElement("div");
    mensajeBot.className = "mensaje bot";

    setTimeout(function() {
      mensajeBot.textContent = respuesta;
      chatMensajes.appendChild(mensajeBot);
      chatMensajes.scrollTop = chatMensajes.scrollHeight;
    }, 500);

    chatInput.value = "";
  }

});