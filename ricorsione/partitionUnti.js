function partition_until(arr, depth) {

    /*
    CASO BASE:
    ----------
    Se:
      - l'array è vuoto, OPPURE
      - la profondità richiesta è finita (depth == 0)
    allora NON devo più dividere niente.

    In questo caso la funzione deve semplicemente restituire
    un array che contiene l'array corrente.

    Esempio:
        arr = [1,2,3,4], depth = 0  →  restituisco [[1,2,3,4]]
        arr = [5], qualsiasi depth → restituisco [[5]]
    */
    if (arr.length == 0 | depth == 0) {
        return [arr];     // attenzione: ritorna UN array che contiene arr
    }

    // SE NON SONO NEL CASO BASE:
    // --------------------------
    // devo dividere arr in due metà e chiamare ricorsivamente la funzione
    // sulle due parti, diminuendo la profondità di 1.

    // 1) calcolo indice centrale (metà dell'array)
    let cx = Math.floor(arr.length / 2);

    // 2) creo i due sotto-array:
    let sx = arr.slice(0, cx);  // parte sinistra (dall'inizio fino al centro non compreso)
    let dx = arr.slice(cx);     // parte destra  (dal centro fino alla fine)

    /*
    3) CHIAMATE RICORSIVE:
       Ogni metà deve essere partizionata a sua volta,
       ma con depth - 1 (perché ho già fatto un livello di divisione qui).
       
       ↓ DISCESA ricorsiva:
         - partition_until(sx, depth - 1) continua a dividere la parte sinistra
         - partition_until(dx, depth - 1) continua a dividere la parte destra

       Quando depth arriva a 0, le chiamate restituiranno semplicemente [sotto-array].

       ↓ RISALITA ricorsiva:
         - Ogni chiamata restituisce una lista di partizioni.
         - Qui le uniamo con concat per formare l'elenco completo.
    */
    let partizioniSx = partition_until(sx, depth - 1);
    let partizioniDx = partition_until(dx, depth - 1);

    /*
    4) COMBINAZIONE DEI RISULTATI:
       - partizioniSx è un array di partizioni della parte sinistra
       - partizioniDx è un array di partizioni della parte destra
       - vogliamo un unico array che contenga tutte le partizioni,
         prima quelle della sinistra, poi quelle della destra.

       concat costruisce un nuovo array concatenando i due
    */
    return partizioniSx.concat(partizioniDx);
}

/*
NOTE sulla ricorsione di partition_until(arr, depth)
----------------------------------------------------

Obiettivo della funzione:
- Dividere ricorsivamente un array in due metà
- Fermarsi quando la profondità raggiunge 0 oppure l'array è vuoto
- Restituire tutte le "foglie" delle divisioni sotto forma di lista di array

Schema ricorsivo:
1) DISCESA:
   Ogni volta che depth > 0:
     - divido l'array in due parti: sx e dx
     - chiamo partition_until(sx, depth-1)
     - chiamo partition_until(dx, depth-1)
   Questo FA SCENDERE la ricorsione nei livelli successivi.

2) RISALITA:
   Quando depth arriva a 0:
       → restituisco [arr] (non lo divido più)
   Ogni livello superiore riceve:
       partizioniSx = [...lista di array...]
       partizioniDx = [...lista di array...]
   e le unisce con concat, costruendo la lista completa.

Questo schema è identico in tutti gli algoritmi "divide-et-impera":
- dividi
- risolvi ricorsivamente le parti
- combina i risultati */