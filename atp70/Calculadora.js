function soma(n1, n2) {
    return n1 + n2;
}

function subtracao(n1, n2) {
    return n1 - n2;
}

function multiplicacao(n1, n2) {
    return n1 * n2;
}

function divisao(n1, n2) {
    if (n2 != 0) {
        return n1/n2;
    }
}

const a = 10;
const b = 5;

console.log(a + " + " + b + " = " + soma(a, b));
console.log(a + " - " + b + " = " + subtracao(a, b));
console.log(a + " * " + b + " = " + multiplicacao(a, b));
console.log(a + " / " + b + " = " + divisao(a, b));
