// COLE AQUI A MESMA URL DO GOOGLE APPS SCRIPT
const URL_API_GOOGLE = 'https://script.google.com/macros/s/AKfycbwfhNMh57LsfXFghLYVQvjGQKs8EQfoWDyVL-1VPHN45DnTkt3sEl4KiS3EhvHJisM6Tg/exec';

let dadosCompletos = { Professor: [], Aluno: [] };
let graficosAtivos = []; // Para destruir os gráficos antigos antes de recriar

document.addEventListener('DOMContentLoaded', () => {
    carregarDados();

    // Adiciona eventos aos filtros para atualizar o dashboard quando mudarem
    document.getElementById('filtro-perfil').addEventListener('change', atualizarDashboard);
    document.getElementById('filtro-oficina').addEventListener('change', atualizarDashboard);
    document.getElementById('filtro-regional').addEventListener('change', atualizarDashboard);
    document.getElementById('filtro-mes').addEventListener('change', atualizarDashboard);
});

async function carregarDados() {
    try {
        // Faz a requisição GET para a sua planilha
        const response = await fetch(URL_API_GOOGLE);
        dadosCompletos = await response.json();
        
        document.getElementById('loading-msg').classList.add('hidden');
        document.getElementById('dashboard-content').classList.remove('hidden');
        
        preencherOpcoesDeFiltro();
        atualizarDashboard();
        
    } catch (error) {
        console.error("Erro ao carregar dados:", error);
        document.getElementById('loading-msg').textContent = "⚠️ Erro ao carregar os dados. Verifique a conexão ou a URL do script.";
    }
}

function preencherOpcoesDeFiltro() {
    // Pega todas as respostas (Professor e Aluno juntos para achar todas as opções)
    // Desconsidera a linha 0 (cabeçalhos)
    const todasLinhas = [];
    if(dadosCompletos.Professor.length > 1) todasLinhas.push(...dadosCompletos.Professor.slice(1));
    if(dadosCompletos.Aluno.length > 1) todasLinhas.push(...dadosCompletos.Aluno.slice(1));

    const oficinasSet = new Set();
    const regionaisSet = new Set();
    const mesesSet = new Set();

    todasLinhas.forEach(linha => {
        // Coluna A (0): Data | Coluna B (1): Regional | Coluna C (2): Oficina
        const dataInclusao = linha[0];
        const regional = linha[1];
        const oficina = linha[2];

        if (regional) regionaisSet.add(regional);
        if (oficina) oficinasSet.add(oficina);
        
        // Extrai o Mês/Ano da data (Ex: "10/05/2026" vira "05/2026")
        if (dataInclusao) {
            const partesData = dataInclusao.split(' ')[0].split('/'); // Adaptação para formato brasileiro DD/MM/YYYY
            if(partesData.length >= 3) {
                const mesAno = `${partesData[1]}/${partesData[2]}`;
                mesesSet.add(mesAno);
            }
        }
    });

    const selectOficina = document.getElementById('filtro-oficina');
    oficinasSet.forEach(ofic => selectOficina.innerHTML += `<option value="${ofic}">${ofic}</option>`);

    const selectRegional = document.getElementById('filtro-regional');
    regionaisSet.forEach(reg => selectRegional.innerHTML += `<option value="${reg}">${reg}</option>`);

    const selectMes = document.getElementById('filtro-mes');
    mesesSet.forEach(mes => selectMes.innerHTML += `<option value="${mes}">${mes}</option>`);
}

function atualizarDashboard() {
    const perfilSelecionado = document.getElementById('filtro-perfil').value;
    const oficinaSelecionada = document.getElementById('filtro-oficina').value;
    const regionalSelecionada = document.getElementById('filtro-regional').value;
    const mesSelecionado = document.getElementById('filtro-mes').value;

    const baseDados = dadosCompletos[perfilSelecionado];
    
    if (!baseDados || baseDados.length === 0) {
        document.getElementById('total-respostas').textContent = "0";
        document.getElementById('area-graficos').innerHTML = "<p>Sem dados para este perfil.</p>";
        return;
    }

    const cabecalhos = baseDados[0];
    let linhasFiltradas = baseDados.slice(1); // Remove os cabeçalhos para filtrar

    // Aplicação dos Filtros
    linhasFiltradas = linhasFiltradas.filter(linha => {
        const dataLinha = linha[0] || "";
        const regLinha = linha[1] || "";
        const oficLinha = linha[2] || "";
        
        let mesLinha = "";
        const partes = dataLinha.split(' ')[0].split('/');
        if(partes.length >= 3) mesLinha = `${partes[1]}/${partes[2]}`;

        const passaOficina = (oficinaSelecionada === "Todas") || (oficLinha === oficinaSelecionada);
        const passaRegional = (regionalSelecionada === "Todas") || (regLinha === regionalSelecionada);
        const passaMes = (mesSelecionado === "Todos") || (mesLinha === mesSelecionado);

        return passaOficina && passaRegional && passaMes;
    });

    // Atualiza KPI Total
    document.getElementById('total-respostas').textContent = linhasFiltradas.length;

    // Limpa a área de gráficos antigos
    const areaGraficos = document.getElementById('area-graficos');
    areaGraficos.innerHTML = '';
    graficosAtivos.forEach(grafico => grafico.destroy());
    graficosAtivos = [];

    // Se não tiver dados, não desenha gráficos
    if (linhasFiltradas.length === 0) return;

    // A partir da coluna 3 (índice 3) estão as perguntas
    for (let colIndex = 3; colIndex < cabecalhos.length; colIndex++) {
        const pergunta = cabecalhos[colIndex];
        
        // Ignora a pergunta de recado/texto livre
        if (pergunta.toLowerCase().includes('recado') || pergunta.toLowerCase().includes('depoimento')) {
            continue;
        }

        // Conta as respostas desta coluna específica
        const contagemRespostas = {};
        linhasFiltradas.forEach(linha => {
            let resposta = linha[colIndex] || "Não Respondido";
            
            // Trata múltiplas escolhas separadas por vírgula (Checkbox)
            if (resposta.includes(',')) {
                resposta.split(',').forEach(item => {
                    const r = item.trim();
                    contagemRespostas[r] = (contagemRespostas[r] || 0) + 1;
                });
            } else {
                contagemRespostas[resposta] = (contagemRespostas[resposta] || 0) + 1;
            }
        });

        // Prepara elementos na tela
        const divBox = document.createElement('div');
        divBox.className = 'grafico-box';
        
        const h3 = document.createElement('div');
        h3.className = 'grafico-titulo';
        h3.textContent = pergunta;
        
        const canvasContainer = document.createElement('div');
        canvasContainer.className = 'canvas-container';
        const canvas = document.createElement('canvas');
        
        canvasContainer.appendChild(canvas);
        divBox.appendChild(h3);
        divBox.appendChild(canvasContainer);
        areaGraficos.appendChild(divBox);

        // Prepara dados para o Chart.js
        const labels = Object.keys(contagemRespostas);
        const values = Object.values(contagemRespostas);
        
        // Se a pergunta for escala numérica, usa gráfico de barras, se for texto, usa pizza/rosca
        const ehNota = labels.some(l => !isNaN(parseInt(l)) && l.length <= 2);
        const tipoGrafico = ehNota ? 'bar' : 'doughnut';

        const chartColorPallete = [
            '#007f5f', '#2a9d8f', '#e9c46a', '#f4a261', '#e76f51', 
            '#264653', '#8ab17d', '#babb74', '#e2c044', '#1d3557'
        ];

        // Cria o Gráfico
        const novoGrafico = new Chart(canvas, {
            type: tipoGrafico,
            data: {
                labels: labels,
                datasets: [{
                    label: 'Quantidade',
                    data: values,
                    backgroundColor: tipoGrafico === 'bar' ? '#007f5f' : chartColorPallete,
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: tipoGrafico !== 'bar', // Esconde legenda em gráfico de barra
                        position: 'bottom',
                        labels: { boxWidth: 12, font: { size: 11 } }
                    }
                },
                scales: tipoGrafico === 'bar' ? {
                    y: { beginAtZero: true, ticks: { stepSize: 1 } }
                } : {}
            }
        });

        graficosAtivos.push(novoGrafico);
    }
}