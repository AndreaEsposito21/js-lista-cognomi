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

//Posizione utente:
var posizioneUtente = -1;


// - Versione For ------------------------- - Da scommentare per provare -
// for ( i = 0; i < listaCognomi.length; i++) {
    
//     if (cognomeUtente == listaCognomi[i]) {
        
//         posizioneUtente = i + 1;
//     }
    
// }


// - Versione While ------------------------- - Da scommentare per provare -
// var i = 0;

// while ( i < listaCognomi.length ) {
  
//     if (cognomeUtente == listaCognomi[i]) {
        
//         posizioneUtente = i + 1;
//     }

//     i++;
// }

// Numero Posizione Utente
if ( posizioneUtente == -1 ) {
    alert("Utente non trovato");
} else {
    alert("Sei il numero: " + posizioneUtente);
}

console.log("Sei il numero: " + posizioneUtente);