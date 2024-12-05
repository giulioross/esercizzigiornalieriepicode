/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function area(l1,l2) {
    return l1*l2  
}
const resultarea= area(10,5);
console.log("l area del rettangolo è : "+resultarea)
/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazySum= function (num1,num2) {
    if (num1===num2) {
        return (num1+num2)*3
    }
    return num1+num2
    
}

const resultcrazysum= crazySum(10,5);
console.log("la seomma è : "+ resultcrazysum)
/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSta*/
const crazyDiff=(num)=>{
    if (num>19 ){ 
    return math.abs(num-19)*3
}
return num -19

}
const resultcrazydiff = crazyDiff(10);
console.log("la differenza è : "+ resultcrazydiff)
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function boundary(n) {
    if (n>=20&&n<=100||n===400 ) {
        return true
   
    }else{return false}
    
}
const resultbou= boundary(30);
console.log("il risultato è:"+ resultbou)
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const epify = function (str){
    if(str.startsWit("EPICODE")){
        return str 
    }
    return "EPICODE"+ str
}
const resultepify= epify("test");
console.log ("il risultato è:"+resultepify)



/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function check3and7(num5){
    if (num5>0 && (num5%3===0|| num5%7===0)) {
    return true  
} else{
    return false
}
}
const resultchek= check3and7(20)
console.log("il risultato è :"+resultchek)


/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function reverseString(str) {
  
   let strreverse= arrstr.reverse();
   return strreverse.join("")
    
}  
const resultreverse= reverseString("epicode")
console.log("il risultato è:"+resultreverse)

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const upperFirst= function (str) {
    let arrstr= str.split(" ")
    let stringacompleta=[]
    for (let i = 0; i < arrstr.length; i++) {
        let pippo= arrstr[i];
        let firstword=pippo.charAt(0).toUpperCase()
        let parolaSenzaLaPrimaLettera= pippo.slice(1)
        let parolafinale= firstword+parolaSenzaLaPrimaLettera
        stringacompleta.push(parolafinale)
    }  
    return stringacompleta.join(" ")
    }
const resultupper= upperFirst("ciao a tutti")
console.log("il risultato è:"+resultupper)

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function cutString(cucu) {
    
    cucu.slice(0,3)
}let cucu="cucu"
console.log(cucu)
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
