
const tarefas = ["Estudar JavaScript", "Fazer exercicios", "Ler um livro"];

function listarTarefas() {
  for (let i = 0; i < tarefas.length; i++) {
    console.log(`${i + 1}. ${tarefas[i]}`);
  }
}

function adicionarTarefa(novaTarefa) {
  tarefas.push(novaTarefa);
  console.log("Tarefa adicionada com sucesso!");
  listarTarefas();
}

function removerTarefa(indice) {
  tarefas.splice(indice, 1);
  console.log("Tarefa removida com sucesso!");
  listarTarefas();
}
console.log("Lista de tarefas inicial:");
listarTarefas();

console.log("\nAdicionando uma nova tarefa: 'danca'");
adicionarTarefa("danca");

console.log("\nRemovendo a primeira tarefa:");
removerTarefa(0);