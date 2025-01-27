const names = ['Edoardo', 'Simone', 'Francesco'];

// Stampa in console tutti i nomi
// Risultato: 'Edoardo', 'Simone', 'Francesco'
let name = '';

names.forEach((element, index) => {

name += (index === 0 ? '' : ', ') + element;

});

console.log(name);