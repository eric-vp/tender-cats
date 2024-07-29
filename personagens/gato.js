const Personagem = require('./personagem');
const prompt = require('prompt-sync')();

class Gato extends Personagem {
    constructor(vida, vidaTotal, forca) {
        super(vida, forca);
        this.nome;
        this.vidaTotal = vidaTotal;
        // O tipo do gato vai ser igual ao primeiroElemento
        this.tipo;
        // Os elementos vão determinar quais serão os golpes do gato
        this.primeiroElemento;
        this.segundoElemento;
        // Lista de elementos disponíveis para escolher
        this.listaElementos = ["água", "terra", "eletricidade", "grama", "fogo"];
    }

    // Esse método serve para atribuir um nome ao personagem
    darNome() {
        do {
            var nomeGato = prompt(`De um nome a seu gato: `);
            // É feita uma verificação para ver se o nome é válido
            if (!this.verificaInput(nomeGato)) {
                console.log(`\nValor inválido, é preciso ter pelo menos 2 caracteres, não ser somente números e nem estar vazio. Dê um nome bonito ao seu gato.\n`);
            } else {
                // Se for válido o nome é atribuído
                this.nome = nomeGato;
            }
        } while (!this.verificaInput(nomeGato));
        console.log(`\nSeu gato se chama ${this.nome}`);
    }

    // Método para selecionar os elementos do nosso gato
    selecionarElementos() {
        // PRIMEIRO ELEMENTO E TIPO DO GATO
        do {
            // Os elementos disponíveis são mostrados na tela
            console.log(``);
            this.exibirMenuDeElementos();
            var primeiroElemento = +prompt(`Escolha o primeiro elemento de ${this.nome} `);
            // É feita uma verificação para ver se a opção é válida
            if (!this.verificaElemento(primeiroElemento)) {
                console.log(`\nValor inválido!\n`);
            } else {
                // Se a opção for válida, o tipo e o primeiro elemento do nosso gato será a opção escolhida
                this.tipo = this.listaElementos[primeiroElemento - 1];
                this.primeiroElemento = this.listaElementos[primeiroElemento - 1];
            }
        } while (!this.verificaElemento(primeiroElemento));

        // Após escolher o primeiro elemento ele é removido das opções de segundo elemento
        this.listaElementos.splice((primeiroElemento - 1), 1);

        // SEGUNDO ELEMENTO
        do {
            // Os elementos disponíveis são mostrados na tela
            console.log(``);
            this.exibirMenuDeElementos();
            var segundoElemento = +prompt(`Escolha o segundo elemento de ${this.nome} `);
            if (!this.verificaElemento(segundoElemento)) {
                console.log(`\nValor inválido!\n`);
            } else {
                // Se a opção for válida, o segundo elemento do nosso gato será a opção escolhida
                this.segundoElemento = this.listaElementos[segundoElemento - 1];
            }
        } while (!this.verificaElemento(segundoElemento));
    }

    // Exibe um menu com os elementos disponíveis
    exibirMenuDeElementos() {
        for (let i = 0; i < this.listaElementos.length; i++) {
            console.log(`${i + 1} - ${this.listaElementos[i]}`);
        }
    }

    subirDeNivel() {
        this.vidaTotal += 15;
        this.vida = this.vidaTotal;
        this.forca += 2;
        console.log(`\nParabéns! Você subiu de nível e ficou mais forte.`);
        console.log(`Nome: ${this.nome}`);
        console.log(`Vida: ${this.vidaTotal}`);
        console.log(`Força: ${this.forca}\n`);
    }

    // VERIFICAÇÕES

    // Verifica se o nome não está vazio, não é um número e se tem um tamanho maior que 2 caracteres (para nomes como Jo);
    verificaInput(nome) {
        if (nome.length < 2 || !isNaN(nome) || nome == " ") {
            return false;
        } else {
            return true;
        }
    }

    // Verifica se a opção escolhida é válida
    verificaElemento(elemento) {
        if (elemento <= 0 || elemento > this.listaElementos.length || isNaN(elemento)) {
            return false;
        } else {
            return true;
        }
    }

    // Exibe as opções que temos nas batalhas
    mostrarMenuDeBatalha(){
        do {
            // É verificado se o tipo é 'eletricidade' para poder exibir um nome melhor do que 'miado de eletricidade'
            console.log(`1 - Miado ${this.primeiroElemento == "Eletricidade" ? "elétrico" : "de " + this.primeiroElemento.toLowerCase()} `);
            console.log(`2 - Garras ${this.segundoElemento == "Eletricidade" ? "elétricas" : "de " + this.segundoElemento.toLowerCase()} `);
            console.log(`3 - Ronronar\n`);
            var opcao = +prompt(`Selecione uma opção: `)
            switch (opcao) {
                case 1:
                    return this.miar();
                case 2:
                    return this.arranhar();
                case 3:
                    return this.ronronar();
                default:
                    console.log(`\nOpção inválida!\n`);
                    break;
            }
        } while (opcao < 1 || opcao > 3);
    }

    mostrarStatus(){
        console.log(`\nNome: ${this.nome}`);
        console.log(`Vida: ${this.vidaTotal}`);
        console.log(`Força: ${this.forca}`);
        console.log(`Tipo: ${this.tipo}`);
        console.log(`Primeiro elemento: ${this.primeiroElemento}`);
        console.log(`Segundo elemento: ${this.segundoElemento}\n`);
    }

    // Miar retorna o primeiro elemento do gato
    miar(){
        console.log(`\nMiau!`);
        return this.primeiroElemento;
    }

    // Arranhar retorna o segundo elemento do gato
    arranhar(){
        console.log(`\nScratch!!!`);
        return this.segundoElemento;
    }
    
    // Ronronar cura 40 de vida do gato
    ronronar(){
        console.log(`\nRrrr...`);
        if(this.vida <= (this.vidaTotal - 40)) {
            // Se a vida for menor que a vidaTotal - 40, recupera 40
            let vidaRegenerada = 40;
            this.vida += vidaRegenerada;
            console.log(`${this.nome} regenerou ${vidaRegenerada} de vida.\n`);
        } else if (this.vida > (this.vidaTotal - 40) && this.vida < this.vidaTotal) {
            // Se a vida for maior que a vidaTotal - 40, mas menor que a vidaTotal, recupera apenas o que falta para completar
            let vidaRegenerada = this.vidaTotal - this.vida;
            this.vida += vidaRegenerada;
            console.log(`${this.nome} regenerou ${vidaRegenerada} de vida.\n`);
        } else {
            // Se a vida já estiver cheia, ele não recupera
            console.log(`${this.nome} ronronou, mas sua vida já está cheia.\n`);
        }
        // Retorna o valor 'cura', para que quem defenda não receba dano
        return "cura";
    }
}

module.exports = Gato;