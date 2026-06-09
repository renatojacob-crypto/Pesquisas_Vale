const oficinas = [
    { id: 'pelotizacao', icone: '🟤🚢', titulo: 'Robótica - Pelotização', descricao: 'Regional Vitória' },
    { id: 'logistica', icone: '🛤️🚆', titulo: 'Robótica - Logística', descricao: 'Regional Governador Valadares' },
    { id: 'mineracao', icone: '⛏️🚞', titulo: 'Robótica - Mineração', descricao: 'Regional Itabira' },
    { id: 'paebm', icone: '🪧⛔', titulo: 'Robótica/Maker - PAEBM', descricao: 'Regional Itabira' },
    { id: 'sustentabilidade', icone: '🌳♻️', titulo: 'StoryStarter - Sustentabilidade', descricao: 'Múltiplas Regionais (Vitória, Gov. Valadares ou Itabira)' },
    { id: 'dashboard', icone: '📊🖨️', titulo: 'Dashboard Gerencial', descricao: 'Acesso exclusivo para análise de resultados e métricas em tempo real.', isDashboard: true } // Esta propriedade avisa o sistema que este cartão é diferente
];

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('cards-container');

    oficinas.forEach((oficina, index) => {
        const card = document.createElement('div');
        card.className = 'card animate-fade';
        card.style.animationDelay = `${index * 0.1}s`;
        
        // Destacar o cartão do dashboard visualmente para não se misturar com os formulários
        if (oficina.isDashboard) {
            card.style.backgroundColor = '#f0f7f4'; // Fundo ligeiramente verde
            card.style.borderColor = 'var(--primary-color)';
        }
        
        // O texto do botão muda se for o Dashboard
        const textoBotao = oficina.isDashboard ? 'Aceder ao Painel' : 'Avaliar Oficina';

        card.innerHTML = `
            <div>
                <div class="card-icon">${oficina.icone}</div>
                <div class="card-title">${oficina.titulo}</div>
                <div class="card-desc">${oficina.descricao}</div>
            </div>
            <div class="card-btn">${textoBotao}</div>
        `;

        // Lógica de redirecionamento inteligente
        card.onclick = () => {
            if (oficina.isDashboard) {
                // Se for o dashboard, vai direto para a página gerencial
                window.location.href = 'dashboard.html';
            } else {
                // Se for uma oficina normal, carrega o formulário correspondente
                window.location.href = `formulario.html?oficina=${oficina.id}`;
            }
        };

        container.appendChild(card);
    });
});