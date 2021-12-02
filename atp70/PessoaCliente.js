class Pessoa {
    nome;
    idade;
}

class Cliente {
    nome;
    endereco;
    cpf;
}

const pessoa = new Pessoa();
pessoa.nome = "Alan Turing";
pessoa.idade = 109;

const cliente = new Cliente();
cliente.nome = "Maykon";
cliente.endereco = "Rua Java, 123";
cliente.cpf = "111.222.333-44";

console.log(pessoa);
console.log(cliente);