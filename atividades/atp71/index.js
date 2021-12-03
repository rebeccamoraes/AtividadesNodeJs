import Categoria from './model/Categoria.js';
import Produto from './model/Produto.js';

const categoria = new Categoria();
categoria.id = 1;
categoria.nome = "Bebidas quentes";
categoria.descricao = "Bebidas para consumir em temperaturas altas.";

console.log(categoria);

const produto = new Produto();
produto.id = 1;
produto.nome = "Café";
produto.preco = 4.99;
produto.categoria = categoria;

console.log(produto);
