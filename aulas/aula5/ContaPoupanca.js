class ContaPoupanca {
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

const conta1 = new ContaPoupanca();
conta1.numero = '15234';
conta1.saldo = 234.45;
conta1.agencia = "123-4";
conta1.cliente = "Maria";

console.log(conta1);
conta1.depositar(100.99);
console.log(conta1);
conta1.saque(300);
console.log(conta1);
