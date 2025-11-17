/* Definire una funzione filtraCorso(a, f) dove:
     - a è un array di coppie [nome, numero]
     - f è una funzione booleana che prende in input il numero
     
   La funzione deve:
     1) filtrare solo gli elementi di a tali che:
         - il secondo valore sia un intero compreso tra 100000 e 999999 (6 cifre)
         - f(numero) ritorni true
         - il numero sia intero (numero % 1 == 0)
     
     2) ordinare il risultato prima per nome (ordine alfabetico crescente)
        e, a parità di nome, per numero in ordine decrescente

     3) ritornare l'array filtrato e ordinato, senza modificare l’array originale
*/
function filtraCorso(a, f) {

    let arrayordinato = [];

    for (let i = 0; i < a.length; i++) {
        if (a[i][1] > 99999 && a[i][1] < 1000000 && f(a[i][1]) == true && a[i][1] % 1 == 0) {

            arrayordinato.push(a[i]);

        }


    } arrayordinato.sort((a, b) => {

        let compara = a[0].localeCompare(b[0]);

        if (compara == 0) return b[1] - a[1];

        return compara



    }); return arrayordinato
}