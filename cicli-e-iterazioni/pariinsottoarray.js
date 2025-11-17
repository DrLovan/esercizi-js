/*Hai un array di array di numeri.
Conta quanti numeri pari ci sono in ogni riga (sotto-array).*/

let numeri = [
    [2, 3, 4, 5],
    [6, 8, 1],
    [9, 10, 12, 13]
];
for (let i = 0; i < numeri.length; i++) {
    let contatore = 0;
    console.log(numeri)
    for (let j = 0; j < numeri[i].length; j++) {
        if (numeri[i][j] % 2 === 0) {
            contatore += 1;
        }
    } console.log(`Riga ${i + 1}: ${contatore} numeri pari`)
}