// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista
// di cognomi, Gatsby vuole generare una falsa lista di invitati.

let nome = ['luca', 'giovanni', 'enrico', 'vittorio', 'umberto', 'matteo'];
let cognome = ['ferrari', 'armani', 'emanuele', 'benedetto', 'leopardi', 'mattei'];

let max = parseInt(prompt("inserisci il numero di invitati"));

let genera = document.querySelector('.btn');

genera.addEventListener('click', 
    function()
    {
        let lista = document.querySelector(".lista");
        let generate_name = [];
        for(let i = 0; i < max; i++)
        {
            let names = nome[Math.floor(Math.random() * nome.length)] + ' ' + cognome[Math.floor(Math.random() * cognome.length)];
            if(!generate_name.includes(names))
            {
                generate_name[i] = names;
                lista.innerHTML += `<li> ${generate_name[i]} </li>`;
            }
            else
            {
                i--;
            }
        }
    }
);


