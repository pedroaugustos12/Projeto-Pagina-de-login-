const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});



 // Inicializar o login do Google
 window.onload = function() {
    google.accounts.id.initialize({
        client_id: "33026773765-hopi1mp6kqis24g70knn5j68o6c6a88e.apps.googleusercontent.com",
        callback: handleCredentialResponse
    });

    // Renderizar o botão de login do Google na área de login
    google.accounts.id.renderButton(
        document.getElementById("google-signin"),
        { theme: "outline", size: "large", type:"standard", shape:"pill", width:"180" } // Estilo do botão de login
    );

    // Renderizar o botão de cadastro do Google na área de cadastro
    google.accounts.id.renderButton(
        document.getElementById("google-signup"),
        { theme: "outline", size: "large", type:"standard", shape:"pill", width:"180" } // Estilo do botão de cadastro
    );

    google.accounts.id.prompt(); // Exibir o prompt de login
};

// Função de callback simples para verificar o login/cadastro
function handleCredentialResponse(response) {
    if (response.credential) {
        alert("Autenticação realizada com sucesso!");
        // Ações adicionais podem ser executadas aqui, como redirecionamento
    } else {
        alert("Falha na autenticação.");
    }
}



// 