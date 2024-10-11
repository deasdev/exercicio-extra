let numeros = [1, 5, 7, 9];

let numeroParaAdicionar = 3; 

if (!numeros.includes(numeroParaAdicionar)) {
    numeros.push(numeroParaAdicionar);
    console.log(`Numero ${numeroParaAdicionar} adicionado com sucesso!`);
} else {
    console.log(`Numero ${numeroParaAdicionar} já está na lista!`);
}
console.log("Lista de numeros atual:", numeros);