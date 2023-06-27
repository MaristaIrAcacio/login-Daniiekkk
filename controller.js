function acessar() {
    let loginEmail = document.getElementById("Nome").value;
    let loginSenha = document.getElementById("Senha").value;

    if(!loginEmail || !loginSenha) {
        alert("favor preencha os campos para acessar o site");
    } else {
       alert("Campos preenchidos com sucesso");
    }
}