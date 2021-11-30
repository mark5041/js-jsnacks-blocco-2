// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari


let valore;
let num1 = [];
let i = 0;

do
{
    num1[i] = parseFloat(prompt("inserisci un numero"));
    if(isNaN(num1[i]))
    {
        i--;
    }
    i++;
    
}
while(i < 10)

function sommaNumeri(number)
{
    let i = 0;
    let somma = 0;
    do
    {
        if(i % 2 != 0)
        {
            somma += number[i];
            console.log(number[i]);
        }
        i++;
    }
    while(i < number.length)
    return somma;
}

alert(sommaNumeri(num1));


