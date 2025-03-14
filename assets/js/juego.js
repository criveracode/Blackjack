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
    console.log(deck);
    deck = _.shuffle(deck);
    console.log(deck)
};

createDeck();