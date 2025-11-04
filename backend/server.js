// backend/server.js

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// --- 1. Configurações Iniciais ---
// Middleware para permitir que o Express leia dados de formulários
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// --- 2. Servir Arquivos Estáticos (Seu Front-end) ---
// Qualquer requisição para o servidor (ex: /home/index.html) será buscada
// a partir da raiz da pasta 'frontend'.
const frontendPath = path.join(__dirname, '..', 'frontend');
app.use(express.static(frontendPath));

// --- 3. Roteamento Básico para o Blog ---
// Redireciona a raiz do servidor para a página inicial do blog
app.get('/', (req, res) => {
    res.sendFile(path.join(frontendPath, 'home', 'index.html'));
});

// --- 4. Rota de Login Secreta (URL Personalizada) ---
// Seu pedido de URL secreta. Aponta para o formulário de login na área admin.
app.get('/admin-login', (req, res) => {
    res.sendFile(path.join(frontendPath, 'admin', 'login.html'));
});


// =======================================================
// Futuramente, as rotas da API (CRUD dos posts) virão aqui
// =======================================================


// --- 5. Inicialização do Servidor ---
app.listen(PORT, () => {
    console.log(`\n=================================================`);
    console.log(`🚀 Servidor rodando na porta: ${PORT}`);
    console.log(`Blog Público: http://localhost:${PORT}/`);
    console.log(`Login Admin:  http://localhost:${PORT}/admin-login`);
    console.log(`=================================================\n`);
});