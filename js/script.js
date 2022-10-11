// Consegna:
// Scrivi un programma che stampi in console i numeri da 1 a 100.
// Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
//
// BONUS 1
// Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.
// BONUS 2
// Applica uno stile differente a seconda del valore dell'indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.

// Scrivo in console numeri da 1 a 100
// Per ogni numero
//  Se multimplo di 3 e di 5
    // Stampo FizzBuzz
//  ALTRIMENTI SE multiplo di 3
    // Stampo Fizz
//  ALTRIMENTI SE multiplo di 5
    // Stampo Buzz
//  Altrimenti
    // Stampo numero

const row = document.querySelector(".row");

for (let i = 1; i <= 100; i++) {
    let result = i;
    let numberClass = ""; 
    if (i % 3 === 0 && i % 5 === 0) {
        result = "FizzBuzz";
        numberClass = "bg-green";
    } else if (i % 3 === 0) {
        result = "Fizz";
        numberClass = "bg-pink";
    } else if (i % 5 === 0) {
        result = "Buzz";
        numberClass = "bg-blue";
    } 

    // Output
    // console.log(result);
    const box = document.createElement("div");
    box.innerHTML = result;
    box.classList.add("box");
    if (numberClass !== "") {
        box.classList.add(numberClass);
    }
    box.addEventListener("click", function() {
        alert(result);
    });
    row.append(box);

    // // const element = `<div class="box ${numberClass}">${result}</div>`;
    // const element = '<div class="box ' + numberClass + '">' + result + '</div>';
    // row.innerHTML += element;
}

