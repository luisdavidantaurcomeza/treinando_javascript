alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 29;

// aqui está errado, eu preciso alterar a informação do console pois a pessoa pode ver o numero pelo inspetor
console.log(numeroSecreto);
let chute = prompt ('Escolha um número entre um e trinta: ');


// se o chute for igual ao numero secreto quero executar algo
if (numeroSecreto == chute) {
    alert(`Isso ai! Você descobriu o número secreto, que é ${numeroSecreto}`);

} else {
    alert ('Você errou :(');
}



