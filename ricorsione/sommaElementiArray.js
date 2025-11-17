/*
Si scriva una funzione ricorsiva sommaArray(a) che, dato come argomento un array di interi, restituisca la somma dei suoi elementi.


Esempi

sommaArray([3,6,1,3]) → 13

sommaArray([46,-1,-45, 0,2 -4, 3,-1]) → 0
*/

function sommaArray(a) {
    if (a.length == 0) {
        return 0;
    }
    else if (a.length == 1) {
        return a[0]
    } else {
        let somma = 0;
        let arrayParziale = a.slice(1);
        let numero = sommaArray(arrayParziale);
        somma += numero

    } return somma
}