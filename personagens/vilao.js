const Personagem = require("./personagem");

class Vilao extends Personagem {
    constructor(vida, forca, tipo, nome) {
        super(vida, forca, tipo, nome);
    }

    atacar() {
        console.log(`\n${this.nome} atacou.\n`);
        return this.forca + Math.floor(Math.random() * 10);
    }
}

module.exports = Vilao;