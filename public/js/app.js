// variables
const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const asunto = document.querySelector("#asunto");
const mensaje = document.querySelector("#mensaje");
const form = document.querySelector("#enviar-mail");
const enviar = document.querySelector("#enviar");
const spinner = document.querySelector("#spinner");
const emailSended = document.querySelector("#email-sended");
resetBtn = document.querySelector("#resetBtn");

// listenner
eventListener();

function eventListener() {
  document.addEventListener("DOMContentLoaded", inicioApp);
  email.addEventListener("blur", checkFunction);
  asunto.addEventListener("blur", checkFunction);
  mensaje.addEventListener("blur", checkFunction);
  resetBtn.addEventListener("click", inicioApp);
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e);
    enviandoCorreo();
  });
}

// funciones
function checkFunction() {
  validarCampo(this);
  if (this.type === "email") {
    emailValidate(this);
  }

  if (
    email.value.length !== 0 &&
    mensaje.value.length !== 0 &&
    asunto.value.length !== 0
  ) {
    if (document.querySelectorAll(".error").length === 0) {
      enviar.disabled = false;
    }
  }
}

function inicioApp() {
  form.reset();
  enviar.disabled = true;
}
function validarCampo(campo) {
  // si el valor del campo es mayor a vacio
  if (campo.value.length > 0) {
    // agrega clase error y bordebottom verde
    campo.classList.remove("error");
    campo.style.borderBottomColor = "green";
  } else {
    campo.classList.add("error");
  }
}
const emailValidate = (campo) => {
  const reg = new RegExp("@");

  if (reg.test(campo.value)) {
    campo.classList.remove("error");
    campo.style.borderBottomColor = "green";
  } else {
    campo.classList.add("error");
  }
};
const enviandoCorreo = () => {
  spinner.style.display = "block";

  const data = {
    nombre: nombre.value,
    asunto: asunto.value,
    email: email.value,
    mensaje: mensaje.value,
  };
  const header = {
    "Content-Type": "application/json",
  };

  console.log(data);
  fetch("./sendmail", {
    method: "POST",
    body: JSON.stringify(data),
    headers: header,
  }).then((response) => {
    console.log(response.text());
  });
  setTimeout(() => {
    spinner.style.display = "none";
    emailSended.style.display = "block";
    setTimeout(() => {
      emailSended.style.display = "none";
      form.reset();
      inicioApp();
    }, 3000);
  }, 3000);
};
