const mensagem = document.querySelector(".mensagem");
const formulario = document.getElementById("formulario");
const email = document.getElementById("Imail");
const senha = document.getElementById("msenha");

formulario.onsubmit = (evento) => {
    let dados = JSON.parse(localStorage.getItem("dados"));

    dados.forEach((elemento) => {
        if (elemento.email === email.value && elemento.senha === senha.value) {
            evento.preventDefault();
           window.location.assign ("Catalogo.html");

            return true;
        } else {
            evento.preventDefault();
            mensagem.innerHTML = "Senha ou E-mail incorreto"
        }

    });
}