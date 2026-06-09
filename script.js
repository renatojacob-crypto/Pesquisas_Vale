const oficinas = [
    { id: 'pelotizacao', icone: '🟤🚢', titulo: 'Robótica - Pelotização', descricao: 'Regional Vitória' },
    { id: 'logistica', icone: '🛤️🚆', titulo: 'Robótica - Logística', descricao: 'Regional Governador Valadares' },
    { id: 'mineracao', icone: '⛏️🚞', titulo: 'Robótica - Mineração', descricao: 'Regional Itabira' },
    { id: 'paebm', icone: '🪧⛔', titulo: 'Robótica/Maker - PAEBM', descricao: 'Regional Itabira' },
    { id: 'sustentabilidade', icone: '🌳♻️', titulo: 'StoryStarter - Sustentabilidade', descricao: 'Múltiplas Regionais (Vitória, Gov. Valadares ou Itabira)' }
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
            window.location.href = `formulario.html?oficina=${oficina.id}`;
        };

        container.appendChild(card);
    });
});