/*Si scriva un programma che disegni su schermo il grafico di una funzione data.
L’area del grafico è definita da variabili minX, maxX, minY, maxY e da una
risoluzione r. Il programma deve costruire il grafico riga per riga usando stringhe e
stampando:
● * per rappresentare la funzione,
● ┼ per l’origine (0,0),
● │ per l’asse y,
● ─ per l’asse x,
● uno spazio per il resto dell’area.*/

let m = Number(prompt("dammi il valore del coefficiente angolare 'm'!"))

let q = Number(prompt("ora dammi il valore dell'intercetta 'q'!"))

let minX = -10;
let maxX = 10;
let minY = -5;
let maxY = 5;
let r = 1;

function f(x) {
    return m * x + q;
}

for (let y = maxY; y >= minY; y = y - r) {
    let riga = ""

    for (let x = minX; x <= maxX; x = x + r) {
        if (x === 0 && y === 0) {
            riga = riga + "+";
        } else if (y === f(x)) {
            riga = riga + "*";
        } else if (x === 0) {
            riga = riga + "|";
        } else if (y === 0) {
            riga = riga + "-";
        } else {
            riga = riga + " ";
        }
    }
    console.log(riga)
}