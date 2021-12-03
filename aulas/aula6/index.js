import { ContaCorrente } from './ContaCorrente.js';
import { ContaPoupanca } from './ContaPoupanca.js';

console.log('Banco Cap');

const cc1 = new ContaCorrente(15);
cc1.agencia = "111";
cc1.numero = 105;
cc1.depositar(50);
console.log(cc1);

const cp1 = new ContaPoupanca();
cp1.numero = 298;
cp1.depositar(259);
console.log(cp1);