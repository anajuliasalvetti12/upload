// Seleciona os elementos do DOM (Document Object Model) que serão manipulados
let seletorArquivos = document.getElementById("seletor-arquivos");
let listaDeArquivos = document.getElementById("lista-de-arquivos");
let numDeArquivos = document.getElementById("num-de-arquivos");

// Adiciona um ouvinte de eventos para o input de arquivos
// Quando os arquivos são selecionados, a função abaixo é executada
seletorArquivos.addEventListener("change", () => {
  // Limpa a lista de arquivos exibida anteriormente
  listaDeArquivos.innerHTML = "";
  // Atualiza o texto para mostrar o número de arquivos selecionados
  numDeArquivos.textContent = `${seletorArquivos.files.length} Arquivos Selecionados`;

  // Itera sobre a lista de arquivos selecionados
  for (let arquivo of seletorArquivos.files) {
    // Cria um novo item de lista (li) para cada arquivo
    let itemLista = document.createElement("li");

    // Obtém o nome do arquivo
    let nomeArquivo = arquivo.name;
    // Converte o tamanho do arquivo de bytes para kilobytes (KB) e formata com uma casa decimal
    let tamanhoArquivo = (arquivo.size / 1024).toFixed(1);
    // Define o tamanho formatado inicialmente em KB
    let tamanhoFormatado = `${tamanhoArquivo} KB`;
    
    // Se o tamanho do arquivo for maior ou igual a 1024 KB (ou seja, 1 MB), converte para megabytes (MB)
    if (tamanhoArquivo >= 1024) {
      tamanhoFormatado = `${(tamanhoArquivo / 1024).toFixed(1)} MB`;
    }

    // Define o conteúdo HTML do item de lista com o nome e tamanho do arquivo
    itemLista.innerHTML = `<p>${nomeArquivo}</p><p>${tamanhoFormatado}</p>`;
    
    // Adiciona o item de lista à lista de arquivos no DOM
    listaDeArquivos.appendChild(itemLista);
  }
});
