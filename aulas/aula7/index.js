import Conta from './model/Conta.js';
// import ContaRepository from './repository/ContaRepository';

console.log("Banco");

const conta1 = new Conta();
conta1.numero = 12356-7;
conta1.agencia = 1234;
conta1.saldo = 789,10;

console.log(conta1.numero, conta1.agencia, conta1.saldo);

const repository = new ContaRepository();
const lista = repository.findAll();
console.log(lista);