/*Si scriva una funzione ricorsiva cifreInv(n) che, dato come argomento un intero positivo n, restituisca un array che in posizione i contiene la cifra i-esima di n, dalla meno significativa alla più significativa.


Esempi:

cifreInv(2563) → [3, 6, 5, 2]

cifreInv(98763) → [3, 6, 7, 8, 9]*/

function cifreInv(n) {
    if (n < 10) {
        return [n];
    } else {

        let modulo = n % 10;
        let arrayModulo = [modulo];
        let numero_senza_ultima = Math.floor(n / 10);
        let risultatoRicorsione = cifreInv(numero_senza_ultima);
        let arrayFinale = arrayModulo.concat(risultatoRicorsione);
        return arrayFinale

    }
}
console.log(cifreInv(98763));
