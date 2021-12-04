import Cliente from "./model/Cliente.js";
import ClienteRepository from "./repository/ClienteRepository.js";

const repository = new ClienteRepository();

const cliente = new Cliente();
cliente.id = 2;
cliente.nome = "Rebecca";
console.log(cliente.nome);

// const result = await repository.create(cliente);
const result = await repository.update(cliente);
console.log(result);

const result2 = await repository.delete(1);

const clientes = await repository.findAll()
console.log(clientes);
