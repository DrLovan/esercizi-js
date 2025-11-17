

function listPrint(head) { // stampa tutti gli elementi in ordine 
    if (head != null) {
        console.log(head.val);
        listPrint(head.next)
    }
}



function listPrintRev(head) { //stampa elementi al contrario
    if (head != null) {
        listPrintRev(head.next);
        console.log(head.val);
    }
}



function listFind(head, value) { // trova la prima occorrenza di value in head
    if (!head) { // if(head === null) caso base l elemnto della lista non esiste
        return null;
    }
    if (head.val === value) { // elemento trovato, ritorno il valore
        return head
    }

    return listFind(head.next, value);
}


//non ricorsiva
function listInsert(x, value) { //La posizione dipende da quale nodo assegno a x. in tutti i casi il nuovo nodo andra dopo 
    if (!x) return; // controlla se x == null se lo è ritorna
    let nuovo = { val: value, next: x.next } // crea un nuovo nodo con val passata dai parametri e poi dice: il nuovo nodo deve puntare esattamente a dove puntava prima x (next : x.next) cosi il nuovo nodo si aggancia al posto di x.next
    x.next = nuovo //collega x al nuovo nodo. il prossimo nodo di x non è più quello vecchio ma è quello nuovo 
}
/*
“Decido dove voglio inserire il nuovo nodo scegliendo il nodo x.
Chiamo la funzione con (valore; nodo x).
La funzione crea un nuovo nodo che punta allo stesso nodo dove puntava x.
Poi aggiorna x.next perché da quel momento deve puntare al nuovo nodo.”
*/


function listPush(head, value) {
    if (!head)
        return { val: value, next: null }
    if (head.next)
        listPush(head.next, value)
    else
        listInsert(head, value)

    return head
}


function listPop(head) {
    if (!head) // if head === null 
        return [null, undefined] // nuova testa = null e valore tolto undefined perche non toglie nulla
    if (!head.next) // caso base se head esiste ma head.next è null
        return [null, head.val] // ritorna lista vuota e il valore tolto: esempio 
    // let head = { val: 42, next: null }; listPop(head);  → [null, 42]

    let [newNext, removedVal] = listPop(head.next)// queste righe vengono eseguite se ci sono almeno 2 nodi. 
    head.next = newNext
    return [head, removedVal]
}


let head = null; // lista vuota

head = { val: 5, next: null }; // lista con un solo elemento

head = { val: 5, next: { val: 7, next: null } };

let nodo = { val: 1, next: null };
head.next.next = nodo;// accedo a head, poi entro nel 1 next, poi nel 2 next e da null il valore diventera = nodo. il puntatore è la il valore associato alla chiave next
listPrint(head);
console.log("--------")


let l1 = { val: 5, next: { val: 3, next: { val: 6, next: null } } };

let l2 = { val: 1, next: l1 }; // in questa lista il puntatore a next è l1 quindi copi il riferimento di l1 dentro next.
l2.next.val = 0; // questo va a cambiare il valore di l1 perché essendo oggetti next contiene riferimento a l1 .puntando alla stessa cosa cambia

listPrint(l2)
console.log("==========")
listPrintRev(l2)