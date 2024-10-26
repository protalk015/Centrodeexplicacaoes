document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const emailInput = document.getElementById("loginEmail");
    const passwordInput = document.getElementById("loginPassword");
    window.location.href = "dashboard.html";

    // Animação suave ao focar e desfocar dos inputs
    const inputs = document.querySelectorAll(".input-group input");
    inputs.forEach(input => {
        input.addEventListener("focus", () => {
            input.style.borderColor = "#a18cd1"; // Mudar a cor da borda ao focar
            input.style.boxShadow = "0 0 8px rgba(161, 140, 209, 0.5)";
        });
        input.addEventListener("blur", () => {
            input.style.borderColor = "#ccc"; // Voltar à cor original ao desfocar
            input.style.boxShadow = "none";
        });
    });

    // Validação básica de e-mail e senha
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Evita o envio padrão do formulário

        const emailValue = emailInput.value.trim();
        const passwordValue = passwordInput.value.trim();

        if (!validateEmail(emailValue)) {
            showAlert("Por favor, insira um e-mail válido.");
            return;
        }

        if (passwordValue.length < 6) {
            showAlert("A senha deve ter pelo menos 6 caracteres.");
            return;
        }

        // Simular um login bem-sucedido
        showLoading(true);
        setTimeout(() => {
            showLoading(false);
            showAlert("Login bem-sucedido!", true);
            loginForm.reset();
        }, 2000);
    });

    // Função para exibir uma mensagem de alerta
    function showAlert(message, success = false) {
        const alertBox = document.createElement("div");
        alertBox.className = `alert ${success ? 'alert-success' : 'alert-error'}`;
        alertBox.textContent = message;

        document.body.appendChild(alertBox);
        setTimeout(() => {
            alertBox.remove();
        }, 3000);
    }

    // Função para validar o formato do e-mail
    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/;
        return re.test(email);
    }

    // Função para mostrar um carregamento falso durante o login
    function showLoading(show) {
        if (show) {
            const loadingOverlay = document.createElement("div");
            loadingOverlay.className = "loading-overlay";
            loadingOverlay.innerHTML = `
                <div class="spinner"></div>
                <p>Entrando...</p>
            `;
            document.body.appendChild(loadingOverlay);
        } else {
            const overlay = document.querySelector(".loading-overlay");
            if (overlay) {
                overlay.remove();
            }
        }
    }
});
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ProTalk - Criar Conta</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="create-account-container">
        <div class="logo-container">
            <img src="images/logo.png" alt="Logo da Protalk" width="200" height="100">
            <h1><span class="red-text">Pro</span><span class="black-text">Talk</span></h1>
        </div>

        <div class="create-account-box">
            <form id="createAccountForm" class="create-account-form">
                <div class="input-group">
                    <label for="fullName">Nome Completo</label>
                    <input type="text" id="fullName" name="fullName" required>
                </div>

                <div class="input-group">
                    <label for="registerEmail">E-mail</label>
                    <input type="email" id="registerEmail" name="registerEmail" required>
                </div>

                <div class="input-group">
                    <label for="registerPassword">Senha</label>
                    <input type="password" id="registerPassword" name="registerPassword" required>
                </div>

                <div class="input-group">
                    <label for="confirmPassword">Confirmar Senha</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" required>
                </div>

                <button type="submit" class="create-account-button">Criar Conta</button>
            </form>

            <div class="login-redirect">
                <p>Já tem uma conta? <a href="index.html" class="login-link">Faça Login</a></p>
            </div>
        </div>
    </div>

    <script>
    document.getElementById("createAccountForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Impede o envio do formulário

        const fullName = document.getElementById('fullName').value.trim();
        const email = document.getElementById('registerEmail').value.trim();
        const password = document.getElementById('registerPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        // Validações
        if (fullName === "" || email === "" || password === "" || confirmPassword === "") {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        if (password.length < 6) {
            alert("A senha deve ter pelo menos 6 caracteres.");
            return;
        }

        if (password !== confirmPassword) {
            alert("As senhas não coincidem!");
            return;
        }

        // Simulação de criação de conta bem-sucedida
        alert("Conta criada com sucesso! Você pode fazer login agora.");
        window.location.href = "index.html"; // Redireciona para a página de login
    });
    </script>

    <script src="script.js"></script>
</body>
</html>
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio do formulário padrão

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Simulação de verificação de credenciais
    if (email === "usuario@exemplo.com" && password === "123456") {
        alert("Login bem-sucedido!");
        window.location.href = "dashboard.html"; // Redireciona para a próxima página (dashboard)
    } else {
        alert("E-mail ou senha incorretos. Tente novamente.");
    }
});
<script>
    let currentMaterialPage = 1; // Começa na primeira página

    function toggleMateriais() {
        if (currentMaterialPage === 1) {
            window.location.href = 'materiais.html'; // Direciona para a primeira página
            currentMaterialPage = 2; // Muda para a segunda página
        } else {
            window.location.href = 'materiais2.html'; // Direciona para a segunda página
            currentMaterialPage = 1; // Muda para a primeira página
        }
    }
</script>
