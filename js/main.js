// Dichiarazione variabili
const underDiscountAge = 18;
const overDiscountAge = 65;
let lastPrice=``;
console.log(underDiscountAge, overDiscountAge, lastPrice);

// Chiedi l'età del passeggero
let userAge = prompt(`Inserisci la tua età`);
console.log(userAge);

// Chiedi numero di km da percorrere
let tripLenght = prompt(`Inserisci km del viaggio`);
console.log(tripLenght);

// Calcola prezzo biglietto in base a a tariffa e km
let tripCostKm= 0.21;
console.log(tripCostKm);
let firstPrice= tripLenght * tripCostKm;
console.log(firstPrice);

// Calcola sconto in base a fascia di età
let underDiscount = (firstPrice * 20) / 100;
console.log(underDiscount);
let overDiscount = (firstPrice * 40) / 100;
console.log(overDiscount);

// Applica sconto in base a fascia d'età
if (userAge < underDiscountAge){
    lastPrice = firstPrice - underDiscount;
} else if (userAge > overDiscountAge){
    lastPrice = firstPrice - overDiscount;
} else{
    lastPrice = firstPrice - 0;
}
lastPrice = lastPrice.toFixed(2);
console.log(lastPrice);
underDiscount = underDiscount.toFixed(2);
overDiscount = overDiscount.toFixed(2);

// Stampa Risultati
document.getElementById(`user_age`).innerHTML = userAge;
document.getElementById(`trip_lenght`).innerHTML = tripLenght;
document.getElementById(`trip_km_cost`).innerHTML = tripCostKm;

if (userAge < underDiscountAge){
    document.getElementById(`discount`).innerHTML = underDiscount;
} else if (userAge > overDiscountAge){
    document.getElementById(`discount`).innerHTML = overDiscount;
} else {
    document.getElementById(`discount`).innerHTML = `Nessuno sconto`;
}

document.getElementById(`last_price`).innerHTML = lastPrice;


