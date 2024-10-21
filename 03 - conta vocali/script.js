/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = "javascript";

//dichiaro un nuovo array dove sono inserite le vocali della parola
const wordArrayVowelsLetters = [];

// Dichiara la funzione qui.

function countVowels(word) {
  //dichiaro un contatore per il numero di vocali che trovo

  //dichiaro un nuovo array dove sono inserite le vocali esistenti
  const vocali = ["a", "e", "i", "o", "u"];
  //PER i che parte da 0 fino ad arrivare alla lunghezza dell'indice massimo (lunghezza array -1 OPPURE minore di lunghezza array) aumenta i
  for (let i = 0; i < word.length; i++) {
    //SE la parola in posizione i contiene una lettera presente nell'array vocali
    if (vocali.includes(word[i])) {
      // aggiunge nell'array wordArray la lettera
      wordArrayVowelsLetters.push(word[i]);
    }
  }
}

// Invoca la funzione qui e stampa il risultato in console

countVowels(word);
console.log(word);
console.log(wordArrayVowelsLetters);

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
