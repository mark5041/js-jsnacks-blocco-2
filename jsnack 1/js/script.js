// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista
// di cognomi, Gatsby vuole generare una falsa lista di invitati.

let nome = ['luca', 'giovanni', 'enrico', 'vittorio', 'umberto', 'matteo'];
let cognome = ['ferrari', 'armani', 'emanuele', 'benedetto', 'leopardi', 'mattei'];

let genera = document.querySelector('.btn');

genera.addEventListener('click', 
    function()
    {
        alert(nome[Math.floor(Math.random() * nome.length)] + ' ' + cognome[Math.floor(Math.random() * cognome.length)])
    }
);


