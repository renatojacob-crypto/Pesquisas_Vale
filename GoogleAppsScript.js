/* CÓDIGO PARA O GOOGLE APPS SCRIPT (Aba Extensões > Apps Script na sua Planilha)
   Este script substitui a necessidade de um servidor Python, atuando como API nativa.
*/

function doPost(e) {
  try {
    // Captura e decodifica o payload enviado pelo formulário HTML5
    var jsonString = e.postData.contents;
    var data = JSON.parse(jsonString);
    
    var perfil = data.perfil;       // 'Professor' ou 'Aluno'
    var respostas = data.respostas; // Array contendo as respostas enviadas
    
    // Obtém a planilha ativa e a aba correspondente ao perfil selecionado
    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = spreadsheet.getSheetByName(perfil === 'Professor' ? 'Professores' : 'Alunos');
    
    if (!sheet) {
      return ContentService.createTextOutput(JSON.stringify({
        "status": "error", 
        "message": "Aba correspondente não encontrada na planilha ativa."
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    // Cria a linha de dados incluindo a data/hora do registro (Timestamp) no início
    var novaLinha = [new Date()];
    novaLinha = novaLinha.concat(respostas);
    
    // Insere os dados na última linha disponível da aba correspondente
    sheet.appendRow(novaLinha);
    
    // Retorna uma resposta JSON de sucesso com cabeçalhos de liberação CORS implicitos
    return ContentService.createTextOutput(JSON.stringify({
      "status": "success", 
      "message": "Dados adicionados com sucesso!"
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch(err) {
    return ContentService.createTextOutput(JSON.stringify({
      "status": "error", 
      "message": err.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Resposta básica para requisições do tipo GET (opcional para testes)
function doGet(e) {
  return ContentService.createTextOutput("API de Coleta Ativa - Oficinas Vale funcionando corretamente.");
}
