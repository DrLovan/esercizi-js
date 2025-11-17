function sumNestedArray(a) {
    let somma = 0; // accumulatore
    if (a.length == 0) {
        return 0; //caso base array vuoto
    }
    for (let i = 0; i < a.length; i++) {
        if (typeof a[i] == "number") { //se trovi numero sommalo a somma
            somma += a[i];
        } else if (typeof a[i] != "number") { //se trovi elemento diverso da numero richiama la funzione su quell elemento

            somma += sumNestedArray(a[i]);
        }

    } return somma


}
