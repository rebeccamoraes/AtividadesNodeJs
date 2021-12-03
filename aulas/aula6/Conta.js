export class Conta {
    numero;
    saldo;
    agencia;
    cliente;

    depositar(valor) {
        this.saldo += valor;
        return 'deposito realizado';
    }

    saque(valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            return 'saque realizado';
        }
        return 'saldo insuficiente';
    }
}
