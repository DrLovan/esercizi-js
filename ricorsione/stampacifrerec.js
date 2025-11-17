//divido la cifra per 10 il resto sara ogni cifra
function stampaCifreRec(n) { //
    if (n < 10) {
        console.log(n); //caso base 

        return
    }
    //caso ricorsivo
    let resto = n % 10; //
    let quoziente = (n - resto);
    stampaCifreRec(quoziente)

    console.log(resto)
}