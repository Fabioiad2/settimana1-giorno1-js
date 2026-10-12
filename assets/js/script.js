/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto ogni commento.
- Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
- In alternativa: nel terminale, `node script.js`.
- Cerca nei motori di ricerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato stamattina.
*/

/* ESERCIZIO 1 — Saluto personalizzato
   Crea due const "nome" e "cognome".
   Stampa con un template literal: "Ciao, mi chiamo Mario Rossi."
*/
const NOME = "Fabio"
const COGNOME = "Iadicicco"
console.log(`Ciao mi chiamo ${NOME} ${COGNOME}`)

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2 — Calcolatrice base
   Due numeri "a" e "b".
   Stampa le 6 operazioni nel formato "10 + 3 = 13":
   somma, differenza, prodotto, divisione, resto (%), elevamento (**).
*/
let a = 10
let b = 3
let somma = a + b
let differenza = a - b
let prodotto = a * b
let divisione = a / b
let resto = a % b
let elevamento = a ** b

console.log(somma,"somma")
console.log(differenza,"differenza")
console.log(divisione,"divisione");
console.log(prodotto,"prodotto");
console.log(resto,"resto");
console.log(elevamento,"elevamento");




/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3 — Età nel tempo
   const annoNascita (scegli un anno).
   const annoCorrente = 2026.
   Stampa: età oggi, età tra 10 anni, età 5 anni fa.
   Formato: "Tra 10 anni avrai 35 anni."
*/
const ANNONASCITA = 2007
const ANNOCORRENTE = 2026
let anniAttuali = 2026 - 2007
let etaTra10anni = anniAttuali + 10
let eta5AnniFa = anniAttuali - 5
console.log(`oggi hai ${anniAttuali}`)
console.log(`tra 10 anni avrai ${etaTra10anni}`)
console.log(`5 anni fa avevi ${eta5AnniFa}`)

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4 — Maggiorenne?
   Variabile "eta".
   Calcola "maggiorenne" come "eta >= 18".
   Stampa: "Età: 25 — Maggiorenne: true"
*/
const MAGGIORENNE = 18
let eta = 25
const ISMAGGIORENNE = eta > 18
console.log(`ismaggiorenne ${ISMAGGIORENNE}`);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5 — Tipo del valore
   Cinque variabili: una string, una number, una boolean, una null, una undefined.
   Stampa per ognuna: "nome è di tipo: string" usando typeof.
   In commento sopra la variabile null: spiega cosa ritorna typeof null e perché.
*/
let user = "nome"
let number = 1
let booleano = true
let article = null
let inputform = undefined
console.log("tipo user:",typeof user);
console.log("tipo number:",typeof number);
console.log("tipo booleano:",typeof booleano);
console.log("tipo article:",typeof article);
console.log("tipo inputform:",typeof inputform);


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6 — === vs ==
   numero = 5
   stringa = "5"
   Stampa il risultato di "numero == stringa" e "numero === stringa".
   In commento, una riga: spiega la differenza.
*/
let nString = "5"
let nNumber = 5
console.log(nString == nNumber,"è true perchè perchè entrambi anno lo stesso valore 5 anche se non sono dello stesso tipo ")
console.log(nString === nNumber,"è false perchè non sono realmente uguali infatti il tipo è differente quindi non sono ===")

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7 — Conversioni implicite
   Senza eseguire il codice, prevedi in commento il risultato di queste 4 espressioni.
   Poi stampale per verificare.
   - "5" + 3
   - "5" - 3
   - true + 1
   - "10" * "2"
*/
let fiveString = "5";
let threeNumber = 3;
const dieci = 10
console.log(fiveString + threeNumber); // concatenazione di stringhe
console.log(fiveString - threeNumber) // 2
console.log(true + 1 ) // 2
console.log(dieci * "2") // 20

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8 — Classificazione numero
   Variabile "n".
   Usando % e operatori logici, stampa tre righe:
   "n è pari: true/false"
   "n è divisibile per 3: true/false"
   "n è pari E divisibile per 3: true/false"
*/
const n1 = 8;
let pari = n1 % 2 === 0 // se zero è pari altrimenti no.
//  aggiungo l'operatore === per avere il valore booleano (true/false) 
let divisibilePerTre = n1 % 3 === 0; // il resto di n1 è ugale a 0 (quindi è divisibile per 3)
console.log(pari,"is pari");
console.log(divisibilePerTre,"è Divisibile per 3 ?")
console.log(pari && divisibilePerTre,"è pari e divisibile per 3")

/* SCRIVI QUI LA TUA RISPOSTA */

/* --EXTRA-- ESERCIZIO 9 — Triangolo
   Tre const "a", "b", "c" (lunghezze dei lati).
   Calcola perimetro.
   Determina il tipo: "equilatero", "isoscele", "scaleno".
   Stampa: "Triangolo isoscele, perimetro 15"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let latoA = 2
let latoB = 3
let latoC = 4
let perimetro = latoA + latoB + latoC



if (latoA == latoB && latoB == latoC) {
   console.log("triangolo equilatero "+ "perimetro "+ perimetro)

}
else if(latoA !== latoB && latoB !== latoC && latoA !== latoC){
   console.log("triangolo scaleno "+ "perimetro " + perimetro)
}
else if(latoA == latoB || latoB == latoC || latoA == latoC){
   console.log("isoscele "+ "perimetro "+ perimetro)}

   
