//CODIGO DE VALIDAÇÃO DE FORMULÁRIO DE LOGIN
function Verificar() {
    let email = document.getElementById('loginEmail').value
    let senha = document.getElementById('loginSenha').value

    //Console.log aparece na aba console no inspecionar do google na pagina funcional//
    console.log(email);
    console.log(senha);

    if (!email || !senha)
        alert("Campos de preenchimento obrigatório. Favor preencher")

}