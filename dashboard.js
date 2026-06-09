// COLE AQUI A MESMA URL DO GOOGLE APPS SCRIPT
const URL_API_GOOGLE = 'https://script.google.com/macros/s/AKfycbwfhNMh57LsfXFghLYVQvjGQKs8EQfoWDyVL-1VPHN45DnTkt3sEl4KiS3EhvHJisM6Tg/exec';

let dadosCompletos = { Professor: [], Aluno: [] };
let graficosAtivos = []; 

// --- MAPEAMENTO EXATO DAS PERGUNTAS DE CADA OFICINA ---
const dicionarioPerguntas = {
    "Robótica - Pelotização": {
        Professor: [
            "1. É a primeira vez que você participa de alguma atividade com a Vale por meio do Programa Vale nas Escolas?",
            "2. A atividade contribuiu para o desenvolvimento educacional dos alunos?",
            "3. A iniciativa contribui e complementa a proposta pedagógica da escola?",
            "4. Você indicaria esta atividade para outra escola ou para outros(as) professores(as)?",
            "5. A visita trouxe novos conhecimentos sobre a mineração e sua importância na nossa vida cotidiana?",
            "6. Você considera que, por meio desta atividade, você conheceu melhor a Vale?",
            "7. Após a experiência desta visita, a imagem que você tem da Vale:",
            "8. A Vale se preocupa com os impactos ambientais",
            "9. A Vale utiliza os recursos naturais de forma consciente",
            "10. A Vale promove o desenvolvimento social e o bem-estar da população",
            "11. A Vale incentiva e/ou apoia iniciativas culturais",
            "12. A Vale investe em projetos sociais",
            "13. De 1 a 10, qual a sua avaliação geral da visita?",
            "14. Deixe-nos um recado."
        ],
        Aluno: [
            "1. É a primeira vez que você participa de alguma atividade com a Vale?",
            "2. Você considera que essa atividade contribuiu para o seu desenvolvimento?",
            "3. Você indicaria esta atividade para um(a) amigo(a)?",
            "4. A visita trouxe novos conhecimentos sobre a mineração e sua importância na nossa vida cotidiana?",
            "5. Você considera que, por meio desta atividade, você conheceu melhor a Vale?",
            "6. Após a experiência desta visita, a imagem que você tem da Vale:",
            "7. A Vale se preocupa com os impactos ambientais",
            "8. A Vale utiliza os recursos naturais de forma consciente",
            "9. A Vale promove o desenvolvimento social e o bem-estar da população",
            "10. A Vale incentiva e/ou apoia iniciativas culturais",
            "11. A Vale investe em projetos sociais",
            "12. De 1 a 10, qual nota você daria para essa visita?",
            "13. Deixe-nos um recado."
        ]
    },
    "Robótica - Logística": {
        Professor: [
            "1. É a primeira vez que você participa de alguma atividade com a Vale por meio do Programa Vale nas Escolas?",
            "2. A atividade contribuiu para o desenvolvimento educacional dos alunos?",
            "3. A iniciativa contribui e complementa a proposta pedagógica da escola?",
            "4. Você indicaria esta atividade para outra escola ou para outros(as) professores(as)?",
            "5. A visita trouxe novos conhecimentos sobre a mineração e sua importância na nossa vida cotidiana?",
            "6. Você considera que, por meio desta atividade, você conheceu melhor a Vale?",
            "7. Após a experiência desta visita, a imagem que você tem da Vale:",
            "8. A Vale se preocupa com os impactos ambientais",
            "9. A Vale utiliza os recursos naturais de forma consciente",
            "10. A Vale promove o desenvolvimento social e o bem-estar da população",
            "11. A Vale incentiva e/ou apoia iniciativas culturais",
            "12. A Vale investe em projetos sociais",
            "13. De 1 a 10, qual a sua avaliação geral da visita?",
            "14. Deixe-nos um recado."
        ],
        Aluno: [
            "1. É a primeira vez que você participa de alguma atividade com a Vale?",
            "2. Você considera que essa atividade contribuiu para o seu desenvolvimento?",
            "3. Você indicaria esta atividade para um(a) amigo(a)?",
            "4. A visita trouxe novos conhecimentos sobre a mineração e sua importância na nossa vida cotidiana?",
            "5. Você considera que, por meio desta atividade, você conheceu melhor a Vale?",
            "6. Após a experiência desta visita, a imagem que você tem da Vale:",
            "7. A Vale se preocupa com os impactos ambientais",
            "8. A Vale utiliza os recursos naturais de forma consciente",
            "9. A Vale promove o desenvolvimento social e o bem-estar da população",
            "10. A Vale incentiva e/ou apoia iniciativas culturais",
            "11. A Vale investe em projetos sociais",
            "12. De 1 a 10, qual nota você daria para essa visita?",
            "13. Deixe-nos um recado."
        ]
    },
    "Robótica - Mineração": {
        Professor: [
            "1. Sua opinião sobre a Roda de Conversa (Domínio, Clareza e Objetividade):",
            "2. A roda de Conversa e a Oficina foram capaz de gerar interesse e esclarecimento de dúvidas:",
            "3. Qual a sua opinião sobre as missões robóticas?",
            "4. Esta é a sua primeira experiência com a Vale?",
            "5. Você entende que a oficina contribui para estimular novos conhecimentos sobre a mineração e sua importância em nossa vida diária?",
            "6. A iniciativa contribui e complementa a proposta pedagógica da escola?",
            "7. Você acredita que essa experiência contribuiu de alguma forma para o desenvolvimento do aluno?",
            "8. Você indicaria a oficina para outra escola/professor?",
            "9. A carga horária foi suficiente?",
            "10. A oficina esclareceu o funcionamento dos controles ambientais aplicados no processo produtivo?",
            "11. Após está oficina, a imagem que eu tenho da Vale:",
            "12. De 0 a 10 qual a sua avaliação geral na Oficina:",
            "13. Dê o sei Depoimento e/ou Sugestões:"
        ],
        Aluno: [
            "1. Sua opinião sobre a Roda de Conversa (Domínio, Clareza e Objetividade):",
            "2. A roda de Conversa e a Oficina foram capaz de gerar interesse e esclarecimento de dúvidas:",
            "3. Qual a sua opinião sobre as missões robóticas?",
            "4. Esta é a sua primeira experiência com a Vale?",
            "5. A oficina trouxe novos conhecimentos sobre a mineração e sua importância em nossa vida diária?",
            "6. A oficina esclareceu o funcionamento dos controles ambientais aplicados no processo produtivo?",
            "7. Você indicaria está atividade para um amigo (a)?",
            "8. A carga horária foi suficiente?",
            "9. Após está oficina, a imagem que eu tenho da Vale?",
            "10. Você entende que o conhecimento compartilhado nessa experiência pode agregar e contribuir com o conteúdo de sala de aula? Como?",
            "11. De 0 a 10 qual a sua avaliação geral na Oficina:",
            "12. Dê o sei Depoimento e/ou Sugestões:"
        ]
    },
    "Robótica/Maker - PAEBM": {
        Professor: [
            "1. Dos riscos abaixo, quais você acha mais prováveis de acontecer no seu município?",
            "2. Com qual frequência sua escola recebe Projetos externos não formais?",
            "3. O tema Segurança: riscos e emergências fazem parte da grade curricular da sua escola?",
            "4. Você acha pertinente introduzir e debater esse tema na escola?",
            "5. Justifique sua resposta.",
            "6. Você considera as ferramentas lúdicas e participativas importantes para o aprendizado nessa faixa etária?",
            "7. Justifique sua resposta.",
            "8. Residindo em um município minerador, você já participou de Simulado de Emergência de Barragens de Mineração?",
            "9. Na sua escola, como você avalia a organização do Projeto?",
            "10. E o conteúdo?",
            "11. A duração da oficina (2h) está adequada à dinâmica da escola e ao processo de ensino aprendizagem junto a alunos e professores?",
            "12. De modo geral, o Projeto foi importante para você e sua escola?",
            "13. Classifique seu grau de participação em relação a oficina que realizou?",
            "14. Você teria sugestões e/ou críticas para enriquecer o Projeto? Conte para nós!"
        ],
        Aluno: [
            "1. Dos riscos abaixo, quais você acha mais prováveis de acontecer no seu município?",
            "2. Quando você circula por seu município costuma observar as Placas de Sinalização?",
            "3. Antes deste Projeto, você sabia para que servem as Placas de Sinalização?",
            "4. Na sua escola, já conversaram com você sobre como evitar riscos e acidentes e como fazer no caso de emergências?",
            "5. Antes desse Projeto, você tinha conhecimentos sobre o processo de mineração?",
            "6. Você mora em um município minerador. Já conhecia os Simulado de Emergência de Barragens de Mineração?",
            "7. Já participou de algum Simulado?",
            "8. Se sim, o que achou? Se não, por quê?",
            "9. De modo geral, o Projeto de Robótica foi importante para você?",
            "10. Justifique sua resposta",
            "11. Conte para nós o que mais gostou no Projeto:",
            "12. Você tem sugestões para melhoria do Projeto Dona Sirene? Quais?",
            "13. Em qual ano que você estuda?",
            "14. Classifique seu grau de participação em relação a oficina que realizou?"
        ]
    },
    "StoryStarter - Sustentabilidade": {
        Professor: [
            "1. Roda de Conversa (domínio, clareza e objetividade):",
            "2. Capacidade de gerar interesse e esclarecimento de dúvidas:",
            "3. Didática nos desafios para desenvolver a oficina:",
            "4. É a primeira experiência com a Vale?",
            "5. A oficina trouxe novos conhecimentos sobre a mineração e sua importância em nossa vida diária?",
            "6. A iniciativa contribui e complementa a proposta pedagógica da escola?",
            "7. Você acredita que essa experiência contribuiu de alguma forma para o desenvolvimento do aluno?",
            "8. Você indicaria a oficina para outra escola/professor?",
            "9. A carga horária foi suficiente?",
            "10. A carga horária foi suficiente?",
            "11. A oficina contribuiu com novos conhecimentos sobre o tema Sustentabilidade?",
            "12. Após está oficina, a imagem que eu tenho da Vale:",
            "13. De 0 a 10 qual a sua avaliação geral na Oficina:",
            "14. Depoimento e Sugestões"
        ],
        Aluno: [
            "1. Roda de Conversa (domínio, clareza e objetividade):",
            "2. Capacidade de gerar interesse e esclarecimento de dúvidas:",
            "3. Desafios para desenvolver as oficinas:",
            "4. É a primeira experiência com a Vale?",
            "5. A oficina trouxe novos conhecimentos sobre a mineração e sua importância em nossa vida diária?",
            "6. A oficina contribuiu para novos conhecimentos sobre o tema Sustentabilidade?",
            "7. Você indicaria está atividade para um amigo (a)?",
            "8. A carga horária foi suficiente?",
            "9. Após está oficina, a imagem que eu tenho da Vale?",
            "10. De 0 a 10 qual a sua avaliação geral na Oficina?",
            "11. Depoimento e Sugestões:"
        ]
    }
};

document.addEventListener('DOMContentLoaded', () => {
    carregarDados();

    document.getElementById('filtro-perfil').addEventListener('change', atualizarDashboard);
    document.getElementById('filtro-oficina').addEventListener('change', atualizarDashboard);
    document.getElementById('filtro-regional').addEventListener('change', atualizarDashboard);
    document.getElementById('filtro-mes').addEventListener('change', atualizarDashboard);
});

async function carregarDados() {
    try {
        const response = await fetch(URL_API_GOOGLE);
        dadosCompletos = await response.json();
        
        document.getElementById('loading-msg').classList.add('hidden');
        document.getElementById('dashboard-content').classList.remove('hidden');
        
        preencherOpcoesDeFiltro();
        atualizarDashboard();
        
    } catch (error) {
        console.error("Erro ao carregar dados:", error);
        document.getElementById('loading-msg').textContent = "⚠️ Erro ao carregar os dados. Verifique a ligação ou a URL do script.";
    }
}

function preencherOpcoesDeFiltro() {
    const todasLinhas = [];
    if(dadosCompletos.Professor.length > 1) todasLinhas.push(...dadosCompletos.Professor.slice(1));
    if(dadosCompletos.Aluno.length > 1) todasLinhas.push(...dadosCompletos.Aluno.slice(1));

    const oficinasSet = new Set();
    const regionaisSet = new Set();
    const mesesSet = new Set();

    todasLinhas.forEach(linha => {
        const dataInclusao = linha[0];
        const regional = linha[1];
        const oficina = linha[2];

        if (regional) regionaisSet.add(regional);
        if (oficina) oficinasSet.add(oficina);
        
        if (dataInclusao) {
            const partesData = dataInclusao.split(' ')[0].split('/'); 
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
    let linhasFiltradas = baseDados.slice(1); 

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

    document.getElementById('total-respostas').textContent = linhasFiltradas.length;

    const areaGraficos = document.getElementById('area-graficos');
    areaGraficos.innerHTML = '';
    graficosAtivos.forEach(grafico => grafico.destroy());
    graficosAtivos = [];

    if (linhasFiltradas.length === 0) return;

    // A partir da coluna 3 (índice 3) estão as perguntas na folha de cálculo
    for (let colIndex = 3; colIndex < cabecalhos.length; colIndex++) {
        
        const indexPergunta = colIndex - 3; 
        
        // Define qual lista de títulos usar
        let titulosAtuais = [];
        if (oficinaSelecionada !== "Todas" && dicionarioPerguntas[oficinaSelecionada]) {
            titulosAtuais = dicionarioPerguntas[oficinaSelecionada][perfilSelecionado];
        }

        let pergunta = cabecalhos[colIndex];
        
        if (titulosAtuais && titulosAtuais[indexPergunta]) {
            pergunta = titulosAtuais[indexPergunta];
        } else if (oficinaSelecionada !== "Todas") {
            continue;
        }

        // --- FILTRO ABRANGENTE DE CAMPOS DE TEXTO LIVRE ---
        const pLower = pergunta.toLowerCase();
        if (pLower.includes('recado') || 
            pLower.includes('depoimento') || 
            pLower.includes('sugestões') || 
            pLower.includes('justifique') || 
            pLower.includes('conte para nós') || 
            pLower.includes('o que achou') ||
            pLower.includes('como?')) {
            continue;
        }

        const contagemRespostas = {};
        linhasFiltradas.forEach(linha => {
            let resposta = linha[colIndex] ? linha[colIndex].trim() : "";
            
            if (resposta !== "") {
                if (resposta.includes(',')) { 
                    resposta.split(',').forEach(item => {
                        const r = item.trim();
                        contagemRespostas[r] = (contagemRespostas[r] || 0) + 1;
                    });
                } else {
                    contagemRespostas[resposta] = (contagemRespostas[resposta] || 0) + 1;
                }
            }
        });

        if (Object.keys(contagemRespostas).length === 0) {
            continue; 
        }

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

        const labels = Object.keys(contagemRespostas);
        const values = Object.values(contagemRespostas);
        
        const ehNota = labels.some(l => !isNaN(parseInt(l)) && l.length <= 2);
        const tipoGrafico = ehNota ? 'bar' : 'doughnut';

        const chartColorPallete = [
            '#007f5f', '#2a9d8f', '#e9c46a', '#f4a261', '#e76f51', 
            '#264653', '#8ab17d', '#babb74', '#e2c044', '#1d3557'
        ];

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
                        display: tipoGrafico !== 'bar', 
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
// --- NOVAS FUNÇÕES: GERAR PDF E ENVIAR POR E-MAIL ---

// Opções de configuração do PDF
const opcoesPDF = {
    margin:       10,
    filename:     'Dashboard_Oficinas_Vale.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2, useCORS: true },
    jsPDF:        { unit: 'mm', format: 'a4', orientation: 'landscape' } // Paisagem para caberem bem os gráficos
};

// 1. Função que apenas baixa o PDF para o computador
function exportarPDF() {
    const btn = document.getElementById('btn-gerar-pdf');
    btn.textContent = '⏳ A gerar...';
    btn.disabled = true;

    const elementoParaPDF = document.getElementById('dashboard-content');

    html2pdf().set(opcoesPDF).from(elementoParaPDF).save().then(() => {
        btn.textContent = '📄 Exportar PDF';
        btn.disabled = false;
    });
}

// 2. Função que gera o PDF em "segredo" e envia via POST para o Google Apps Script mandar por e-mail
async function enviarPorEmail() {
    const emailDestino = document.getElementById('input-email').value;
    const btn = document.getElementById('btn-enviar-email');

    // Validação simples de e-mail
    if (!emailDestino || !emailDestino.includes('@')) {
        alert("Por favor, digite um e-mail válido.");
        return;
    }

    btn.textContent = '⏳ A preparar e-mail...';
    btn.disabled = true;

    try {
        const elementoParaPDF = document.getElementById('dashboard-content');
        
        // Em vez de '.save()', usamos '.output()' para obter o ficheiro em formato de código (Base64)
        const pdfBase64 = await html2pdf().set(opcoesPDF).from(elementoParaPDF).output('datauristring');
        
        // Extrai apenas o código base64 puro (removendo o prefixo data:application/pdf;base64,)
        const base64Limpo = pdfBase64.split(',')[1];

        // Envia para o nosso Google Apps Script
        const response = await fetch(URL_API_GOOGLE, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'text/plain' },
            body: JSON.stringify({ 
                action: "enviarEmail", // Avisa o Script que não é para gravar na folha de cálculo
                email: emailDestino, 
                pdfData: base64Limpo 
            })
        });

        alert(`Sucesso! O Dashboard foi enviado em anexo para o e-mail: ${emailDestino}`);
        document.getElementById('input-email').value = ''; // Limpa o campo

    } catch (error) {
        console.error("Erro ao enviar e-mail:", error);
        alert("Ocorreu um erro ao tentar enviar o e-mail.");
    } finally {
        btn.textContent = '✉️ Enviar por E-mail';
        btn.disabled = false;
    }
}