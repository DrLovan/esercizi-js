/*Testo


Un’azienda di analisi dati vuole individuare il prodotto che ha ricevuto le migliori valutazioni rispetto ad una determinata caratteristica (ad esempio: prezzo, qualita, comoditaUso, ...).


Ogni prodotto è rappresentato da un oggetto in cui:

- c'è sempre la chiave nome, il cui valore è il nome del prodotto (stringa);

- ogni altra chiave indica una caratteristica per cui il prodotto ha ricevuto valutazioni, e ha come valore un array nonvuoto di lunghezza variabile di numeri positivi, corrispondenti ai punteggi assegnati dagli utenti a quella caratteristica.


Ad esempio, un prodotto potrebbe essere rappresentato da:

{nome: "Prodotto 1", qualita: [3, 4, 5], prezzo: [2, 3, 3, 1, 2, 6, 1], design: [7, 8, 15], spedizione:[6,7,8,8]}


Si scriva una funzione JavaScript prodottoMigliore(a,p) che prende in input:

1) un array a di prodotti, dove ogni prodotto è un oggetto come descritto sopra;

2) una stringa p, che rappresenta il nome di una caratteristica (ad esempio: prezzo).


La funzione deve restituire il nome del prodotto di a tale per cui la media aritmetica dei valori relativi alla chiave p è massima.

In caso di parità di tale massimo, la funzione deve restituire il prodotto alfabeticamente piú piccolo.


Gli oggetti di a che non contengono la chiave p dovranno essere ignorati ai fini del calcolo del massimo. Se nessuno dei prodotti contiene la chiave p, la funzione deve restituire undefined.*/

function media(a) { // scrivo una funzione per calcolare la media di un array

    let somma = 0;

    for (let numero of a) {

        somma += numero;

    }
    return somma / a.length;
}

function prodottoMigliore(a, p) {

    let mediaMigliore = -Infinity;
    let migliorNome = undefined;

    for (let prodotto of a) { //ciclo sugli oggetti dell array


        if (p in prodotto) { //se l oggetto ha la chiave p 
            let punteggi = prodotto[p];// estraggo l array di punteggi per la chiave p
            let mediaPunteggi = media(punteggi); // assegno a mediaPunteggi il valore della mdeia sull array punteggi

            if (mediaPunteggi > mediaMigliore) { // se la media dei punteggi è maggiore della media migliore, la aggiorno
                mediaMigliore = mediaPunteggi;
                migliorNome = prodotto.nome; // aggiorno anche il nome del prodotto con la media delle valutazioni piu alta
            }
            else if (mediaPunteggi == mediaMigliore) { // controllo se 2 prodotti hanno la stessa media
                let confronto = migliorNome.localeCompare(prodotto.nome);// con localcompare confronto se viene prima il nome salvato o quello del prodotto su cui sto iterando.assegno il numero che ritornerà a confronto
                if (confronto > 0) { // se ottengo > 0 salvo il nuovo nome 
                    migliorNome = prodotto.nome;
                }
            }
        }

    }
    return migliorNome; // ritorno il nome del prodotto con la media delle valutazioni migliore
}
