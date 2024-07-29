const prompt = require('prompt-sync')();
const lutar = require('../lutar/lutar');
const Vilao = require('../personagens/vilao');

const gatoEletrico = new Vilao(160, 35, "eletricidade", "Gato Elétrico");

module.exports = (gato) => {
    prompt(`Próxima fase: `);
    console.log(`\n--Fase 3--\n`);

    console.log(`O tempo passa e a chuva se intensifica.`);
    console.log(`O que antes era uma chuva agradável e refrescante se torna uma tempestade com raios e trovões.`);
    console.log(`E junto com os relâmpagos, veio também ${gatoEletrico.nome}.`);
    console.log(`Não está sendo um dia fácil para ${gato.nome}, pois este gato também quer brigar.`);
    console.log(`"Você derrotou meu irmão, Gato da Chuva, mas não vai me derrotar. Prepare-se para o duelo!", disse ${gatoEletrico.nome}.`);
    prompt();

    let duelo = lutar(gato, gatoEletrico);
    if (duelo) {
        console.log(`Você derrotou ${gatoEletrico.nome}.\n`);
        console.log(`Após derrotar ${gatoEletrico.nome} a tempestade se acalma. ${gato.nome} aproveita para escapar do local.`);
        return true;
    } else {
        console.log(`${gatoEletrico.nome} derrotou você.`);
        return false;
    }
}
