const fs = require('fs');
const path = require('path');

const pasta = 'C:\\Users\\AG Surveyors\\Desktop\\Nova pasta';

function extrairNumerosDoArquivo(arquivo) {
  try {
    const conteudo = fs.readFileSync(arquivo, 'utf-8');
    const json = JSON.parse(conteudo);
    const numeroNF = json.numero_nf;

    return numeroNF;
  } catch (error) {
    console.error(`Erro ao ler o arquivo ${arquivo}: ${error.message}`);
    return null;
  }
}

function extrairNumerosDaPasta(pasta) {
  const arquivos = fs.readdirSync(pasta);

  const numeros = arquivos.map((arquivo) => {
    const caminhoCompleto = path.join(pasta, arquivo);
    return extrairNumerosDoArquivo(caminhoCompleto);
  });

  return numeros.filter((numero) => numero !== null);
}

const numeros = extrairNumerosDaPasta(pasta);
console.log('Números extraídos:', numeros);
