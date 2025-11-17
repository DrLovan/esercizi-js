function contaParole(a) {
    let dizionario = {};//creo un dizionario vuoto che riempirò con chiave = parola e valore = numero ripetizione parola
    for (let i = 0; i < a.length; i++) { // itero su array 
        let parola = a[i]; // variabile che contiene parola all indice i dell array
        if (dizionario[parola] === undefined) { //se nel dizionario parola (a[i]) === undefined (non c'è)
            dizionario[parola] = 1; // aggiungi nel dizionario la parola dell indice dell array e assegnale valore 1

        } else { dizionario[parola]++ } // se c'è, aumenta il valore di 1
    } return dizionario // ritorno dizionario con le ripetizioni delle parole
}

// --- test rapido ---
if (require.main === module) {
    const a = ["ciao", "a", "ciao", "b", "a", "ciao"];
    console.log(contaParole(a));
}