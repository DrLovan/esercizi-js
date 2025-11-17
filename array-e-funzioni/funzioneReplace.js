/*Definire una funzione replace(arr, target, replacement) che, dato un array arr, ritorni
un nuovo array dove tutte le istanze di target sono sostituite da replacement. Non modificare
l’array originale.*/

function replacement(arr, target, replace) {
    let nuovo = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            nuovo.push(replace)
        } else nuovo.push(arr[i])
    } return nuovo;
}

replacement([1, 2, 3, 4], 3, 4, 5, 5)
console.log(replacement([1, 2, 3, 4], 4, 5))