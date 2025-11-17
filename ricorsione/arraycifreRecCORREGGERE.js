function arrayCifreRec(n) {
    //caso base
    if (n < 10) return [n];

    //caso ricorsivo
    let resto = n % 10
    let quoziente = (n - resto) / 10
    let cifre = arrayCifreRec(quoziente);

    cifre.push(resto);

    return cifre

}
console.log(arrayCifreRec(164329))

//versione con ricorsione in coda

function arrayCifreRec(n) {
    //caso base
    if (n < 10) {
        r.unshift(n);
        return r;
    }

    //caso ricorsivo
    let resto = n % 10
    let quoziente = (n - resto) / 10
    r.unshift(resto)
    let cifre = arrayCifreRec(quoziente);

    cifre.push(resto);

    return cifre

}
console.log(arrayCifreRec(164329))
