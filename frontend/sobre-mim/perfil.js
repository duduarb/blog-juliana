const dadosJuliana = {
    nome: "Juliana Aizza Tavares",
    idade: 22,
    curso: "Teatro",
    trabalho: "Atriz",
    cidadeEstado: "Florianópolis, SC",
    bio: "Olá! blábláblá",
    fotoUrl: "perfil-juliana-final.jpg"
};

function rendereizarPerfil() {
    const nomeEl = document.getElementById('perfil-nome');
    const localEl = document.getElementById('perfil-local');
    const cursoEl = document.getElementById('perfil-curso');
    const idadeEl = document.getElementById('perfil-idade');
    const trabalhoEl = document.getElementById('perfil-trabalho');
    const bioEl = document.getElementById('perfil-bio');
    const fotoEl = document.getElementById('perfil-foto');

    if (nomeEl) nomeEl.textContent = dadosJuliana.nome;
    if (localEl) localEl.textContent = dadosJuliana.cidadeEstado;
    if (cursoEl) cursoEl.textContent = dadosJuliana.curso;
    if (idadeEl) idadeEl.textContent = dadosJuliana.idade;
    if (trabalhoEl) trabalhoEl.textContent = dadosJuliana.trabalho;
    if (bioEl) bioEl.textContent = dadosJuliana.bio;
    if (fotoEl) fotoEl.src = dadosJuliana.fotoUrl;

    document.addEventListener('DOMContentLoaded', renderizarPerfil);
}

