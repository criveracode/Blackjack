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
let puntosJugador = 0, puntosComputadora = 0;

/* Referencias HTML */
const btnNuevoJuego = document.querySelector('#btnNuevoJuego');
const btnPedirCarta = document.querySelector('#btnPedirCarta');
const btnDetener = document.querySelector('#btnDetener');
const puntosHTML = document.querySelectorAll('small');
const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputador = document.querySelector('#computadora-cartas');


/* Función que crea un nuevo deck (baraja) */
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

/* Funcion para pedir una carta */
const pedirCarta = () => {
    if (deck.length === 0) {
        throw 'No hay cartas';
    }
    const carta = deck.pop();
    return carta;
};

/* Funcion que obtiene el valor de la carta */
const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor)) ?
        (valor === 'A') ? 11 : 10
        : parseInt(valor);
}

/* Funcion juego computadora */
const turnoComputadora = (puntosMinimos) => {
    do {

        const carta = pedirCarta(); //Pedimos una carta

        puntosComputadora = puntosComputadora + valorCarta(carta);// 0 + valor(carta)
        puntosHTML[1].innerText = puntosComputadora;//Agregamos el valor al DOM

        const imgCarta = document.createElement('img'); //Creamos un elemento imagen
        imgCarta.src = `./assets/cartas/${carta}.png`; //Agregamos el path de la imagen
        imgCarta.classList.add('carta'); //Agregamos la class
        divCartasComputador.append(imgCarta);//Agregamos el elemento en el DOM

        if (puntosMinimos > 21) {
            break;
        }

    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));
}


{/* Eventos */ }
btnPedirCarta.addEventListener('click', () => // Cuando se pasa una funcion como argumento se les conoce como callback
{
    const carta = pedirCarta();
    puntosJugador = puntosJugador + valorCarta(carta);
    puntosHTML[0].innerText = puntosJugador;

    const imgCarta = document.createElement('img');
    imgCarta.src = `./assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    divCartasJugador.append(imgCarta);

    if (puntosJugador > 21) {
        console.log('Has perdido');
        btnPedirCarta.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);

    } else if (puntosJugador === 21) {
        console.log('¡21! Ganaste ')
        btnPedirCarta.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);

    }
});


btnDetener.addEventListener('click', () => {
    btnPedirCarta.disabled = true;
    btnDetener.disabled = true;

    turnoComputadora(puntosJugador);

});