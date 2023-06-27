function acessar() {
    let loginEmail = document.getElementById("nome").value;
    let loginSenha = document.getElementById("email").value;

    if(!loginEmail || !loginSenha) {
        alert("favor preencha os campos para acessar o site");
    } else {
       alert("Campos preenchidos com sucesso");
    }
}