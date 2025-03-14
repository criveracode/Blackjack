/**
 * 2C = TWO OF CLUBS (Tréboles)
 * 2D = TWO OF DIAMONDS (Diamantes)
 * 2H = TWO OF HEARTS (Corazones)
 * 2S = TWO OF SPADES (Espada)
 * 
 */


let deck = [];
let types = ['C', 'D', 'H', 'S'];
let specials = ['A', 'J', 'Q', 'K'];

{/* Función que crea un nuevo deck (baraja) */ }
const createDeck = () => {
    for (let i = 2; i <= 10; i++) {
        for (const type of types) {
            deck.push(i + type);
        }
    }

    for (const type of types) {
        for (const special of specials) {
            deck.push(special + type);
        }
    }

    deck = _.shuffle(deck);
    console.log(deck)
};

createDeck();

{/* Funcion para pedir una carta */ }
const pedirCarta = () => {
    if (deck.length === 0) {
        throw 'No hay cartas';
    }
    const carta = deck.pop();
    console.log(carta);
    return carta;
};


{/* Funcion que obtiene el valor de la carta */ }
const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor)) ?
        (valor === 'A') ? 11 : 10
        : parseInt(valor);

}

const valor = valorCarta(pedirCarta());
console.log({valor});


// let puntos = 0;
// if (isNaN(valor)) {
//     puntos = (valor === 'A') ? 11 : 10;

// } else {
//     puntos = parseInt(valor);
// }
// console.log(puntos);