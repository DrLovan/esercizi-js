// ============================================================
// INSIEMI
// ============================================================

// --- Rappresentazione ---
let insieme = {} // insieme vuoto

let pokemon = { 'charizard': 1, 'rayquaza': 1, 'tyranitar': 1 };
console.log(pokemon);

// --- Inserimento ---
function inserisci(insieme, elemento) {

    insieme[elemento] = 1;

}

let A = { 'x': 1, 'y': 1 }
inserisci(A, 'z')
inserisci(A, 'x')  // Già presente, resta 1
console.log(A)

// RIPASSO:
// Per aggiungere una chiave a un oggetto si usa la notazione:
//     oggetto[key] = valore
//
// - Se "key" è una stringa letterale, allora deve essere scritta tra virgolette:
//       oggetto["nomeChiave"] = valore
//
// - Se key è una variabile (per esempio un parametro di funzione),
//   NON si mettono le virgolette, perché JavaScript usa il contenuto
//   della variabile come nome della chiave:
//       oggetto[key] = valore
//
// Nota: i parametri delle funzioni diventano automaticamente variabili
//       locali, quindi dentro una funzione si usa oggetto[parametro] = valore senza "".

// ===================================================================

// --- Eliminazione: undefined vs delete ---
let test1 = { 'a': 1, 'b': 1, 'c': 1 }
test1['b'] = undefined  // SBAGLIATO
console.log(test1)
console.log('b' in test1)  // true! L'elemento c'è ancora

let test2 = { 'a': 1, 'b': 1, 'c': 1 }
delete test2['b']  // CORRETTO
console.log(test2)
console.log('b' in test2)  // false! Elemento rimosso

// Perché? L'operatore 'in' controlla se la CHIAVE esiste,
// non il valore. undefined è un valore valido

function elimina(insieme, elemento) {

    delete insieme[elemento];

}

//=======================================================================

//verifica che un elemento appartenga ad un insieme
function appartiene(insieme, elemento) {

    return elemento in insieme;

}
let animali = { 'gatto': 1, 'cane': 1, 'pesce': 1 }
console.log(appartiene(animali, 'gatto'))  // true
console.log(appartiene(animali, 'elefante'))  // false

// l operatore in restituisce sempre un booleano
// in questo caso facendo return elemento in insieme js fa 
// "elemento" in insieme e ritorna il valore booleano true o false

//=======================================================================


//unisce due inisiemi in un terzo insieme
function unione(A, B) {
    let C = {}
    for (let elemento in A) {//scorre tutte le chiavi di A              l'  "of"  invece si usa per scorrere gli array
        inserisci(C, elemento);
    }
    for (let elemento in B) {//scorre tutte le chiavi di A
        inserisci(C, elemento);
    }
    return C;
}

let A1 = { 'a': 1, 'b': 1, 'c': 1 }
let B1 = { 'c': 1, 'd': 1, 'e': 1 }
console.log(unione(A1, B1))  // 'c' resta :1

// per ogni insieme rappresentato come oggetto, le chiavi sono gli elementi , i valori non importano.
// usare for...in è il modo naturale di scorrere le chiavi,quindi scorrere gli elementi dell ' insieme.
// Usare inserisci(C, elemento) mette la chiave nella tabella e se la chiave esiste già, rimane a 1 come dovrebbe essere



//=======================================================================

//restituisce tutti gli elementi che appartengono simultanemente sia ad A che a B

// --- Intersezione ---
function intersezione(A, B) {

    let C = {};
    for (let elemento in A) {

        if (elemento in B) {
            inserisci(C, elemento);
        }

    }
    return C;

}
let X = { 'a': 1, 'b': 1, 'c': 1 }
let Y = { 'c': 1, 'd': 1, 'e': 1 }
console.log(intersezione(X, Y))  // {'c': 1}

// scorro le chiavi in A, se sono in B le aggiungo a C con inserisci elemento.

//=======================================================================
//restituisci la differenza di A con B (gli elementi di A che non appartengono a B)

// --- Differenza ---
function differenza(A, B) {

    let C = {};
    for (let elemento in A) {

        if (!appartiene(B, elemento)) { // se l' elemento non è una chiave in B 

            inserisci(C, elemento);

        }

    }
    return C;
}
console.log(differenza(A1, B1))  // {'a': 1, 'b': 1}
// RICORDA
//appartiene(B, elemento)     // true se la chiave esiste
//!appartiene(B, elemento)    // true se NON esiste

//=======================================================================
//controlla che ogni elemento di A sia contenuto in B

// --- Sottoinsieme ---
function sottoinsieme(A, B) {

    for (let elemento in A) {

        if (!appartiene(B, elemento)) { // se elemento no appartiene a b
            return false;
        }

    }
    return true;
}
let Sub1 = { 1: 1, 2: 1 }
let Sub2 = { 1: 1, 2: 1, 3: 1 }
console.log(sottoinsieme(Sub1, Sub2))  // true
console.log(sottoinsieme(Sub2, Sub1))  // false
//======================================================================

// --- Uguaglianza ---

function uguali(A, B) {
    if (sottoinsieme(A, B) && sottoinsieme(B, A)) {
        return true;
    } else {
        return false;
    }
}

let U1 = { 'x': 1, 'y': 1 }
let U2 = { 'y': 1, 'x': 1 }
console.log(U1 == U2)  // false! Confronta riferimenti... Vediamo alla prossima lezione
console.log(uguali(U1, U2))  // true! Confronta contenuto
// NOTE
/* gli oggetti in js sono tipi complessi, quindi non salvi contenuto della struttura dentro la variabile. la variabile contiene un riferimento (puntatore) al vero oggetto in memoria che è salvato da tutt altra parte... esempio U1 → indirizzo 0x100 ; U2 → indirizzo 0x200.
quindi U1 == U2   // false
per confrontarne il contenuto usiamo la def di uguaglianza insiemistica :
A = B  ⇔  (A ⊆ B) AND (B ⊆ A) quindi si chiama la funzione sottoinsieme prima su A B poi su B A e se entrambe sono true allora sono uguali!*/