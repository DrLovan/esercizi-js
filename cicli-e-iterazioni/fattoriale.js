/*(Fattoriale) Si scriva un programma che dato un intero n calcoli e stampi il suo fattoriale.
Si ricorda che il fattoriale di n è n! = 1*2*….*(n-1)*n*/

let numero = 4. //Number(prompt("Dammi un numero!")
let fattoriale = 1; // mi serve la variabile fattoriale per accumulare le moltiplicazione successive
for (let i = 1; i <= numero; i++) {
    fattoriale = fattoriale * i;

}
console.log(fattoriale)