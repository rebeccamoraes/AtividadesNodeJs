import Pessoa from './Pessoa.js';

class PessoaFisica extends Pessoa {
    #cpf;

    constructor(cpf) {
        this.#cpf = cpf;
    }

    get cpf() {
        return this.#cpf;
    }
    set cpf(cpf) {
        this.#cpf = cpf;
    }
}