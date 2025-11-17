//Insieme Potenza Dato un insieme A, calcola P(A) = insieme di tutti i suoi sottoinsiemi.
//Esempio: P({1, 2}) = {{}, {1}, {2}, {1, 2} {1:1 , 2:1}
function powerSet(a) {
    let arrInsieme = [];
    for (let chiavi in a) {
        arrInsieme.push(chiavi)
        // a questo punto ho un array con le chiavi
        // Esempio arrInsieme = [1, 2, 3]
    }
    let parti = [[]];
    for (let elementi of arrInsieme) {
        let nuovi = [];
        for (let sottoinsieme of parti) {
            let copia = [...sottoinsieme];
            copia.push(elementi);
            nuovi.push(copia)

        } parti = parti.concat(nuovi)
    }
    let pSetFinale = {}
    for (let sotto of parti) {
        if (sotto.length == 0) {
            pSetFinale["{}"] = 1;

        } else {
            let chiave = "{" + sotto.join(",") + "}";
            pSetFinale[chiave] = 1;
        }
    }
    return pSetFinale


}

