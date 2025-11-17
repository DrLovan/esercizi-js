/*(Accumulatore) Si scriva un programma che legge numeri finché la somma non
supera 101, quindi stampi la somma.*/

let somma = 0
while (somma <= 101) {
    let lettorenumero = Number(prompt("inserisci un numero positivo!"))
    somma = somma + lettorenumero
}
console.log(somma)