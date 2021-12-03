import { ContaCorrente } from './ContaCorrente';
import { ContaPoupanca } from './ContaPoupanca';

console.log('Banco Cap');

const cc1 = new ContaCorrente(15);
cc1.agencia = "111";
cc1.numero = "105";
cc1.depositar(50);
console.log(cc1);

const lista = new Array<ContaCorrente>();
lista.push(cc1);
console.log(lista);

const cp1 = new ContaPoupanca();
cp1.numero = "298";
cp1.depositar(259);
console.log(cp1);