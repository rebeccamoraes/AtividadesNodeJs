import { Conta } from './Conta';

export class ContaCorrente extends Conta {
    constructor(saldoInicial: number) {
        super();
        this._saldo = saldoInicial;
    }
}
