/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). 
Questo richiederà un minimo di ricerca. */


// INPUT
const distance = parseInt(prompt("Quanti Km devi percorrere?"));
const age = parseInt(prompt("Quanti anni hai?"));
console.log(distance, age);


// ELABORAZIONE
const ticketPrice = distance * (0.21);
console.log(ticketPrice);


// OUTPUT

if (age >= 65) {
    let price = (ticketPrice * 0.6).toFixed(2);
    console.log(price);
    document.getElementById("finalPrice").innerHTML = "Il tuo biglietto costa: " + price + "€";
}
else if (age < 18) {
    let price = (ticketPrice * 0.8).toFixed(2);
    console.log(price);
    document.getElementById("finalPrice").innerHTML = "Il tuo biglietto costa: " + price + "€";
}
else {
    let price = (ticketPrice).toFixed(2);
    console.log(price);
    document.getElementById("finalPrice").innerHTML = "Il tuo biglietto costa: " + price + "€";
}