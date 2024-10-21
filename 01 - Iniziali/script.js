/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];
//dichiaro un nuovo array dove andranno inserite le iniziali
const firstLetterArray = [];

// Dichiara la funzione qui.

//ELABORAZIONE ARROW FUNCTION
const firstLetter = (array) => {
  //PER i che parte da 0 fino ad arrivare alla lunghezza dell'indice massimo (lunghezza array -1 OPPURE minore di lunghezza array) aumenta i
  for (let i = 0; i < array.length; i++) {
    // aggiunge nell'array firstLetterArray la prima lettera di ogni parola
    firstLetterArray.push(array[i][0]);
  }
};

//ELABORAZIONE CLASSICA
// function firstLetter(array) {
//PER i che parte da 0 fino ad arrivare alla lunghezza dell'indice massimo (lunghezza array -1 OPPURE minore di lunghezza array) aumenta i
//   for (let i = 0; i < array.length; i++) {
// aggiunge nell'array firstLetterArray la prima lettera di ogni parola
//     firstLetterArray.push(array[i][0]);
//   }
// }

// Invoca la funzione qui e stampa il risultato in console

firstLetter(names);
console.log(names);
console.log(firstLetterArray);

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
