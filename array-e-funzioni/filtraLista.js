function filtraLista(head) {

    // funzione ricorsiva che filtra la lista e ritorna sia la nuova lista sia quanti nodi ho tolto
    function filtra(nodo) {
        if (nodo === null || nodo === undefined) return { lista: null, rimossi: 0 }; // caso base: lista finita

        let valore = nodo.val; // prendo il valore del nodo corrente

        let risultatoSuccessivo = filtra(nodo.next); // filtro ricorsivamente il resto della lista

        if (typeof valore === "number" && valore < 0) { // se è un numero e negativo lo rimuovo
            return { lista: risultatoSuccessivo.lista, rimossi: risultatoSuccessivo.rimossi + 1 }; // non tengo il nodo
        }

        nodo.next = risultatoSuccessivo.lista; // collego il nodo corrente al risultato filtrato
        return { lista: nodo, rimossi: risultatoSuccessivo.rimossi }; // tengo il nodo e ritorno rimossi
    }

    return filtra(head); // avvio la funzione ricorsiva
}
