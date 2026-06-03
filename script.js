const oficinas = [
    {
        id: 'oficina_pelotizacao',
        icone: '⚙️',
        titulo: 'Robótica - Pelotização',
        descricao: 'Avaliação da oficina de introdução à robótica educacional com foco nos processos de pelotização.',
        link: 'pelotizacao.html'
    },
    {
        id: 'oficina_vincibot',
        icone: '🏎️',
        titulo: 'Lógica com VinciBot',
        descricao: 'Feedback das atividades de pensamento computacional e programação em blocos (Scratch).',
        link: '#'
    },
    {
        id: 'oficina_esg',
        icone: '🌱',
        titulo: 'ESG e Sustentabilidade',
        descricao: 'Avaliação da oficina com foco em impactos ambientais e sustentabilidade nas operações.',
        link: '#'
    },
    {
        id: 'oficina_zmaker',
        icone: '🛠️',
        titulo: 'ZMaker Lab',
        descricao: 'Pesquisa de satisfação focada em ideação, prototipagem e desenvolvimento de projetos.',
        link: '#'
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('cards-container');

    oficinas.forEach((oficina, index) => {
        const card = document.createElement('div');
        card.className = 'card animate-fade';
        card.style.animationDelay = `${index * 0.1}s`;
        
        card.innerHTML = `
            <div>
                <div class="card-icon">${oficina.icone}</div>
                <div class="card-title">${oficina.titulo}</div>
                <div class="card-desc">${oficina.descricao}</div>
            </div>
            <div class="card-btn">Avaliar Oficina</div>
        `;

        card.onclick = () => {
            if(oficina.link !== '#') {
                window.location.href = oficina.link;
            } else {
                alert(`Você selecionou a oficina: ${oficina.titulo}.\\n\\nEsta página ainda será criada.`);
            }
        };

        container.appendChild(card);
    });
});