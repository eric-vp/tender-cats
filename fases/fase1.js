const prompt = require('prompt-sync')();
const lutar = require('../lutar/lutar');
const Vilao = require('../personagens/vilao');

const gatoFogo = new Vilao(120, 25, "fogo", "Gato de Fogo");

module.exports = (gato) => {
    prompt(`Próxima fase: `);
    console.log(`\n--Fase 1--\n`);

    console.log(`${gato.nome} acorda de seu sono junto com os primeiros raios de sol.`);
    console.log(`Mesmo pela manhã, a temperatura é muito alta nesse dia de verão.`);
    console.log(`Apenas um gato parecia não se incomodar com um clima tão quente: ${gatoFogo.nome}.`);
    console.log(`"Ei, eu te conheço, você é ${gato.nome}. Você está me devendo uma lata de atum!", exclamou o ${gatoFogo.nome}.`);
    console.log(`Parece que ${gatoFogo.nome} quer cobrar uma dívida antiga de ${gato.nome} e parte para cima.\n`);
    prompt();

    let duelo = lutar(gato, gatoFogo);
    if (duelo) {
        console.log(`Você derrotou ${gatoFogo.nome}.\n`);
        console.log(`Após derrotar ${gatoFogo.nome} você decide sair do parque, pois parece ser um lugar ainda mais perigoso que o centro da cidade.`);
        return true;
    } else {
        console.log(`${gatoFogo.nome} derrotou você.`);
        return false;
    }
}
