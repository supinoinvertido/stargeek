const mensagem = document.querySelector(".mensagem");
const formulario = document.getElementById("formulario");
const email = document.getElementById("Imail");
const senha = document.getElementById("mcsenha");
const confirmarsenha = document.getElementById("cssenha");

formulario.onsubmit = (evento) =>{
    if(email.value == ""){
        evento.preventDefault();
        mensagem.innerHTML = "<p> Digite seu email! <p>"
        email.focus();
        return null;
    }

    if(senha.value == ""){
        evento.preventDefault();
        mensagem.innerHTML = "<p> Digite sua senha! <p>"
        senha.focus();
        return null;
    }
    if(confirmarsenha.value != senha.value){
        evento.preventDefault();
        mensagem.innerHTML = "<p> Senhas precisam ser iguais! <p>"
        confirmarSenha.focus();
        return null;
    }

    let dados = JSON.parse(localStorage.getItem("dados")) || [];
    dados.push({
        email : email.value,
        senha : senha.value
    })

    localStorage.setItem("dados", JSON.stringify(dados));
    evento.preventDefault();
    mensagem.innerHTML = "<p> Parabéns Cadastro feito com sucesso <p>";

    setTimeout(() =>{
        window.location.assign("Login.html");
    }, 3000);
}

