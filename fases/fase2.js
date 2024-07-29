const prompt = require('prompt-sync')();
const lutar = require('../lutar/lutar');
const Vilao = require('../personagens/vilao');

const gatoAgua = new Vilao(140, 30, "água", "Gato da Chuva");

module.exports = (gato) => {
    prompt(`Próxima fase: `);
    console.log(`\n--Fase 2--\n`);
    
    console.log(`Com o calor intenso e o clima úmido, grandes nuvens se formaram no céu.`);
    console.log(`Não demorou muito para que uma forte chuva desabasse sobre ${gato.nome}.`);
    console.log(`Em uma construção abandonada, ${gato.nome} encontrou um abrigo para não se molhar.`);
    console.log(`"Você não vai escapar desse banho!", alguém gritou ao longe.`);
    console.log(`Era o ${gatoAgua.nome}, um outro rival de ${gato.nome}.`);
    prompt();

    let duelo = lutar(gato, gatoAgua);
    if (duelo) {
        console.log(`Você derrotou ${gatoAgua.nome}.\n`);
        console.log(`Após derrotar ${gatoAgua.nome} você consegue passar mais um dia sem banho.`);
        return true;
    } else {
        console.log(`${gatoAgua.nome} derrotou você.`);
        return false;
    }
}
