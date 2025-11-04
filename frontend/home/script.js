// --- 1. Dados Simulados (No futuro, estes dados virão do backend) ---
const posts = [
    {
        id: 1,
        titulo: "O Palco e a Vida: Reflexões Pós-Ensaio 🎭",
        data: "2025-10-28", // Mais recente
        tipo: "Teatro",
        conteudo: "Hoje, o ensaio foi intenso. Há uma mágica em construir personagens que ecoa na forma como encaramos os desafios da vida. A arte não é só sobre interpretar, é sobre sentir. ✨",
        midia: "foto-ensaio.jpg",
        midiaTipo: "image"
    },
    {
        id: 2,
        titulo: "Receita Secreta de Cupcakes Rosas! 🧁",
        data: "2025-10-15",
        tipo: "Culinária",
        conteudo: "Quem disse que o rosa não pode ser delicioso? Segue a receita da minha avó, com muito afeto e aquele toque de baunilha que amamos. Receita completa no meu caderno! 😉",
        midia: "video-cupcake.mp4",
        midiaTipo: "video"
    },
    {
        id: 3,
        titulo: "Diário de Código: Meu Primeiro Frontend! 💖",
        data: "2025-09-01", // Mais antigo
        tipo: "Tech/Diário",
        conteudo: "Finalizei o design do meu blog! Aprender HTML e CSS para dar a ele a minha cara (com muito rosa, claro!) foi uma jornada incrível. Que venha o JavaScript! 🚀",
        midia: null,
        midiaTipo: "texto"
    }
];


// --- 2. Função de Renderização ---
/**
 * Renderiza uma lista de posts no container HTML.
 * @param {Array} postsParaRenderizar - A lista de posts a ser exibida.
 */
function renderizarPosts(postsParaRenderizar) {
    const container = document.getElementById('posts-container');
    container.innerHTML = ''; // Limpa o conteúdo anterior

    if (postsParaRenderizar.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #CC2255; font-size: 1.2em;">Nenhum post encontrado com esses critérios de busca. 😢</p>';
        return;
    }

    postsParaRenderizar.forEach(post => {
        // Formata a data para um padrão mais amigável
        const dataFormatada = new Date(post.data).toLocaleDateString('pt-BR');
        
        // Cria o elemento Article (o card do post)
        const article = document.createElement('article');
        
        // Conteúdo da Mídia (Imagem, Vídeo ou apenas um texto)
        let midiaHTML = '';
        if (post.midia && post.midiaTipo === 'image') {
            midiaHTML = `<img src="${post.midia}" alt="Mídia do post ${post.id}">`;
        } else if (post.midia && post.midiaTipo === 'video') {
            // Placeholder para vídeo (No backend, seria um player real)
            midiaHTML = `<div style="height: 200px; background-color: #A01C42; color: white; display: flex; align-items: center; justify-content: center; font-weight: bold;">[VÍDEO PLACEHOLDER: ${post.titulo}]</div>`;
        } 
        
        // Monta o HTML interno do post
        article.innerHTML = `
            ${midiaHTML}
            <h2>${post.titulo}</h2>
            <time datetime="${post.data}">${dataFormatada}</time> 
            <p>${post.conteudo.substring(0, 120)}...</p> 
            <a href="#">Ler Post Completo (${post.tipo})</a>
        `;
        
        container.appendChild(article);
    });
}


// --- 3. Função de Filtro e Busca ---
function filtrarPosts() {
    const termoBusca = document.getElementById('inputBusca').value.toLowerCase();
    const dataInicio = document.getElementById('dataInicio').value;
    const dataFim = document.getElementById('dataFim').value;

    const postsFiltrados = posts.filter(post => {
        
        // Filtro 1: Busca por Texto (título ou conteúdo)
        const buscaTermo = termoBusca === '' || 
                           post.titulo.toLowerCase().includes(termoBusca) || 
                           post.conteudo.toLowerCase().includes(termoBusca);

        // Filtro 2: Filtro por Data
        let buscaData = true;
        
        if (dataInicio) {
            // Se o post for anterior à data de início, ele é excluído (buscaData = false)
            if (post.data < dataInicio) {
                buscaData = false;
            }
        }
        
        if (dataFim) {
            // Se o post for posterior à data de fim, ele é excluído (buscaData = false)
            if (post.data > dataFim) {
                buscaData = false;
            }
        }

        // Retorna apenas se ambos os filtros forem verdadeiros
        return buscaTermo && buscaData;
    });

    renderizarPosts(postsFiltrados);
}

function limparFiltros() {
    // Limpa o valor de todos os campos de filtro
    document.getElementById('inputBusca').value = '';
    document.getElementById('dataInicio').value = '';
    document.getElementById('dataFim').value = '';

    // Chama a função principal de filtro para re-renderizar todos os posts
    filtrarPosts();
}

// --- 4. Inicialização ---
// Roda quando a página HTML estiver totalmente carregada
document.addEventListener('DOMContentLoaded', () => {
    // 1. Carrega todos os posts na abertura da página
    renderizarPosts(posts);
});