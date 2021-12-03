import { Conta } from './Conta.js';

export class ContaCorrente extends Conta {
    constructor(saldoInicial) {
        super();
        this.saldo = saldoInicial;
    }
}
