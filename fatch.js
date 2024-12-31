// Função assíncrona para buscar dados
async function fetchData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // API de exemplo
  
    try {
      // Fazendo a requisição
      const response = await fetch(apiUrl);
  
      // Verificando se a resposta foi bem-sucedida
      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
      }
  
      // Convertendo a resposta para JSON
      const data = await response.json();
  
      // Exibindo os dados
      console.log(data);
    } catch (error) {
      // Lidando com erros
      console.error('Erro ao buscar os dados:', error);
    }
  }
  
  // Chamando a função
  fetchData();
  