// Consegna:
// 1. chiedi all’utente il cognome
// 2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
// 3. stampa la lista ordinata alfabeticamente
// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova (facciamo questo in 2 versioni: col ciclo for e col while)

// Cognome Utente
var cognomeUtente = prompt("Inserire cognome");

// Lista Cognomi
var listaCognomi = [ "Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];

// Aggiunta cognome utente nell'array
listaCognomi.push(cognomeUtente);

console.log(listaCognomi);

// Stampare a schermo la lista ordinata alfabeticamente
listaCognomi.sort();

for ( var i = 0; i < listaCognomi.length; i++) {

    document.getElementById("lista-cognomi").innerHTML += '<li>' + listaCognomi[i] + '</li>';
}
console.log('alfabeticamente ordinata', listaCognomi);

//Posizione utente - Versione For

for ( i = 0; i < listaCognomi.length; i++) {

    
}


//Posizione utente - Versione While