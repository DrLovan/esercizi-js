/*Dati due vettori x e y ad n componenti, definire prodotto_scalare(x, y) che ritorna la somma di
x[i]*y[i]. Se le lunghezze differiscono, ritorna undefined. Formula: x · y = somma_{i=1..n}
x_i * y_i*/


function prodotto_scalare(x, y) {

    if (x.length != y.length)
        return undefined;

    let arrProd = [];

    for (let i = 0; i < x.length; i++) {
        arrProd.push(x[i] * y[i]);  //faccio il prodotto elemento per elemento
    }

    // faccio la somma di tutti i prodotti
    let somma = 0;
    for (let i = 0; i < arrProd.length; i++) {
        somma += arrProd[i];
    }

    return somma;
}