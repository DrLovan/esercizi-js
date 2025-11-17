/*Definire una funzione contamaggioredi(arr, threshold) che ritorni il numero di elementi di arr
maggiori strettamente di threshold.*/

function contamaggioredi(arr, threshold) {
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > threshold)
            counter++;


    } return counter
}
let numeri = [2, 8, 5, 12, 3];
console.log(contamaggioredi(numeri, 5));