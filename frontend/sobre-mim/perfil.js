// Objeto de dados simulados da Juliana (Para preenchimento da página)
const dadosJuliana = {
    nome: "Juliana Aizza Tavares",
    idade: 22,
    curso: "Teatro",
    trabalho: "Atriz / Artista em Formação",
    cidadeEstado: "Florianópolis, SC",
    bio: "Olá! Sou a Juliana, amante de arte e palco, e este blog é meu projeto de desenvolvimento web! Aqui compartilho o que me inspira, misturando a beleza da cena com a lógica do código. É um espaço de leitura simples e organizado, feito com muito carinho e, claro, muito rosa!",
    fotoUrl: "placeholder-foto.jpg" // A imagem será buscada na mesma pasta do HTML
};

function renderizarPerfil() {
    // Busca os elementos HTML
    const nomeEl = document.getElementById('perfil-nome');
    const localEl = document.getElementById('perfil-local');
    const cursoEl = document.getElementById('perfil-curso');
    const idadeEl = document.getElementById('perfil-idade');
    const trabalhoEl = document.getElementById('perfil-trabalho');
    const bioEl = document.getElementById('perfil-bio');
    const fotoEl = document.getElementById('perfil-foto');

    // Preenche o conteúdo (textContent para texto, src para imagens)
    if (nomeEl) nomeEl.textContent = dadosJuliana.nome;
    if (localEl) localEl.textContent = dadosJuliana.cidadeEstado;
    if (cursoEl) cursoEl.textContent = dadosJuliana.curso;
    if (idadeEl) idadeEl.textContent = dadosJuliana.idade;
    if (trabalhoEl) trabalhoEl.textContent = dadosJuliana.trabalho;
    if (bioEl) bioEl.textContent = dadosJuliana.bio;
    if (fotoEl) fotoEl.src = dadosJuliana.fotoUrl;
}

// Garante que o script só rode DEPOIS que a página HTML estiver totalmente carregada
document.addEventListener('DOMContentLoaded', renderizarPerfil);