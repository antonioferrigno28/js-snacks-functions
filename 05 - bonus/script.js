/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = "Mario";

// Dichiara la funzione qui.
//ELABORAZIONE CLASSICA
function hello(name) {
  //controllo se è prima delle 13
  if (new Date().getHours() < 13) {
    //ritorno buongiorno con il nome concatenato
    return `Buongiorno ${name}`;
    //ALTRIMENTI SE È PRIMA DELLE 17
  } else if (new Date().getHours() < 17) {
    //ritorno buon pomeriggio con il nome concatenato
    return `Buon pomeriggio ${name}`;
    //ALTRIMENTI
  } else {
    //ritorno buonasera con il nome concatenato
    return `Buonasera ${name}`;
  }
}

// Invoca la funzione qui e stampa il risultato in console

console.log(hello(name));

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.
