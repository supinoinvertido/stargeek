const mensagem = document.querySelector(".mensagem");
const formulario = document.getElementById("formulario");
const email = document.getElementById("Imail");
const senha = document.getElementById("msenha");

formulario.onsubmit = (evento) => {
    let dados = JSON.parse(localStorage.getItem("dados"));
    let logado;
    dados.forEach((elemento) => {
        if (elemento.email === email.value && elemento.senha === senha.value) {

            evento.preventDefault();
            let dados = JSON.parse(sessionStorage.getItem("logado")) || [];
            dados.push(
            {
                email : email.value
            }
        )
        sessionStorage.setItem("logado", JSON.stringify(dados));

           window.location.assign ("Catalogo.html");

            return true;
        } else {
            evento.preventDefault();
            mensagem.innerHTML = "Senha ou E-mail incorreto"
        }

    });
}