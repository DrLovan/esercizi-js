// (Primo) Si scriva un programma che legge un intero n e valuti se è primo 
// (non esiste un numero d in [2,n-1] tale che n sia divisibile per d). 
// Si stampi il tempo di esecuzione del programma.
let start_time = Date.now();

let n = Number(prompt("Dammi un intero"));
let d = 2; // inizializzo variabile divisore che mi servirà per fare i controlli sui divisori


// for(d = 2; d <=n-1; d++){
//     if(n%d == 0)
//         break;
// }

let primo = true; //uso variabile booleana per ciclare fino a che è true
while (primo && d < n) { //while true e il divisore è piu piccolo del numero di input cicla

    if (n % d == 0) { // se il resto della divisione di input con il divisore(2) è uguale
        primo = false; // non è primo, imposta primo a false e termina il ciclo perché nella guardii del while c'è scritto continua fino a che primo è true
    }
    else
        d++; // altrimenti aggiungi 1 a d divisore e continua il ciclo
}

let end_time = Date.now();
console.log(`Tempo di esecuzione: ${end_time - start_time} ms`);
console.log(d);
if (primo == false) {
    console.log("non è primo")
} else {
    console.log("è primo")
}