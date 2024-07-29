const prompt = require('prompt-sync')();

function lutar(gato, vilao) {
    console.log(`\n----- HORA DA LUTA -----\n`);

    // Exibe a vida do nosso personagem e oponente no início da luta
    console.log(`\nVida de ${gato.nome}: ${gato.vida}`);
    console.log(`Vida do ${vilao.nome}: ${vilao.vida}\n`);
    do {
        // O oponente defende um ataque com o método 'defender()'
        // 'defender()' recebe o valor do ataque base e o tipo/elemento do ataque que escolhemos
        vilao.defender(gato.atacar(), gato.mostrarMenuDeBatalha());
        // Exibe a vida do nosso personagem e oponente após cada golpe
        console.log(`\nVida de ${gato.nome}: ${gato.vida}`);
        console.log(`Vida do ${vilao.nome}: ${vilao.vida}\n`);

        // Aqui é verificado se o vilão ainda está com vida para poder atacar, se a vida for menor ou igual a 0, ele não causa dano ao nosso personagem
        if (vilao.vida >= 0) {
            prompt(`turno do vilao: `);
            // Se o oponente ainda tiver vida, defendemos com 'defender()', recebendo o valor do ataque e o tipo/elemento do inimigo
            gato.defender(vilao.atacar(), vilao.tipo);
            console.log(`\nVida de ${gato.nome}: ${gato.vida}`);
            console.log(`Vida do ${vilao.nome}: ${vilao.vida}\n`);
        }
    } while (vilao.vida > 0 && gato.vida > 0);

    // Exibe o resultado da luta
    if (vilao.vida <= 0) {
        console.log(`\n${gato.nome} venceu!\n`);
        // Se vencermos, recebemos um aumento nos atributos
        gato.subirDeNivel();
        return true;
    } else {
        console.log(`\nVilão venceu!\n`);
        return false;
    }
}

module.exports = lutar;
