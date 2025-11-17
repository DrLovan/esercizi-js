// (Asterischi) Si scriva un programma che dato un intero n stampi n asterischi sulla prima linea
//, n − 2 asterischi sulla seconda linea, n − 4 sulla terza e così via, 
// fino ad arrivare a stampare uno o due asterischi sull’ultima linea

// 1 iterazione: stampa n asterischi
// 2 iterazione: stampa n-2 asterischi
// ... 


let na = 5 //Number(prompt("Dammi un numero:"))

for (let i = na; i >= 1; i = i - 2) { // il ciclo esterno parte da i = na (cioè dal numero scelto), continua fino a che i è maggiore o uguale a 1                               //riducendo i di 2 a ogni iterazione

    let asterischi = ""; // inizializza una str vuota

    for (let j = 1; j <= i; j++) { /* ciclo annidato, comincia da j =1 ,fino a che j è <= i a passo j+1,riempie la prima stringa di asterischi  per il valore di i ( j= i, quindi al primo ciclo sarà di n(input) asterischi,poi di n-2 etc etc*/
        asterischi = asterischi + "*"; //aggiunge un asterisco per ogni valore di j (da 1 a i)

    }

    console.log(asterischi)
}