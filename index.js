const Gato = require("./personagens/gato");

const intro = require('./fases/intro');
const fase1 = require('./fases/fase1');
const fase2 = require('./fases/fase2');
const fase3 = require('./fases/fase3');
const final = require('./fases/final');

console.log(`\n-----TENDER CATS-----\n`);

console.log(`A vida na cidade não é facil para os gatos de rua.`);
console.log(`Na tentativa de escapar dos perigos noturnos do centro da cidade grande, nosso pequeno herói felino anda em direção ao parque.`);

// Aqui criamos o nosso personagem e damos um nome a ele
const gato = new Gato(100, 100, 25);
gato.darNome();

console.log(`As árvores verdes e a brisa suave causam uma sensação de paz em ${gato.nome}, porém logo algo tiraria a sua tranquilidade.`);
console.log(`Mas ${gato.nome} tem muitas habilidades e sabe se defender muito bem.`);

// Selecionamos os elementos do gato e mostramos todos os status
gato.selecionarElementos();
gato.mostrarStatus();

// Para evitar um aninhamento de código muito longo, a verificação é invertida
// Se as fases retornarem false, esse return encerra o jogo
// Se as fases retornarem true, o jogo segue para a fase seguinte
const introducao = intro(gato);
if (!introducao) {
    console.log(`\nGAME OVER\n`);
    return;
}
const primeiraFase = fase1(gato);
if (!primeiraFase) {
    console.log(`\nGAME OVER\n`);
    return;
}
const segundaFase = fase2(gato);
if (!segundaFase) {
    console.log(`\nGAME OVER\n`);
    return;
}
const terceiraFase = fase3(gato);
if (!terceiraFase) {
    console.log(`\nGAME OVER\n`);
    return;
}
final(gato);
