document.getElementById("formLogin").addEventListener("submit", function (event) {
    event.preventDefault();

    const loginEmail = document.getElementById("loginEmail").value;
    const loginSenha = document.getElementById("loginSenha").value;

    const storedEmail = localStorage.getItem("email");
    const storedSenha = localStorage.getItem("senha");
    const storedNome = localStorage.getItem("nome");

    if (loginEmail === storedEmail && loginSenha === storedSenha) {
        window.location.href = `questao2-2.html?nome=${storedNome}`;
    } else {
        alert("Usuário ou senha incorretos.");
    }
});