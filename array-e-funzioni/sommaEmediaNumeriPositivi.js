/*Hai un array di numeri interi (positivi e negativi).
Calcola:
    1.	La somma di tutti i numeri positivi.
    2.	La media dei numeri positivi.
Suggerimento: ti servirà un accumulatore per la somma e un contatore per quanti numeri positivi hai trovato.*/

function sommapositivi(a) {
    let contatore = 0;
    let accumulatore = 0;
    for (let i of a) {
        if (i > 0) {
            contatore++
            accumulatore += i;

        }
    } return {
        somma: accumulatore,
        media: accumulatore / contatore
    }
}
let numeri = [3, -2, 7, 0, -5, 12];
console.log(sommapositivi(numeri))
