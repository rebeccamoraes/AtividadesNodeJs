function imprimirNome() {
    console.log("Nome qualquer");
}

function imprimirNomeEspecifico(nome) {
    console.log("Nome: " + nome);
}

function imprimirNomeEspecificoComInterpolacao(nome, sobrenome) {
    console.log(`Nome: ${nome} ${sobrenome}`);
}

imprimirNome();
imprimirNomeEspecifico('Inês');
imprimirNomeEspecificoComInterpolacao("Inês", "Brasil");