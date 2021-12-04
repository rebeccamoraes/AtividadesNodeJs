import PessoaFisica from './model/PessoaFisica.js';
import PessoaJuridica from './model/PessoaJuridica.js';

const pf = new PessoaFisica("123.456.789-10");
pf.id = 1;
pf.nome = "Rebecca";

console.log(`Id: ${pf.id}\nNome: ${pf.nome}\nCPF: ${pf.cpf}`);

const pj = new PessoaJuridica("11.111.222/0001-00");
pj.nome = "Capgemini";
pj.id = 13;

console.log(`Id: ${pj.id}\nNome: ${pj.nome}\nCNPJ: ${pj.cnpj}`);