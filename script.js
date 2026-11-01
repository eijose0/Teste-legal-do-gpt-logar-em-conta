
const senha = document.getElementById("senha");
const mostrar = document.getElementById("mostrar");

mostrar.addEventListener("change", function() {
    senha.type = this.checked ? "text" : "password";
    });

    document.getElementById("loginForm")
    .addEventListener("submit", function(event) {
        event.preventDefault();

            const email = document.getElementById("email").value;

                alert("Olá! Formulário enviado para: " + email);
                });
                