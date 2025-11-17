function dronePiuVicino(a, p, epsilon) {
    if (a.length === 0) {
        return "array a vuoto" //controllo subito che larray non sia vuoto
    }

    function disEuclidea(d1, d2) { // creo una funzione per calcolare la distanza euclidea, che prenderà 2 dizionari come input.

        let deltaX = (d1.x - d2.x) ** 2; //creo 3 variabili delta rispettivamente x y z alle quali assgno i valori delle chiavi che saranno le stesse sia per array droni che per dizionario punto.(chiave x chiave y e chiave z)
        let deltay = (d1.y - d2.y) ** 2; //faccio il quadrato di ogni delta
        let deltaz = (d1.z - d2.z) ** 2;

        let distanza = Math.sqrt(deltaX + deltay + deltaz); //creo una variabile distanza a cui assegno la radice quadrata (math.sqrt)dei 3 delta calcolati precedentemente
        return distanza
    }
    let distanza_ap = [];// creo un array vuoto che riempiro con le distanze euclidee dei droni e del punto
    for (let i = 0; i < a.length; i++) { //itero sull array a delle posizioni dei droni dalla posizione 0 all ultima a passo +1
        let droni = a[i];// variabile drone a cui assegno l indice iesimo dell array a
        let dist_droni_punto = disEuclidea(droni, p);// la variabile dist_droni_punto mi serve per salvare la distanza euclidea di droni(a[i]) e punto p
        distanza_ap.push(dist_droni_punto)// a questo punto pusho dist_droni_punto nellarray vuoto.in questo modo preservo anche l ordine delle posizioni dei droni nello spazio, originali dell array a

    }

    let dronepiuvicino = 0;//questa variabile mi servirà per salvarmi il drone piu vicino al punto p nel prossimo il ciclo for
    let migliordistanza = distanza_ap[0];// prendo per migliore la prima distanza in posizione 0,col ciclo poi se ne troverò una migliore la sostituirò

    for (let i = 1; i < distanza_ap.length; i++) { //itero su l array dalla posizione 1, la 0 l ho gia presa come la migliore da confontare.
        let dis = distanza_ap[i]; // come fatto nel ciclo prima assegno a dis l indice iesimo dell array delle distanze che ho creato in precedenza
        let differenza = Math.abs(dis - migliordistanza);// uso la funzione math.abs per il valore assolutto delle distanze per evitare di fare l ennesimo ciclo for o un conizionale if else per trovare valore assoluto

        if (differenza < epsilon) {// condizionale per vedere se la differenza è minore di epsilon o maggiore
            //NB in questo. caso lascio appositamente il comando vuoto cosicche si valuti prima il caso in cui ci fosse una differenza < di epsilon, se ci fosse lascio tutto così.lordine è comunque rispettato e viene preso l indice precedente.
        }

        else if (dis < migliordistanza) { //se la distanza del drone dal punto in iesima posizione è minore della distanza migliore
            migliordistanza = dis;//aggiorno distanza migliore con distanza piu piccola trovata
            dronepiuvicino = i; //aggiorno il drone piu vicino con l elemento i trovato in iesima posizione
        }

    } return a[dronepiuvicino]  //ritorno elemento di a piu vicino al punto



}