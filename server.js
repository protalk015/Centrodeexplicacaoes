const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware para servir arquivos estáticos (HTML, CSS, JS, imagens)
app.use(express.static(path.join(__dirname, 'public')));

// Rota para a Dashboard
app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});

// Rota para Avançar
app.get('/avancar', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Avançar.html'));
});

// Rota para Contact
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

// Rota para About
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

// Página inicial
app.get('/', (req, res) => {
    res.redirect('/dashboard'); // Redireciona para a dashboard por padrão
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
