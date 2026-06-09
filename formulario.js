const URL_API_GOOGLE = 'https://script.google.com/macros/s/AKfycbwfhNMh57LsfXFghLYVQvjGQKs8EQfoWDyVL-1VPHN45DnTkt3sEl4KiS3EhvHJisM6Tg/exec';

const opcoesSimNao = ['Sim', 'Não'];
const opcoesSimNaoPartes = ['Sim', 'Não', 'Em partes'];
const opcoesConhecimento = ['Sim, totalmente', 'Sim, parcialmente', 'Não esclareceu'];
const opcoesImagem = ['Melhorou', 'Permaneceu a mesma (positiva)', 'Permaneceu a mesma (negativa)', 'Piorou'];
const opcoesNota = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
const opcoesOtimoBomRegularRuim = ['Ótimo', 'Bom',"Regular",'Ruim'];
const opcoesFARA = ['Frequentemente', 'Algumas Vezes', 'Raramente'];
const opcoesSAN = ['Sim', 'As Vezes', 'Não'];
const opcoesMPN = ['Muito Importantes', 'Pouco Importantes', 'Não Importantes'];
const opcoesBOPD = ['Bem Organizdo', 'Organizado', 'Pouco Organizado', 'Desorganizado'];
const opcoesEPP = ['Está Adequada', 'Pode Reduzir', 'Pode Aumentar'];
const opcoesSMN = ['Sim', 'Muito Pouco', 'Não']
const opcoesSJN = ['Sim', 'Já ouvi Falar', 'Não'];
const opcoesAno = ['6º Ano do Ensino Fundamentão', '7º Ano do Ensino Fundamental', '8º Ano do Ensino Fundamental', '9º Ano do Ensino Fundamental', '1º Ano do Ensino Médio', '2º Ano do Ensino Médio', '3º Ano do Ensino Médio', 'Ensino Técnico', 'Ensino de Jovens e Adultos']
const opcoesCheck = ['Alagamentos/Enchentes', 'Deslizamento de encostas', 'Rompimento de Barragens', 'Incêndios Urbanos e Florestais', 'Acidentes de Trânsito', 'Acidentes na Linha Férrea'];

// As perguntas completas da pelotização (Mantenha igual)
const perguntasPelotizacaoProfessor = [
    { id: 'prof_q1', texto: '1. É a primeira vez que você participa de alguma atividade com a Vale por meio do Programa Vale nas Escolas?', tipo: 'radio', opcoes: opcoesSimNao },
    { id: 'prof_q2', texto: '2. A atividade contribuiu para o desenvolvimento educacional dos alunos?', tipo: 'radio', opcoes: opcoesSimNaoPartes },
    { id: 'prof_q3', texto: '3. A iniciativa contribui e complementa a proposta pedagógica da escola?', tipo: 'radio', opcoes: opcoesSimNaoPartes },
    { id: 'prof_q4', texto: '4. Você indicaria esta atividade para outra escola ou para outros(as) professores(as)?', tipo: 'radio', opcoes: opcoesSimNao },
    { id: 'prof_q5', texto: '5. A visita trouxe novos conhecimentos sobre a mineração e sua importância na nossa vida cotidiana?', tipo: 'radio', opcoes: opcoesSimNaoPartes },
    { id: 'prof_q6', texto: '6. Você considera que, por meio desta atividade, você conheceu melhor a Vale?', tipo: 'radio', opcoes: opcoesConhecimento },
    { id: 'prof_q7', texto: '7. Após a experiência desta visita, a imagem que você tem da Vale:', tipo: 'radio', opcoes: opcoesImagem },
    { id: 'prof_info1', texto: 'Com base nas informações recebidas durante a visita, atribua uma nota à Vale para cada afirmação abaixo.', tipo: 'info' },
    { id: 'prof_q8', texto: '8. A Vale se preocupa com os impactos ambientais', tipo: 'escala', opcoes: opcoesNota },
    { id: 'prof_q9', texto: '9. A Vale utiliza os recursos naturais de forma consciente', tipo: 'escala', opcoes: opcoesNota },
    { id: 'prof_q10', texto: '10. A Vale promove o desenvolvimento social e o bem-estar da população', tipo: 'escala', opcoes: opcoesNota },
    { id: 'prof_q11', texto: '11. A Vale incentiva e/ou apoia iniciativas culturais', tipo: 'escala', opcoes: opcoesNota },
    { id: 'prof_q12', texto: '12. A Vale investe em projetos sociais', tipo: 'escala', opcoes: opcoesNota },
    { id: 'prof_q13', texto: '13. De 1 a 10, qual a sua avaliação geral da visita?', tipo: 'escala', opcoes: opcoesNota },
    { id: 'prof_q14', texto: '14. Deixe-nos um recado.', tipo: 'textarea' }
];

const perguntasPelotizacaoAluno = [
    { id: 'alu_q1', texto: '1. É a primeira vez que você participa de alguma atividade com a Vale?', tipo: 'radio', opcoes: opcoesSimNao },
    { id: 'alu_q2', texto: '2. Você considera que essa atividade contribuiu para o seu desenvolvimento?', tipo: 'radio', opcoes: opcoesSimNaoPartes },
    { id: 'alu_q3', texto: '3. Você indicaria esta atividade para um(a) amigo(a)?', tipo: 'radio', opcoes: opcoesSimNao },
    { id: 'alu_q4', texto: '4. A visita trouxe novos conhecimentos sobre a mineração e sua importância na nossa vida cotidiana?', tipo: 'radio', opcoes: opcoesSimNaoPartes },
    { id: 'alu_q5', texto: '5. Você considera que, por meio desta atividade, você conheceu melhor a Vale?', tipo: 'radio', opcoes: opcoesConhecimento },
    { id: 'alu_q6', texto: '6. Após a experiência desta visita, a imagem que você tem da Vale:', tipo: 'radio', opcoes: opcoesImagem },
    { id: 'alu_info1', texto: 'Com base nas informações recebidas, atribua uma nota à Vale para cada afirmação abaixo.', tipo: 'info' },
    { id: 'alu_q7', texto: '7. A Vale se preocupa com os impactos ambientais', tipo: 'escala', opcoes: opcoesNota },
    { id: 'alu_q8', texto: '8. A Vale utiliza os recursos naturais de forma consciente', tipo: 'escala', opcoes: opcoesNota },
    { id: 'alu_q9', texto: '9. A Vale promove o desenvolvimento social e o bem-estar da população', tipo: 'escala', opcoes: opcoesNota },
    { id: 'alu_q10', texto: '10. A Vale incentiva e/ou apoia iniciativas culturais', tipo: 'escala', opcoes: opcoesNota },
    { id: 'alu_q11', texto: '11. A Vale investe em projetos sociais', tipo: 'escala', opcoes: opcoesNota },
    { id: 'alu_q12', texto: '12. De 1 a 10, qual nota você daria para essa visita?', tipo: 'escala', opcoes: opcoesNota },
    { id: 'alu_q13', texto: '13. Deixe-nos um recado.', tipo: 'textarea' }
];

// A perguntas da logística
const perguntasLogisticaProfessor = [
    { id: 'prof_q1', texto: '1. É a primeira vez que você participa de alguma atividade com a Vale por meio do Programa Vale nas Escolas?', tipo: 'radio', opcoes: opcoesSimNao },
    { id: 'prof_q2', texto: '2. A atividade contribuiu para o desenvolvimento educacional dos alunos?', tipo: 'radio', opcoes: opcoesSimNaoPartes },
    { id: 'prof_q3', texto: '3. A iniciativa contribui e complementa a proposta pedagógica da escola?', tipo: 'radio', opcoes: opcoesSimNaoPartes },
    { id: 'prof_q4', texto: '4. Você indicaria esta atividade para outra escola ou para outros(as) professores(as)?', tipo: 'radio', opcoes: opcoesSimNao },
    { id: 'prof_q5', texto: '5. A visita trouxe novos conhecimentos sobre a mineração e sua importância na nossa vida cotidiana?', tipo: 'radio', opcoes: opcoesSimNaoPartes },
    { id: 'prof_q6', texto: '6. Você considera que, por meio desta atividade, você conheceu melhor a Vale?', tipo: 'radio', opcoes: opcoesConhecimento },
    { id: 'prof_q7', texto: '7. Após a experiência desta visita, a imagem que você tem da Vale:', tipo: 'radio', opcoes: opcoesImagem },
    { id: 'prof_info1', texto: 'Com base nas informações recebidas durante a visita, atribua uma nota à Vale para cada afirmação abaixo.', tipo: 'info' },
    { id: 'prof_q8', texto: '8. A Vale se preocupa com os impactos ambientais', tipo: 'escala', opcoes: opcoesNota },
    { id: 'prof_q9', texto: '9. A Vale utiliza os recursos naturais de forma consciente', tipo: 'escala', opcoes: opcoesNota },
    { id: 'prof_q10', texto: '10. A Vale promove o desenvolvimento social e o bem-estar da população', tipo: 'escala', opcoes: opcoesNota },
    { id: 'prof_q11', texto: '11. A Vale incentiva e/ou apoia iniciativas culturais', tipo: 'escala', opcoes: opcoesNota },
    { id: 'prof_q12', texto: '12. A Vale investe em projetos sociais', tipo: 'escala', opcoes: opcoesNota },
    { id: 'prof_q13', texto: '13. De 1 a 10, qual a sua avaliação geral da visita?', tipo: 'escala', opcoes: opcoesNota },
    { id: 'prof_q14', texto: '14. Deixe-nos um recado.', tipo: 'textarea' }
];

const perguntasLogisticaAluno = [
    { id: 'alu_q1', texto: '1. É a primeira vez que você participa de alguma atividade com a Vale?', tipo: 'radio', opcoes: opcoesSimNao },
    { id: 'alu_q2', texto: '2. Você considera que essa atividade contribuiu para o seu desenvolvimento?', tipo: 'radio', opcoes: opcoesSimNaoPartes },
    { id: 'alu_q3', texto: '3. Você indicaria esta atividade para um(a) amigo(a)?', tipo: 'radio', opcoes: opcoesSimNao },
    { id: 'alu_q4', texto: '4. A visita trouxe novos conhecimentos sobre a mineração e sua importância na nossa vida cotidiana?', tipo: 'radio', opcoes: opcoesSimNaoPartes },
    { id: 'alu_q5', texto: '5. Você considera que, por meio desta atividade, você conheceu melhor a Vale?', tipo: 'radio', opcoes: opcoesConhecimento },
    { id: 'alu_q6', texto: '6. Após a experiência desta visita, a imagem que você tem da Vale:', tipo: 'radio', opcoes: opcoesImagem },
    { id: 'alu_info1', texto: 'Com base nas informações recebidas, atribua uma nota à Vale para cada afirmação abaixo.', tipo: 'info' },
    { id: 'alu_q7', texto: '7. A Vale se preocupa com os impactos ambientais', tipo: 'escala', opcoes: opcoesNota },
    { id: 'alu_q8', texto: '8. A Vale utiliza os recursos naturais de forma consciente', tipo: 'escala', opcoes: opcoesNota },
    { id: 'alu_q9', texto: '9. A Vale promove o desenvolvimento social e o bem-estar da população', tipo: 'escala', opcoes: opcoesNota },
    { id: 'alu_q10', texto: '10. A Vale incentiva e/ou apoia iniciativas culturais', tipo: 'escala', opcoes: opcoesNota },
    { id: 'alu_q11', texto: '11. A Vale investe em projetos sociais', tipo: 'escala', opcoes: opcoesNota },
    { id: 'alu_q12', texto: '12. De 1 a 10, qual nota você daria para essa visita?', tipo: 'escala', opcoes: opcoesNota },
    { id: 'alu_q13', texto: '13. Deixe-nos um recado.', tipo: 'textarea' }
];

// A perguntas da mineração
const perguntasMineracaoProfessor = [
    { id: 'prof_q1', texto: '1. Sua opinião sobre a Roda de Conversa (Domínio, Clareza e Objetividade:', tipo: 'radio', opcoes: opcoesOtimoBomRegularRuim },
    { id: 'prof_q2', texto: '2. A roda de Conversa e a Oficina foram capaz de gerar interesse e esclarecimento de dúvidas:', tipo: 'radio', opcoes: opcoesOtimoBomRegularRuim },
    { id: 'prof_q3', texto: '3. Qual a sua opinião sobre as missões robóticas?', tipo: 'radio', opcoes: opcoesOtimoBomRegularRuim },
    { id: 'prof_q4', texto: '4. Esta é a sua primeira experiência com a Vale?', tipo: 'radio', opcoes: opcoesSimNao },
    { id: 'prof_q5', texto: '5. Você entende que a oficina contribui para estimular novos conhecimentos sobre a mineração e sua importância em nossa vida diária?', tipo: 'radio', opcoes: opcoesSimNaoPartes },
    { id: 'prof_q6', texto: '6. A iniciativa contribui e complementa a proposta pedagógica da escola?', tipo: 'radio', opcoes: opcoesSimNaoPartes },
    { id: 'prof_q7', texto: '7. Você acredita que essa experiência contribuiu de alguma forma para o desenvolvimento do aluno?', tipo: 'radio', opcoes: opcoesSimNao },
    { id: 'prof_q8', texto: '8. Você indicaria a oficina para outra escola/professor?', tipo: 'radio', opcoes: opcoesSimNao },
    { id: 'prof_q9', texto: '9. A carga horária foi suficiente?', tipo: 'radio', opcoes: opcoesSimNao },
    { id: 'prof_q10', texto: '10. A oficina esclareceu o funcionamento dos controles ambientais aplicados no processo produtivo?', tipo: 'radio', opcoes: opcoesConhecimento },
    { id: 'prof_q11', texto: '11. Após está oficina, a imagem que eu tenho da Vale:', tipo: 'radio', opcoes: opcoesImagem },
    { id: 'prof_q12', texto: '12. De 0 a 10 qual a sua avaliação geral na Oficina:', tipo: 'escala', opcoes: opcoesNota },
    { id: 'prof_q13', texto: '13. Dê o sei Depoimento e/ou Sugestões:', tipo: 'textarea' }
];

const perguntasMineracaoAluno = [
    { id: 'alu_q1', texto: '1. Sua opinião sobre a Roda de Conversa (Domínio, Clareza e Objetividade:', tipo: 'radio', opcoes: opcoesOtimoBomRegularRuim },
    { id: 'alu_q2', texto: '2. A roda de Conversa e a Oficina foram capaz de gerar interesse e esclarecimento de dúvidas:', tipo: 'radio', opcoes: opcoesOtimoBomRegularRuim },
    { id: 'alu_q3', texto: '3. Qual a sua opinião sobre as missões robóticas?', tipo: 'radio', opcoes: opcoesOtimoBomRegularRuim },
    { id: 'alu_q4', texto: '4. Esta é a sua primeira experiência com a Vale?', tipo: 'radio', opcoes: opcoesSimNao },
    { id: 'alu_q5', texto: '5. A oficina trouxe novos conhecimentos sobre a mineração e sua importância em nossa vida diária?', tipo: 'radio', opcoes: opcoesSimNaoPartes },
    { id: 'alu_q6', texto: '6. A oficina esclareceu o funcionamento dos controles ambientais aplicados no processo produtivo?', tipo: 'radio', opcoes: opcoesConhecimento },
    { id: 'alu_q7', texto: '7. Você indicaria está atividade para um amigo (a)?', tipo: 'radio', opcoes: opcoesSimNao },
    { id: 'alu_q8', texto: '8. A carga horária foi suficiente?', tipo: 'radio', opcoes: opcoesSimNao },
    { id: 'alu_q9', texto: '9. Após está oficina, a imagem que eu tenho da Vale?', tipo: 'radio', opcoes: opcoesImagem },
    { id: 'alu_q10', texto: '10. Você entende que o conhecimento compartilhado nessa experiência pode agregar e  contribuir com o conteúdo de sala de aula? Como?', tipo: 'textarea' },
    { id: 'alu_q11', texto: '11. De 0 a 10 qual a sua avaliação geral na Oficina:', tipo: 'escala', opcoes: opcoesNota },
    { id: 'alu_q12', texto: '12. Dê o sei Depoimento e/ou Sugestões:', tipo: 'textarea' }
];
// A perguntas do PAEBM
const perguntasPaebmProfessor = [
    { id: 'prof_q1', texto: '1. Dos riscos abaixo, quais você acha mais prováveis de acontecer no seu município? Marque no máximo dois ( 2 ) riscos.', tipo: 'checkbox', max: 2, opcoes: opcoesCheck },
    { id: 'prof_q2', texto: '2. Com qual frequência sua escola recebe Projetos externos não formais? ', tipo: 'radio', opcoes: opcoesFARA },
    { id: 'prof_q3', texto: '3. O tema Segurança: riscos e emergências fazem parte da grade curricular da sua escola? ', tipo: 'radio', opcoes: opcoesSAN },
    { id: 'prof_q4', texto: '4. Você acha pertinente introduzir e debater esse tema na escola?', tipo: 'radio', opcoes: opcoesSimNao },
    { id: 'prof_q5', texto: '5. Justifique sua resposta.', tipo: 'textarea' },
    { id: 'prof_q6', texto: '6. Você considera as ferramentas lúdicas e participativas importantes para o aprendizado nessa faixa etária? ', tipo: 'radio', opcoes: opcoesMPN },
    { id: 'prof_q7', texto: '7. Justifique sua resposta.', tipo: 'textarea' },
    { id: 'prof_q8', texto: '8. Residindo em um município minerador, você já participou de Simulado de Emergência de Barragens de Mineração?', tipo: 'radio', opcoes: opcoesSimNao },
    { id: 'prof_q9', texto: '9. Na sua escola, como você avalia a organização do Projeto?', tipo: 'radio', opcoes: opcoesBOPD },
    { id: 'prof_q10', texto: '10. E o conteúdo?', tipo: 'radio', opcoes: opcoesOtimoBomRegularRuim },
    { id: 'prof_q11', texto: '11. A duração da oficina (2h) está adequada à dinâmica da escola e ao processo de ensino aprendizagem junto a alunos e professores?', tipo: 'radio', opcoes: opcoesEPP },
    { id: 'prof_q12', texto: '12. De modo geral, o Projeto foi importante para você e sua escola?', tipo: 'radio', opcoes: opcoesMPN },
    { id: 'prof_q13', texto: '13. Classifique seu grau de participação em relação a oficina que realizou?', tipo: 'escala', opcoes: opcoesNota },
    { id: 'prof_q14', texto: '14. Você teria sugestões e/ou críticas para enriquecer o Projeto? Conte para nós!', tipo: 'textarea' }
];

const perguntasPaebmAluno = [
    { id: 'alu_q1', texto: '1. Dos riscos abaixo, quais você acha mais prováveis de acontecer no seu município? Marque no máximo dois ( 2 ) riscos.', tipo: 'checkbox', max: 2, opcoes: opcoesCheck },
    { id: 'alu_q2', texto: '2. Quando você circula por seu município costuma observar as Placas de Sinalização?', tipo: 'radio', opcoes: opcoesSAN },
    { id: 'alu_q3', texto: '3. Antes deste Projeto, você sabia para que servem as Placas de Sinalização?', tipo: 'radio', opcoes: opcoesSMN},
    { id: 'alu_q4', texto: '4. Na sua escola, já conversaram com você sobre como evitar riscos e acidentes e como fazer no caso de emergências? ', tipo: 'radio', opcoes: opcoesSAN },
    { id: 'alu_q5', texto: '5. Antes desse Projeto, você tinha conhecimentos sobre o processo de mineração?', tipo: 'radio', opcoes: opcoesSMN },
    { id: 'alu_q6', texto: '6. Você mora em um município minerador. Já conhecia os Simulado de Emergência de Barragens de Mineração? ', tipo: 'radio', opcoes: opcoesSJN },
    { id: 'alu_q7', texto: '7. Já participou de algum Simulado?', tipo: 'radio', opcoes: opcoesSimNao },
    { id: 'alu_q8', texto: '8. Se sim, o que achou? Se não, por quê?', tipo: 'textarea' },
    { id: 'alu_q9', texto: '9. De modo geral, o Projeto de Robótica foi importante para você?', tipo: 'radio', opcoes: opcoesMPN },
    { id: 'alu_q10', texto: '10. Justifique sua resposta', tipo: 'textarea' },
    { id: 'alu_q11', texto: '11. Conte para nós o que mais gostou no Projeto:', tipo: 'textarea' },
    { id: 'alu_q12', texto: '12. Você tem sugestões para melhoria do Projeto Dona Sirene? Quais?', tipo: 'textarea' },
    { id: 'alu_q13', texto: '13. Em qual ano que você estuda?', tipo: 'radio', opcoes: opcoesAno },
    { id: 'alu_q14', texto: '14. Classifique seu grau de participação em relação a oficina que realizou?', tipo: 'escala', opcoes: opcoesNota }
];

// A perguntas do Sustentabilidade
const perguntasSustProfessor = [
    { id: 'prof_q1', texto: '1. Roda de Conversa (domínio, clareza e objetividade):', tipo: 'radio', opcoes: opcoesOtimoBomRegularRuim },
    { id: 'prof_q2', texto: '2. Capacidade de gerar interesse e esclarecimento de dúvidas:', tipo: 'radio', opcoes: opcoesOtimoBomRegularRuim },
    { id: 'prof_q3', texto: '3. Didática nos desafios para desenvolver a oficina:', tipo: 'radio', opcoes: opcoesOtimoBomRegularRuim },
    { id: 'prof_q4', texto: '4. É a primeira experiência com a Vale?', tipo: 'radio', opcoes: opcoesSimNao },
    { id: 'prof_q5', texto: '5. A oficina trouxe novos conhecimentos sobre a mineração e sua importância em nossa vida diária?', tipo: 'radio', opcoes: opcoesSimNaoPartes },
    { id: 'prof_q6', texto: '6. A iniciativa contribui e complementa a proposta pedagógica da escola?', tipo: 'radio', opcoes: opcoesSimNaoPartes },
    { id: 'prof_q7', texto: '7. Você acredita que essa experiência contribuiu de alguma forma para o desenvolvimento do aluno? ', tipo: 'radio', opcoes: opcoesSimNao },
    { id: 'prof_q8', texto: '8. Você indicaria a oficina para outra escola/professor? ', tipo: 'radio', opcoes: opcoesSimNao },
    { id: 'prof_q9', texto: '9. A carga horária foi suficiente?', tipo: 'radio', opcoes: opcoesSimNao },
    { id: 'prof_q10', texto: '10. A carga horária foi suficiente?', tipo: 'radio', opcoes: opcoesSimNao },
    { id: 'prof_q11', texto: '11. A oficina contribuiu com novos conhecimentos sobre o tema Sustentabilidade?', tipo: 'radio', opcoes: opcoesConhecimento },
    { id: 'prof_q12', texto: '12. Após está oficina, a imagem que eu tenho da Vale:', tipo: 'radio', opcoes: opcoesImagem },
    { id: 'prof_q13', texto: '13. De 0 a 10 qual a sua avaliação geral na Oficina:', tipo: 'escala', opcoes: opcoesNota },
    { id: 'prof_q14', texto: '14. Depoimento e Sugestões', tipo: 'textarea' }
];

const perguntasSustAluno = [
    { id: 'alu_q1', texto: '1. Roda de Conversa (domínio, clareza e objetividade):', tipo: 'radio', opcoes: opcoesOtimoBomRegularRuim },
    { id: 'alu_q2', texto: '2. Capacidade de gerar interesse e esclarecimento de dúvidas:', tipo: 'radio', opcoes: opcoesOtimoBomRegularRuim },
    { id: 'alu_q3', texto: '3. Desafios para desenvolver as oficinas:', tipo: 'radio', opcoes: opcoesOtimoBomRegularRuim},
    { id: 'alu_q4', texto: '4. É a primeira experiência com a Vale?', tipo: 'radio', opcoes: opcoesSimNao },
    { id: 'alu_q5', texto: '5. A oficina trouxe novos conhecimentos sobre a mineração e sua importância em nossa vida diária?', tipo: 'radio', opcoes: opcoesSimNao },
    { id: 'alu_q6', texto: '6. A oficina contribuiu para novos conhecimentos sobre o tema Sustentabilidade?', tipo: 'radio', opcoes: opcoesConhecimento },
    { id: 'alu_q7', texto: '7. Você indicaria está atividade para um amigo (a)?', tipo: 'radio', opcoes: opcoesSimNao },
    { id: 'alu_q8', texto: '8. A carga horária foi suficiente?', tipo: 'radio', opcoes: opcoesSimNao },
    { id: 'alu_q9', texto: '9. Após está oficina, a imagem que eu tenho da Vale?', tipo: 'radio', opcoes: opcoesImagem },
    { id: 'alu_q10', texto: '10. De 0 a 10 qual a sua avaliação geral na Oficina?', tipo: 'escala', opcoes: opcoesNota },
    { id: 'alu_q11', texto: '11. Depoimento e Sugestões:', tipo: 'textarea' }

];


// O SEGREDO: Configuração das Regionais
const bancosDeDados = {
    pelotizacao: { 
        titulo: "Robótica - Pelotização", 
        regional: "Vitória", // Regional Fixa
        perguntasProfessor: perguntasPelotizacaoProfessor, 
        perguntasAluno: perguntasPelotizacaoAluno 
    },
    logistica: { 
        titulo: "Robótica - Logística", 
        regional: "Governador Valadares", // Regional Fixa
        perguntasProfessor: perguntasLogisticaProfessor, // Insira suas perguntas aqui no futuro
        perguntasAluno: perguntasLogisticaAluno 
    },
    mineracao: { 
        titulo: "Robótica - Mineração", 
        regional: "Itabira", // Regional Fixa
        perguntasProfessor: perguntasMineracaoProfessor, 
        perguntasAluno: perguntasMineracaoAluno
    },
    paebm: { 
        titulo: "Robótica/Maker - PAEBM", 
        regional: "Itabira", // Regional Fixa
        perguntasProfessor: perguntasPaebmProfessor, 
        perguntasAluno: perguntasPaebmAluno
    },
    sustentabilidade: { 
        titulo: "StoryStarter - Sustentabilidade", 
        regional: ["Vitória", "Governador Valadares", "Itabira"], // Múltiplas Regionais (Array)
        perguntasProfessor: perguntasSustProfessor, 
        perguntasAluno: perguntasSustAluno
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const oficinaId = urlParams.get('oficina');
    const configOficina = bancosDeDados[oficinaId];

    if (!configOficina) {
        alert("Oficina não encontrada.");
        window.location.href = 'index.html';
        return;
    }

    document.getElementById('titulo-oficina').textContent = configOficina.titulo;
    
    window.regionalSelecionada = "";

    if (Array.isArray(configOficina.regional)) {
        const divContainer = document.getElementById('seletor-regional-container');
        const divOpcoes = document.getElementById('opcoes-regional');
        
        configOficina.regional.forEach(reg => {
            divOpcoes.innerHTML += `
                <label class="profile-radio">
                    <input type="radio" name="regional" value="${reg}">
                    <span class="radio-custom"></span>
                    ${reg}
                </label>`;
        });
        
        divContainer.classList.remove('hidden');

        setTimeout(() => {
            document.querySelectorAll('input[name="regional"]').forEach(rad => {
                rad.addEventListener('change', (e) => {
                    window.regionalSelecionada = e.target.value;
                });
            });
        }, 100);

    } else {
        window.regionalSelecionada = configOficina.regional;
    }

    const radiosPerfil = document.querySelectorAll('input[name="perfil"]');
    const formAvaliacao = document.getElementById('form-avaliacao');
    const areaPerguntas = document.getElementById('area-perguntas');
    const msgErro = document.getElementById('msg-erro');
    const btnEnviar = document.getElementById('btn-enviar');

    let perguntasAtuais = [];

    radiosPerfil.forEach(radio => {
        radio.addEventListener('change', () => {
            const perfilSelecionado = document.querySelector('input[name="perfil"]:checked').value;
            areaPerguntas.innerHTML = '';
            msgErro.classList.add('hidden');

            perguntasAtuais = perfilSelecionado === 'Professor' ? configOficina.perguntasProfessor : configOficina.perguntasAluno;

            if (perguntasAtuais.length === 0) {
                areaPerguntas.innerHTML = '<p class="info-text">Formulário em construção para esta oficina.</p>';
                formAvaliacao.classList.remove('hidden');
                btnEnviar.classList.add('hidden');
                return;
            } else {
                btnEnviar.classList.remove('hidden');
            }

            perguntasAtuais.forEach(item => {
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
                        optionsContainer.className = item.tipo === 'escala' ? 'escala-container' : 'radio-container';

                        item.opcoes.forEach(opcao => {
                            const labelOpt = document.createElement('label');
                            labelOpt.className = item.tipo === 'escala' ? 'escala-option' : 'radio-option';

                            const inputRadio = document.createElement('input');
                            inputRadio.type = 'radio';
                            inputRadio.name = item.id;
                            inputRadio.value = opcao;

                            inputRadio.addEventListener('change', () => group.classList.remove('error-highlight'));

                            labelOpt.appendChild(inputRadio);
                            const spanText = document.createElement('span');
                            spanText.textContent = opcao;
                            labelOpt.appendChild(spanText);

                            optionsContainer.appendChild(labelOpt);
                        });
                        
                        group.appendChild(optionsContainer);

                    // NOVO BLOCO: Lógica para as Múltiplas Escolhas (Checkbox)
                    } else if (item.tipo === 'checkbox') {
                        const optionsContainer = document.createElement('div');
                        optionsContainer.className = 'checkbox-container';

                        item.opcoes.forEach(opcao => {
                            const labelOpt = document.createElement('label');
                            labelOpt.className = 'checkbox-option';

                            const inputCheckbox = document.createElement('input');
                            inputCheckbox.type = 'checkbox';
                            inputCheckbox.name = item.id;
                            inputCheckbox.value = opcao;

                            inputCheckbox.addEventListener('change', () => {
                                group.classList.remove('error-highlight');
                                
                                // Verifica se tem limite de escolhas
                                if (item.max) {
                                    const totalMarcados = document.querySelectorAll(`input[name="${item.id}"]:checked`).length;
                                    if (totalMarcados > item.max) {
                                        inputCheckbox.checked = false; // Desmarca automaticamente
                                        alert(`Você só pode selecionar no máximo ${item.max} opções nesta pergunta.`);
                                    }
                                }
                            });

                            labelOpt.appendChild(inputCheckbox);
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
                            if(field.value.trim() !== '') group.classList.remove('error-highlight');
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

        if (Array.isArray(configOficina.regional) && window.regionalSelecionada === "") {
            alert("Por favor, selecione em qual Regional esta oficina ocorreu antes de enviar.");
            return;
        }
        
        const perfilSelecionado = document.querySelector('input[name="perfil"]:checked');
        if (!perfilSelecionado) return;
        const perfil = perfilSelecionado.value;
        
        let isValid = true;
        const respostas = [];

        perguntasAtuais.forEach(item => {
            if (item.tipo !== 'info') {
                const group = document.getElementById(`group_${item.id}`);
                let valor = '';
                
                if (item.tipo === 'radio' || item.tipo === 'escala') {
                    const checkedOption = document.querySelector(`input[name="${item.id}"]:checked`);
                    if (checkedOption) valor = checkedOption.value;
                
                // NOVO BLOCO: Captura as respostas dos Checkboxes
                } else if (item.tipo === 'checkbox') {
                    const checkedOptions = document.querySelectorAll(`input[name="${item.id}"]:checked`);
                    if (checkedOptions.length > 0) {
                        // Junta as opções selecionadas usando uma vírgula e um espaço
                        valor = Array.from(checkedOptions).map(cb => cb.value).join(', ');
                    }
                
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
                mode: 'no-cors',
                headers: { 'Content-Type': 'text/plain' },
                body: JSON.stringify({ 
                    oficina: configOficina.titulo, 
                    regional: window.regionalSelecionada, 
                    perfil: perfil, 
                    respostas: respostas 
                })
            });

            document.getElementById('form-avaliacao').classList.add('hidden');
            document.getElementById('seletor-perfil-container').classList.add('hidden');
            
            const seletorRegional = document.getElementById('seletor-regional-container');
            if (seletorRegional) seletorRegional.classList.add('hidden');
            
            document.querySelector('.nav-back').classList.add('hidden');
            document.getElementById('mensagem-sucesso').classList.remove('hidden');
            
        } catch (error) {
            console.error('Erro:', error);
            alert('Tivemos um problema de conexão. Tente novamente.');
        } finally {
            btnEnviar.disabled = false;
            btnEnviar.textContent = 'Enviar Respostas';
        }
    });
});