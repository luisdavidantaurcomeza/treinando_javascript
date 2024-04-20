
alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 29;

// aqui está errado, eu preciso alterar a informação do console pois a pessoa pode ver o numero pelo inspetor
console.log(numeroSecreto);
let chute; // comentei o que estava declarado aqui = prompt ('Escolha um número entre um e trinta: ');

//enquanto o chute não for igual ao numero secreto
let tentativas=1;


while (chute!=numeroSecreto) {
        chute = prompt ('Escolha um número entre um e trinta: ');
       
    // se o chute for igual ao numero secreto quero executar algo
    if (numeroSecreto == chute) {
        //alert(`Isso ai! Você descobriu o número secreto, que é ${numeroSecreto} com ${tentativas} tentativas`);
        //quero que o while não se repita mais, ou seja, pare.
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que o ${chute}`);
        } else {
            alert (`O número secreto é maior que ${chute}`);    
                //alert ('Você errou :(');

        }

        //várias tentativas
        tentativas++;

    
    }
    // coloquei fora do while:
    //agora vou fazer um if else para melhorar, colocar no singular e no plural 
    //criar uma variavel com o operador ternario
    
    let palavraTentativa = tentativa > 1 ? 'tentativas':'tentativa';
    alert(`Isso ai! Você descobriu o número secreto, que é ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

    
    
    /* if(tentativas>1){
    alert(`Isso ai! Você descobriu o número secreto, que é ${numeroSecreto} com ${tentativas} tentativas`);
    } else{
        alert(`Isso ai! Você descobriu o número secreto, que é ${numeroSecreto} com ${tentativas} tentativa`);
    }
 */
    
}


