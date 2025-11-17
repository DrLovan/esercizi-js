//Calcola la somma di tutti i numeri dispari fino a n.

let x = Number(prompt("dammi un numero !"))
let sommadispari = 0;
for (let i = 1; i <= x; i++) {
    if (i % 2 === 1) {
        sommadispari += i;

    }
} console.log(sommadispari)