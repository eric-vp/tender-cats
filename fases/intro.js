const prompt = require('prompt-sync')();
const lutar = require('../lutar/lutar');
const Vilao = require('../personagens/vilao');

const gatoGrama = new Vilao(100, 20, "grama", "Gato de Grama");

module.exports = (gato) => {
    prompt(`Próxima fase: `);
    console.log(`\n--Introdução--\n`);
    
    console.log(`Para seu azar, ${gato.nome} se depara com ${gatoGrama.nome}.`);
    console.log(`${gatoGrama.nome} é um gato verde e mal-encarado que não está afim de nos deixar passar pelo parque.`);
    console.log(`"Você deve ter muita coragem para invadir meu território.", falou ${gatoGrama.nome}.`);
    console.log(`"Estou apenas de passagem.", disse ${gato.nome}.`);
    console.log(`Mas ${gatoGrama.nome} não quer saber os motivos e parte para o ataque.\n`);
    prompt();

    let duelo = lutar(gato, gatoGrama);
    if (duelo) {
        console.log(`Você derrotou ${gatoGrama.nome}.\n`);
        console.log(`Após derrotar ${gatoGrama.nome} você segue seu caminho pela noite até encontrar um lugar seguro para dormir.`);
        return true;
    } else {
        console.log(`${gatoGrama.nome} derrotou você.`);
        return false;
    }
}