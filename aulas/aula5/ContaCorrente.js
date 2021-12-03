class ContaCorrente {
    numero;
    saldo;
    agencia;
    cliente;
}

const conta1 = new ContaCorrente();
conta1.numero = '15234';
conta1.saldo = 234.45;
conta1.agencia = "123-4";
conta1.cliente = "Maria";

console.log(conta1);