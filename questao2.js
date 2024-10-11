function ehPrimo(numero) {
    if (numero <= 1) return false; 
    if (numero % 2 === 0 || numero % 3 === 0) return false; 
  
    let i = 5;
    while (i * i <= numero) {
      if (numero % i === 0 || numero % (i + 2) === 0) return false;
      i += 6; 
    }
    return true;
  }
  
function criarTabelaPrimos() {
    const tabela = document.getElementById('tabelaPrimos');
 
    let linha = tabela.insertRow();
    let celula;
  
    for (let i = 0; i <= 200; i++) {
      if (i % 20 === 0) {
        linha = tabela.insertRow();
      }
  
      celula = linha.insertCell();
      celula.textContent = i;
  
      if (ehPrimo(i)) {
        celula.classList.add('primo'); 
      }
    }
  }
  
  criarTabelaPrimos(); 
 