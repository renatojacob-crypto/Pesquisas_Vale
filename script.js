// Cole aqui a URL gerada após implantar o seu Google Apps Script como 'Web App'
const URL_API_GOOGLE = 'SUA_URL_DO_WEB_APP_AQUI';

// Mapeamento das perguntas com base na estrutura do seu arquivo de controle
// Substitua os textos abaixo pelas perguntas exatas da Coluna A e Coluna C
const perguntasProfessor = [
    { id: 'prof_q1', label: 'Nome completo do educador:', tipo: 'text' },
    { id: 'prof_q2', label: 'Instituição de Ensino / Escola:', tipo: 'text' },
    { id: 'prof_q3', label: 'Como você avalia a aplicabilidade pedagógica dos conceitos abordados?', tipo: 'textarea' }
];

const perguntasAluno = [
    { id: 'aluno_q1', label: 'Identificação ou Turma:', tipo: 'text' },
    { id: 'aluno_q2', label: 'O que você mais gostou de construir ou aprender na oficina?', tipo: 'text' },
    { id: 'aluno_q3', label: 'Descreva em poucas palavras a sua experiência de hoje:', tipo: 'textarea' }
];

document.addEventListener('DOMContentLoaded', () => {
    const selectPerfil = document.getElementById('perfil');
    const formAvaliacao = document.getElementById('form-avaliacao');
    const areaPerguntas = document.getElementById('area-perguntas');
    const mensagemSucesso = document.getElementById('mensagem-sucesso');
    const btnReiniciar = document.getElementById('btn-reiniciar');
    const btnEnviar = document.getElementById('btn-enviar');

    // Manipula a alternância de perfil e renderização das perguntas
    selectPerfil.addEventListener('change', () => {
        const perfil = selectPerfil.value;
        areaPerguntas.innerHTML = '';

        if (!perfil) {
            formAvaliacao.classList.add('hidden');
            return;
        }

        const perguntas = perfil === 'Professor' ? perguntasProfessor : perguntasAluno;

        // Construção dinâmica e limpa do HTML das perguntas
        perguntas.forEach(item => {
            const group = document.createElement('div');
            group.className = 'form-group animate-fade';

            const label = document.createElement('label');
            label.setAttribute('for', item.id);
            label.textContent = item.label;
            group.appendChild(label);

            let field;
            if (item.tipo === 'textarea') {
                field = document.createElement('textarea');
            } else {
                field = document.createElement('input');
                field.type = 'text';
            }
            field.id = item.id;
            field.required = true;
            group.appendChild(field);

            areaPerguntas.appendChild(group);
        });

        formAvaliacao.classList.remove('hidden');
        mensagemSucesso.classList.add('hidden');
    });

    // Envio dos dados via Fetch API para o ecossistema Google Sheets
    formAvaliacao.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const perfil = selectPerfil.value;
        const perguntas = perfil === 'Professor' ? perguntasProfessor : perguntasAluno;
        
        // Coleta os valores na ordem exata das perguntas mapeadas
        const respostas = perguntas.map(item => document.getElementById(item.id).value);

        btnEnviar.disabled = true;
        btnEnviar.textContent = 'Enviando dados...';

        try {
            // Usamos o modo 'no-cors' ou 'cors' dependendo do retorno configurado no Apps Script.
            // Para Apps Script, enviar como text/plain evita problemas de preflight CORS.
            const response = await fetch(URL_API_GOOGLE, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'text/plain'
                },
                body: JSON.stringify({ perfil, respostas })
            });

            const resultado = await response.json();

            if (resultado.status === 'success') {
                formAvaliacao.classList.add('hidden');
                selectPerfil.parentElement.classList.add('hidden');
                mensagemSucesso.classList.remove('hidden');
            } else {
                alert('Erro operacional: ' + resultado.message);
            }
        } catch (error) {
            console.error('Erro na comunicação com a API:', error);
            // Fallback caso o Apps Script retorne redirecionamento opaco (comum em configurações restritas)
            alert('A requisição foi enviada. Verifique sua planilha para confirmar o recebimento.');
            
            // Força exibição de sucesso caso queira ignorar restrições estritas de CORS do navegador local
            formAvaliacao.classList.add('hidden');
            selectPerfil.parentElement.classList.add('hidden');
            mensagemSucesso.classList.remove('hidden');
        } finally {
            btnEnviar.disabled = false;
            btnEnviar.textContent = 'Enviar Respostas';
        }
    });

    // Reseta o estado do formulário para nova entrada
    btnReiniciar.addEventListener('click', () => {
        formAvaliacao.reset();
        areaPerguntas.innerHTML = '';
        selectPerfil.value = '';
        selectPerfil.parentElement.classList.remove('hidden');
        mensagemSucesso.classList.add('hidden');
    });
});
