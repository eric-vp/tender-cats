class Personagem {
    constructor(vida, forca, tipo, nome) {
        this.vida = vida;
        this.forca = forca;
        this.tipo = tipo;
        this.nome = nome;
    }

    // Esse método funciona tanto para os vilões quanto para o nosso personagem
    atacar() {
        // Utiliza o valor de força como base para o ataque somado a um número aleatório entre 0 e 9
        return this.forca + Math.floor(Math.random() * 10);
    }

    // O método defende os golpes recebidos e recebe 2 parâmetros para calcular o dano recebido
    defender(ataque, tipo) {
        let dano;
        // Primeiro é verificado se o tipo é cura, e se for, não recebe nenhum dano
        if (tipo != "cura") {
            // Se não for cura é calculado o dano recebido de acordo com o valor recebido em 'verificarTipo()'
            if (this.verificarTipo(tipo) == 1) {
                // Se o valor retornado em 'verificarTipo()' demonstrar que o golpe é muito efetivo, o dano causado será 1.5 vezes maior
                dano = ataque * 1.5;
                this.vida -= dano;
                console.log(`\nEsse ataque é super efetivo contra ${this.nome}!`);
                console.log(`O golpe causou ${dano} de dano em ${this.nome}.\n`);
            } else if (this.verificarTipo(tipo) == 2) {
                // Se o valor retornado em 'verificarTipo()' demonstrar que o golpe é pouco efetivo, o dano causado será a metade do ataque
                dano = ataque * 0.5;
                this.vida -= dano;
                console.log(`\nEsse ataque não causou muito dano em ${this.nome}.`);
                console.log(`O golpe causou ${dano} de dano em ${this.nome}.\n`);
            } else {
                // E se o golpe não for muito e nem pouco efetivo, o dano causado igual ao ataque
                this.vida -= ataque;
                console.log(`\nO golpe causou ${ataque} de dano em ${this.nome}.\n`);
            }
        }
    }

    // Verifica no momento que o personagem defende, para determinar se o ataque é muito ou pouco efetivo
    verificarTipo(tipo){
        switch (this.tipo) {
            case 'fogo':
                return this.verificarElemento(tipo, "água", "terra", "grama", "eletricidade");
            case 'grama':
                return this.verificarElemento(tipo, "fogo", "eletricidade", "água", "terra");        
            case 'terra':
                return this.verificarElemento(tipo, "grama", "água", "eletricidade", "fogo");        
            case 'eletricidade':
                return this.verificarElemento(tipo, "terra", "fogo", "água", "grama");
            case 'água':
                return this.verificarElemento(tipo, "eletricidade", "grama", "fogo", "terra");
            default:
                break;
        }
    }

    // Essa verificação serve para ver cada tipo de elemento, cada elemento possui outros 2 elementos que são mais fortes que ele e 2 elementos que são mais fracos
    verificarElemento(tipo, elementoMaisForte1, elementoMaisForte2, elementoMaisFraco1, elementoMaisFraco2) {
        if (tipo == elementoMaisForte1 || tipo == elementoMaisForte2) {
            // Se o retorno for 1, o ataque vai causar mais dano que o normal
            return 1;
        } else if (tipo == elementoMaisFraco1 || tipo == elementoMaisFraco2) {
            // Se o retorno for 2, o ataque vai causar menos dano que o normal
            return 2;
        }
        // E se nao retornar nada, o dano vai ser apenas o valor recebido pelo método 'atacar()'        
    }
}

module.exports = Personagem;