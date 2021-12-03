import { Router } from Express;
import ContaRepository from "../repository/ContaRepository.js";
import Conta from "../model/Conta.js";

const ContaApi = Router();

const repository = new ContaRepository();

ContaApi.get('/', async(req, resp) => {
    const lista = await repository.findAll();
    resp.send(lista);
});

ContaApi.post('/', async(req, resp) => {
    let {numero, agencia, saldo} = req.body;
    const conta = new Conta(numero, agencia, saldo);
    const retorno = await repository.create(conta);
    resp.send(retorno);
});

ContaApi.put('/:id', async(req, resp) => {
    const id = req.params.id;
    let {numero, agencia, saldo} = req.body;
    const conta = new Conta(numero, agencia, saldo, id);
    const retorno = await repository.update(conta);
    resp.send(retorno);
});

ContaApi.delete('/:id', async (req, resp) => {
    const id = req.params.id;
    const retorno = await repository.delete(id);
    resp.send(retorno);
});

export default ContaApi;