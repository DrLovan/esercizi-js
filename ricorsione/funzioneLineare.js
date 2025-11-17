/*Si consideri un array i cui elementi possono essere o stringhe, oppure altri array dello stesso tipo (ovvero, aventi per elementi o stringhe, oppure altri array dello stesso tipo, e così via). Si scriva una funzione lineare(a) che, dato un array come descritto sopra, restituisca un array contenente le sole stringhe, nello stesso ordine in cui comparivano nell’array .*/

function lineare(a) {
    if (a.length == 0) { // caso base lunghezza array 0
        return a;
    } else {
        let arrayFinale = [];
        for (let stringa of a) { // per ogni contenuto dell indice di a (il for OF scorre i valori degli indici ≠ da for IN che scorre gli indici)
            if (typeof stringa == "string") { //controlo tipo, se è str la pusho nel array finale
                arrayFinale.push(stringa);
            } else { // se non è stringa
                arrayFinale = arrayFinale.concat(lineare(stringa)) //uso concat per aggiungere a arrayFinale il riusltato della chiamata ricorsiva su ciò che non è stringa, in questo caso array
            }
        } return arrayFinale
    }
}

lineare([["che"], "bello", ["questo", ["esercizio", "complicato"]], "qui", []])

/*
NOTE sulla ricorsione in lineare(a)
-----------------------------------

Obiettivo della funzione:
- Prendere un array che può contenere:
    * stringhe
    * altri array (che a loro volta possono avere stringhe o altri array, ecc.)
- Restituire un array con TUTTE e SOLO le stringhe, nello stesso ordine in cui compaiono.

Come funziona il ciclo for...of:
- Scorriamo ogni "elemento" di `a`.
- Ogni elemento può essere:
    1) una stringa
    2) un altro array

Cosa succede caso per caso:

1) SE l'elemento è una stringa:
   - lo aggiungiamo subito a `arrayFinale` con `push`.
   - Non c'è ricorsione in questo caso.
   - Esempio:
        elemento = "bello"
        → arrayFinale = [..., "bello"]

2) SE l'elemento NON è una stringa:
   - per come è definito l'esercizio, significa che è un ARRAY (anche annidato).
   - in questo caso NON lo aggiungiamo direttamente.
   - invece:
        - chiamiamo `lineare(stringa)` → CHIAMATA RICORSIVA
        - questa chiamata ci restituisce un array con tutte le stringhe dentro quell'array annidato.
        - poi facciamo:
              arrayFinale = arrayFinale.concat( risultatoRicorsione )
          cioè: aggiungiamo in coda a `arrayFinale` tutte le stringhe trovate in quell'array annidato.

Come funziona la ricorsione in pratica:
- "SCENDERE":
    Ogni volta che troviamo un sotto-array, chiamiamo `lineare` su quel sotto-array.
    Questo è come entrare "dentro" al sotto-array ed elaborarlo allo stesso modo.

- "RISALIRE":
    Quando una chiamata ricorsiva finisce, ritorna un array di stringhe.
    La chiamata che l'ha invocata prende questo array e lo concatena al proprio `arrayFinale`.
    Così, risalendo livello per livello, le stringhe si accumulano tutte in ordine.

Risultato finale:
- La chiamata più esterna a `lineare(...)` ha in `arrayFinale` tutte le stringhe trovate
  ovunque (anche nei sotto-array), nello stesso ordine in cui comparivano all'inizio.
*/