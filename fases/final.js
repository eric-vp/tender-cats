const prompt = require('prompt-sync')();

module.exports = (gato) => {
    prompt(`Próxima fase: `);
    console.log(`\n--Final--\n`);

    console.log(`${gato.nome} derrotou todos seu oponentes, mas isso não significa que sua jornada acabou.`);
    console.log(`Tem muito caminho pela frente.`);
    console.log(`${gato.nome} ficou mais forte, e sabe se defender muito bem.`);
    console.log(`Porém ainda está a procura de um novo lar.`);
    console.log(`Pois a vida na cidade não é facil para os gatos de rua.`);
    prompt();
    console.log(`\n-----FIM-----\n`);
    console.log(`Obrigado por jogar Tender Cats`);
    console.log(`\nJogo baseado em texto desenvolvido por Eric Vieira Palavro no Bootcamp Back-End Development do programa TechFlow da iTalents.\n`);
}