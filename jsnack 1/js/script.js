// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista
// di cognomi, Gatsby vuole generare una falsa lista di invitati.

let nome = ['luca', 'giovanni', 'enrico', 'vittorio', 'umberto', 'matteo'];
let cognome = ['ferrari', 'armani', 'emanuele', 'benedetto', 'leopardi', 'mattei'];

let max = parseInt(prompt("inserisci il numero di invitati"));

let genera = document.querySelector('.btn');

function ListaInvitati(number, array1, array2)
{
    let i = 0
    let invitati = [];
    while(i < number)
    {
        let names = array1[Math.floor(Math.random() * array1.length)] + ' ' + array2[Math.floor(Math.random() * array2.length)];
        if(!invitati.includes(names))
        {
            invitati[i] = names;
            i++;
        }
        
    }
    return invitati;
}

genera.addEventListener('click', 
    function()
    {
        let lista = document.querySelector(".lista");
        let ArrayInvitati = ListaInvitati(max, nome, cognome);
        for(let i = 0; i < ArrayInvitati.length; i++)
        {
                lista.innerHTML += `<li> ${ArrayInvitati[i]} </li>`;
        }
    }
);


