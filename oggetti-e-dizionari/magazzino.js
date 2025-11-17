/*Data una lista di prodotti con i loro codici identificativi, vogliamo filtrarli ed ordinarli in base ad alcuni criteri rispetto al codice.

Ogni prodotto viene rappresentato con una coppia, espressa mediante un array di due elementi, formata in ordine da nome (stringa con prima lettera maiuscola) e codice (numero). Ad esempio, un prodotto potrebbe essere ["Vite", 430125].

Si scriva una funzione filtraMagazzino(a,f) in JavaScript che, dati in input
    •	un array a di prodotti;
    •	una funzione f da Number a Boolean,

restituisca un array contenente solamente le coppie di a tali per cui
    1.	il codice è valido, ovvero è un intero positivo a 6 cifre
    2.	il valore di f calcolato sul codice vale true.

Tale array deve essere ordinato in maniera lessicograficamente crescente rispetto ai nomi. In caso di parità del nome, gli elementi vanno ordinati per codice decrescente. Non è possibile che due prodotti abbiano lo stesso codice.*/

function filtraMagazzino(a, f) {

    let arrayordinato = [];

    for (let i = 0; i < a.length; i++) {
        if (a[i][1] > 99999 && a[i][1] < 1000000 && f(a[i][1]) == true) {
            arrayordinato.push(a[i]);

        }
    } arrayordinato.sort((a, b) => {

        let compara = a[0].localeCompare(b[0]);

        if (compara == 0) return b[1] - a[1];

        return compara



    })



} 
