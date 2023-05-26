const phoneInput = document.getElementById('telefono')
const emailInput = document.querySelector('input[type = "email"]')
const form = document.getElementById("my-form");
console.log(phoneInput.textContent)
if(phoneInput.textContent.matchAll(/d+/g)){
  form.addEventListener("submit", handleSubmit)
}else{
  showError.textContent = 'telefono invalido'
  showError.classList.add('validate-error')
}
if(emailInput.textContent.matchAll(/^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/g)){
  form.addEventListener("submit", handleSubmit)
}else{
  let showError = emailInput.nextElementSibling
  showError.textContent = 'email invalido'
  showError.classList.add('validate-error')
 }
async function handleSubmit(event) {
  event.preventDefault();
  const status = document.getElementById("my-form-status");
  const data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      form.reset();
      alert("Gracias por completar el formulario");
    } else {
      response.json().then(data => {
          status.innerHTML = "Hubo un problema al enviar su formulario"
        }
      )
    }
  }).catch(error => {
    status.innerHTML = "Hubo un problema al enviar su formulario"
  });
}

