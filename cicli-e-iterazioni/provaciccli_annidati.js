let matrice = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let somma = 0;

for (let i = 0; i < matrice.length; i++) {
    console.log(matrice[i])

    for (let j = 0; j < matrice[i].length; j++) {
        somma += matrice[i][j];
        console.log(matrice[i][j]);

    }
} console.log(somma)

let somma1 = 0;

for (let i = 0; i < matrice[i].length; i++) {
    console.log(matrice[i])

    for (let j = 0; j < matrice.length; j++) {
        somma += matrice[i][j];
        console.log(matrice[i][j]);

    }
} console.log(somma1)

