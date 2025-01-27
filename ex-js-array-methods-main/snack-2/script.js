const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'

let nomeOggetto = '';

people.forEach((element, index) => {

  nomeOggetto += (index === 0 ? '' : ', ') + element.name;

});

console.log(nomeOggetto);