const URL_API_GOOGLE = 'https://script.google.com/macros/s/AKfycbwfhNMh57LsfXFghLYVQvjGQKs8EQfoWDyVL-1VPHN45DnTkt3sEl4KiS3EhvHJisM6Tg/exec';

const opcoesSimNao = ['Sim', 'Não'];
const opcoesSimNaoPartes = ['Sim', 'Não', 'Em partes'];
const opcoesConhecimento = ['Sim, totalmente', 'Sim, parcialmente', 'Não esclareceu'];
const opcoesImagem = ['Melhorou', 'Permaneceu a mesma (positiva)', 'Permaneceu a mesma (negativa)', 'Piorou'];
const opcoesNota = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

// Mudança no tipo: 'radio' para opções textuais, 'escala' para notas numéricas
const perguntasProfessor = [
    { id: 'prof_q1', texto: '1. É a primeira vez que você participa de alguma atividade com a Vale por meio do Programa Vale nas Escolas?', tipo: 'radio', opcoes: opcoesSimNao },
    { id: 'prof_q2', texto: '2. A atividade contribuiu para o desenvolvimento educacional dos alunos?', tipo: 'radio', opcoes: opcoesSimNaoPartes },
    { id: 'prof_q3', texto: '3. A iniciativa contribui e complementa a proposta pedagógica da escola?', tipo: 'radio', opcoes: opcoesSimNaoPartes },
    { id: 'prof_q4', texto: '4. Você indicaria esta atividade para outra escola ou para outros(as) professores(as)?', tipo: 'radio', opcoes: opcoesSimNao },
    { id: 'prof_q5', texto: '5. A visita trouxe novos conhecimentos sobre a mineração e sua importância na nossa vida cotidiana?', tipo: 'radio', opcoes: opcoesSimNaoPartes },
    { id: 'prof_q6', texto: '6. Você considera que, por meio desta atividade, você conheceu melhor a Vale?', tipo: 'radio', opcoes: opcoesConhecimento },
    { id: 'prof_q7', texto: '7. Após a experiência desta visita, a imagem que você tem da Vale:', tipo: 'radio', opcoes: opcoesImagem },
    { id: 'prof_info1', texto: 'Com base nas informações recebidas durante a visita, atribua uma nota à Vale para cada afirmação abaixo (quanto maior a nota, maior o seu grau de concordância).', tipo: 'info' },
    { id: 'prof_q8', texto: '8. A Vale se preocupa com os impactos ambientais (1 a 10)', tipo: 'escala', opcoes: opcoesNota },
    { id: 'prof_q9', texto: '9. A Vale utiliza os recursos naturais de forma consciente (1 a 10)', tipo: 'escala', opcoes: opcoesNota },
    { id: 'prof_q10', texto: '10. A Vale promove o desenvolvimento social e o bem-estar da população (1 a 10)', tipo: 'escala', opcoes: opcoesNota },
    { id: 'prof_q11', texto: '11. A Vale incentiva e/ou apoia iniciativas culturais (1 a 10)', tipo: 'escala', opcoes: opcoesNota },
    { id: 'prof_q12', texto: '12. A Vale investe em projetos sociais (1 a 10)', tipo: 'escala', opcoes: opcoesNota },
    { id: 'prof_q13', texto: '13. De 1 a 10, qual a sua avaliação geral da visita?', tipo: 'escala', opcoes: opcoesNota },
    { id: 'prof_q14', texto: '14. Deixe-nos um recado. Pode ser um depoimento da sua experiência, um elogio, uma crítica ou sugestão.', tipo: 'textarea' }
];

const perguntasAluno = [
    { id: 'alu_q1', texto: '1. É a primeira vez que você participa de alguma atividade com a Vale por meio do Programa Vale nas Escolas?', tipo: 'radio', opcoes: opcoesSimNao },
    { id: 'alu_q2', texto: '2. Você considera que essa atividade contribuiu para o seu desenvolvimento?', tipo: 'radio', opcoes: opcoesSimNaoPartes },
    { id: 'alu_q3', texto: '3. Você indicaria esta atividade para um(a) amigo(a)?', tipo: 'radio', opcoes: opcoesSimNao },
    { id: 'alu_q4', texto: '4. A visita trouxe novos conhecimentos sobre a mineração e sua importância na nossa vida cotidiana?', tipo: 'radio', opcoes: opcoesSimNaoPartes },
    { id: 'alu_q5', texto: '5. Você considera que, por meio desta atividade, você conheceu melhor a Vale?', tipo: 'radio', opcoes: opcoesConhecimento },
    { id: 'alu_q6', texto: '6. Após a experiência desta visita, a imagem que você tem da Vale:', tipo: 'radio', opcoes: opcoesImagem },
    { id: 'alu_info1', texto: 'Com base nas informações recebidas durante a visita, atribua uma nota à Vale para cada afirmação abaixo (quanto maior a nota, maior o seu grau de concordância).', tipo: 'info' },
    { id: 'alu_q7', texto: '7. A Vale se preocupa com os impactos ambientais (1 a 10)', tipo: 'escala', opcoes: opcoesNota },
    { id: 'alu_q8', texto: '8. A Vale utiliza os recursos naturais de forma consciente (1 a 10)', tipo: 'escala', opcoes: opcoesNota },
    { id: 'alu_q9', texto: '9. A Vale promove o desenvolvimento social e o bem-estar da população (1 a 10)', tipo: 'escala', opcoes: opcoesNota },
    { id: 'alu_q10', texto: '10. A Vale incentiva e/ou apoia iniciativas culturais (1 a 10)', tipo: 'escala', opcoes: opcoesNota },
    { id: 'alu_q11', texto: '11. A Vale investe em projetos sociais (1 a 10)', tipo: 'escala', opcoes: opcoesNota },
    { id: 'alu_q12', texto: '12. De 1 (um) a 10 (dez), qual nota você daria para essa visita?', tipo: 'escala', opcoes: opcoesNota },
    { id: 'alu_q13', texto: '13. Deixe-nos um recado. Pode ser um depoimento da sua experiência, um elogio, uma crítica ou sugestão.', tipo: 'textarea' }
];

document.addEventListener('DOMContentLoaded', () => {
    const radiosPerfil = document.querySelectorAll('input[name="perfil"]');
    const formAvaliacao = document.getElementById('form-avaliacao');
    const areaPerguntas = document.getElementById('area-perguntas');
    const msgErro = document.getElementById('msg-erro');
    const btnEnviar = document.getElementById('btn-enviar');

    // Escuta a mudança nos radio buttons de perfil
    radiosPerfil.forEach(radio => {
        radio.addEventListener('change', () => {
            const perfil = document.querySelector('input[name="perfil"]:checked').value;
            areaPerguntas.innerHTML = '';
            msgErro.classList.add('hidden');

            const perguntas = perfil === 'Professor' ? perguntasProfessor : perguntasAluno;

            perguntas.forEach(item => {
                const group = document.createElement('div');
                group.className = 'form-group animate-fade';
                group.id = `group_${item.id}`;

                if (item.tipo === 'info') {
                    const infoText = document.createElement('p');
                    infoText.className = 'info-text';
                    infoText.textContent = item.texto;
                    group.appendChild(infoText);
                } else {
                    const labelTitle = document.createElement('label');
                    labelTitle.textContent = item.texto;
                    group.appendChild(labelTitle);

                    if (item.tipo === 'radio' || item.tipo === 'escala') {
                        const optionsContainer = document.createElement('div');
                        // Define classe CSS diferente se for escala gráfica ou radio comum
                        optionsContainer.className = item.tipo === 'escala' ? 'escala-container' : 'radio-container';

                        item.opcoes.forEach(opcao => {
                            const labelOpt = document.createElement('label');
                            labelOpt.className = item.tipo === 'escala' ? 'escala-option' : 'radio-option';

                            const inputRadio = document.createElement('input');
                            inputRadio.type = 'radio';
                            inputRadio.name = item.id;
                            inputRadio.value = opcao;

                            // Remove o erro quando o usuário clica
                            inputRadio.addEventListener('change', () => {
                                group.classList.remove('error-highlight');
                            });

                            labelOpt.appendChild(inputRadio);

                            // O texto exibido (comum ou formatado como botão de escala)
                            const spanText = document.createElement('span');
                            spanText.textContent = opcao;
                            labelOpt.appendChild(spanText);

                            optionsContainer.appendChild(labelOpt);
                        });
                        
                        group.appendChild(optionsContainer);

                    } else if (item.tipo === 'textarea') {
                        const field = document.createElement('textarea');
                        field.id = item.id;
                        field.placeholder = 'Digite sua resposta aqui...';
                        
                        field.addEventListener('input', () => {
                            if(field.value.trim() !== '') {
                                group.classList.remove('error-highlight');
                            }
                        });
                        group.appendChild(field);
                    }
                }
                areaPerguntas.appendChild(group);
            });

            formAvaliacao.classList.remove('hidden');
        });
    });

    formAvaliacao.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const perfilSelecionado = document.querySelector('input[name="perfil"]:checked');
        if (!perfilSelecionado) return;
        
        const perfil = perfilSelecionado.value;
        const perguntas = perfil === 'Professor' ? perguntasProfessor : perguntasAluno;
        
        let isValid = true;
        const respostas = [];

        perguntas.forEach(item => {
            if (item.tipo !== 'info') {
                const group = document.getElementById(`group_${item.id}`);
                let valor = '';
                
                if (item.tipo === 'radio' || item.tipo === 'escala') {
                    const checkedOption = document.querySelector(`input[name="${item.id}"]:checked`);
                    if (checkedOption) valor = checkedOption.value;
                } else if (item.tipo === 'textarea') {
                    valor = document.getElementById(item.id).value;
                }

                if (!valor || valor.trim() === '') {
                    isValid = false;
                    group.classList.add('error-highlight');
                } else {
                    group.classList.remove('error-highlight');
                    respostas.push(valor);
                }
            }
        });

        if (!isValid) {
            msgErro.classList.remove('hidden');
            document.querySelector('.error-highlight').scrollIntoView({ behavior: 'smooth', block: 'center' });
            return;
        }

        msgErro.classList.add('hidden');
        btnEnviar.disabled = true;
        btnEnviar.textContent = 'Enviando dados...';

        try {
            const response = await fetch(URL_API_GOOGLE, {
                method: 'POST',
                mode: 'cors',
                headers: { 'Content-Type': 'text/plain' },
                body: JSON.stringify({ perfil, respostas })
            });

            const resultado = await response.json();

            if (resultado.status === 'success') {
                formAvaliacao.classList.add('hidden');
                document.querySelector('.profile-selector').classList.add('hidden');
                document.querySelector('.nav-back').classList.add('hidden');
                document.getElementById('mensagem-sucesso').classList.remove('hidden');
            } else {
                alert('Erro ao enviar: ' + resultado.message);
            }
        } catch (error) {
            console.error('Erro na API:', error);
            alert('A requisição foi enviada. Verifique sua planilha para confirmar.');
            formAvaliacao.classList.add('hidden');
            document.querySelector('.profile-selector').classList.add('hidden');
            document.querySelector('.nav-back').classList.add('hidden');
            document.getElementById('mensagem-sucesso').classList.remove('hidden');
        } finally {
            btnEnviar.disabled = false;
            btnEnviar.textContent = 'Enviar Respostas';
        }
    });

    document.getElementById('btn-reiniciar').addEventListener('click', () => {
        location.reload();
    });
});