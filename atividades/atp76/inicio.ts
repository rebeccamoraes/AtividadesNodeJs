import { Cliente } from "./src/model/Cliente";

const cliente = new Cliente();
cliente.id = 1;
cliente.nome = 'Rebecca';
cliente.cpf = '111.222.333.44';

console.log(cliente);