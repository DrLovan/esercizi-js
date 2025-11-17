


/* 
   Questo codice conta solo gli indici dell'array,
   quindi parte da 0 arriva a 9 e si ferma.
   Se voglio prendere i valori effettivi, guarda la versione sotto.
*/

let numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numeri.length; i++) {
    for (let j = 0; j < numeri.length; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}


/* 
   Qui invece uso i valori REALI dell'array
   quindi 1,2,3,...,10 invece degli indici.
*/

let numeriValori = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numeriValori.length; i++) {
    for (let j = 0; j < numeriValori.length; j++) {
        console.log(`${numeriValori[i]} x ${numeriValori[j]} = ${numeriValori[i] * numeriValori[j]}`);
    }
}