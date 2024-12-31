const apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // URL da API

// Fazendo a requisição
fetch(apiUrl)
  .then(response => {
    // Verificando se a resposta foi bem-sucedida
    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }
    // Convertendo a resposta para JSON
    return response.json();
  })
  .then(data => {
    // Exibindo os dados no console
    console.log(data);
  })
  .catch(error => {
    // Lidando com erros
    console.error('Erro ao buscar os dados:', error);
  });
