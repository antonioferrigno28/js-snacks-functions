/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
const firstLetterArray = [];

// Dichiara la funzione qui.
//funzione che accetta come parametri un array di stringhe ed una lettera
function firstLetter(array, letter) {
  //PER i che parte da 0 fino ad arrivare alla lunghezza dell'indice massimo (lunghezza array -1 OPPURE minore di lunghezza array) aumenta i
  for (let i = 0; i < array.length; i++) {
    //SE la parola in posizione i inizia con la stessa lettera di "letter"
    if (array[i][0] === letter) {
      // aggiungi nell'array firstLetterArray la parola
      firstLetterArray.push(array[i]);
    }
  }
}

// Invoca la funzione qui e stampa il risultato in console
firstLetter(names, "A");
//stampa risultati
console.log(names);
console.log(firstLetterArray);

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
