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
} else if (userAge > overDiscount){
    lastPrice = firstPrice - overDiscount;
} else{
    lastPrice = lastPrice - 0;
}
console.log(lastPrice);


