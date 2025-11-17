/*(Sommatoria) Si scriva un programma che dato un intero n calcoli e stampi la somma
dei numeri da 1 a n.*/

let numeroint = Number(prompt("dammi un numero intero!!"))

let totale = 0 //creo una variabile accumulatore che mi servirà per tenere traccia della somma parziale
let i = 1 //i è il contatore, serve a sapere a quale numero sono arrivato nella sequenza,parte da 1 perché è il primo numero da sommare


while (i <= numeroint) { // ciclo while  fino a che i non supera il numero dato in input
    totale = totale + i //aggiungo i a totale,iterazione 1 tot 1,
    i = i + 1 //aggiungo 1 a i 
}
console.log(totale)