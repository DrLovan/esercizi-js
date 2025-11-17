/*Esercizio 1
(Inventario) Si scriva un programma per gestire un inventario, formato da un
insieme di coppie prodotto-quantità. Tali coppie vengono lette da tastiera, fino a
quando l’utente inserisce “stop” come nome del prodotto. Stampare la lista dei
prodotti inventariati, con le rispettive quantità, su una sola riga.
Esempio
Input: latte, 2, uova, 6, pane, 7, latte, 3, uova, 6, stop
Output: (latte, 5) (uova, 12) (pane, 7)*/


let inventario = {};
let listaprodotti = ""

while (true) {
    let viveri = prompt("dammi un prodotto, o premi stop per terminare!!")

    if (viveri === "stop") {
        break;
    }

    let quantitaViveri = Number(prompt("Dammi la quantità"));






    if (inventario[viveri]) {
        inventario[viveri] += quantitaViveri
    } else { inventario[viveri] = quantitaViveri }
}
for (let chiave in inventario) {
    let coppia = "(" + chiave + ", " + inventario[chiave] + ") ";
    listaprodotti += coppia



}
console.log(listaprodotti)