const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

let pari = nums.filter ((nums)=>{
return nums % 2 === 0;
})

console.log(`I numeri pari dentro l'array sono: ${pari}`)