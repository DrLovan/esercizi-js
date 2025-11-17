// ============================================================
// MULTI-INSIEMI
// ============================================================

// --- Introduzione ---
let multiinsieme = { 'mela': 3, 'pera': 2, 'banana': 1 }
console.log(multiinsieme)  // 3 mele, 2 pere, 1 banana

let carrello = { 'pasta': 2, 'pane': 1, 'latte': 3 }
let voti = { 30: 4, 28: 2, 27: 1 }  // quattro 30, due 28, un 27

// --- Inserimento Multi ---

function inserisciMulti(M, elemento, quantita) {
    if (elemento in M) {
        M[elemento] += quantita;
    }
    else M[elemento] = quantita;
}
let spesa = {}
inserisciMulti(spesa, 'mela', 3)
console.log(spesa)  // {'mela': 3}

inserisciMulti(spesa, 'mela', 2)
console.log(spesa)  // {'mela': 5} - si somma!

//=======================================================================

// --- Rimozione Multi ---
function rimuoviMulti(M, elemento, quantita) {
    if (elemento in M) {
        M[elemento] -= quantita;

        if (M[elemento] <= 0) {
            delete M[elemento]
        }
    }
}

let inventario = { 'mela': 5, 'pera': 2 }
rimuoviMulti(inventario, 'mela', 2)
console.log(inventario)  // {'mela': 3, 'pera': 2}

rimuoviMulti(inventario, 'pera', 3)
console.log(inventario)  // {'mela': 3} - pera sparisce
//=======================================================================

// --- Unione Multi ---
function unioneMulti(A, B) {
    let C = { ...A } // riempie con C gli elementi di A
    for (let el in B) {
        if (el in C) {
            C[el] = Math.max(A[el], B[el]) // MASSIMO

        } else {
            C[el] = B[el]
        }
    }
    return C
}
let MA = { 'x': 3, 'y': 2 }
let MB = { 'y': 1, 'z': 4 }
console.log(unioneMulti(MA, MB))  // {'x': 3, 'y': 2, 'z': 4}

//===================================================================
// --- Intersezione Multi ---
function intersezioneMulti(A, B) {
    let C = {}
    for (let el in A) {
        if (el in B) {
            C[el] = Math.min(A[el], B[el]) // MINIMO!
        }
    }
    return C
}

let MC = { 'a': 5, 'b': 3, 'c': 1 }
let MD = { 'a': 2, 'b': 4, 'd': 2 }
console.log(intersezioneMulti(MC, MD))  // {'a': 2, 'b': 3}

// --- Differenza Multi ---
function differenzaMulti(A, B) {
    let C = {}
    for (let el in A) {
        if (el in B) {
            let diff = A[el] - B[el]
            if (diff > 0)
                C[el] = diff
        } else {
            C[el] = A[el]
        }
    }
    return C
}

let ME = { 'x': 7, 'y': 3, 'z': 2 }
let MF = { 'x': 3, 'y': 5, 'w': 1 }
console.log(differenzaMulti(ME, MF))  // {'x': 4, 'z': 2}

// --- Cardinalità Multi ---
function cardinalitaMulti(M) {
    let somma = 0
    for (let el in M) {
        somma += M[el]
    }
    return somma
}
let MG = { 'mela': 3, 'pera': 2, 'banana': 5 }
console.log(cardinalitaMulti(MG))  // 10 (3+2+5)  
