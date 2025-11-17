/*Chiedi un numero n e calcola:
1 - 2 + 3 - 4 + 5 - 6 + \dots \pm n
(es. n = 6 → 1 - 2 + 3 - 4 + 5 - 6 = -3)*/

let numero = Number(prompt("dammi un numero!"));
let sommaalterna = 0;
let storagesommaalterna = []
for (let i = 1; i <= numero; i++) {
    if (i % 2 === 1) {
        sommaalterna += i;
        storagesommaalterna.push(`+${i}`)
    } else {
        sommaalterna -= i
        storagesommaalterna.push(`-${i}`)
    }

}
console.log(sommaalterna)
console.log(storagesommaalterna)