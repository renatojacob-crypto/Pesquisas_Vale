# Sistema de Avaliação - Oficinas Vale

Este repositório contém uma aplicação web serverless otimizada para a captação de feedbacks de Professores e Alunos participantes das oficinas.

## Estrutura de Arquivos

- `index.html`: Estrutura semântica limpa do formulário dinâmico.
- `style.css`: Estilização modular moderna com variáveis CSS e design responsivo.
- `script.js`: Lógica de controle do formulário, manipulação do DOM e envio via Fetch API.
- `GoogleAppsScript.js`: Código a ser inserido no editor do Google Sheets para atuar como o back-end (API).

## Como Configurar

1. Abra a sua planilha do Google Sheets onde as respostas serão armazenadas.
2. Crie duas abas nomeadas exatamente como: `Professores` e `Alunos`.
3. No menu superior da planilha, acesse **Extensões** > **Apps Script**.
4. Apague qualquer código existente e cole o conteúdo do arquivo `GoogleAppsScript.js`.
5. Clique em **Implantar** (Deploy) > **Nova implantação**.
6. Selecione o tipo **Configuração** como **App da Web** (Web App).
7. Altere "Quem pode acessar" para **Qualquer pessoa** (Anyone) e clique em Implantar.
8. Copie a URL gerada pelo Google.
9. Abra o arquivo `script.js` local e substitua a constante `URL_API_GOOGLE` pela URL copiada.
10. Suba os arquivos (`index.html`, `style.css`, `script.js`) para o seu repositório do GitHub e ative o GitHub Pages nas configurações do repositório para publicar o formulário online.
