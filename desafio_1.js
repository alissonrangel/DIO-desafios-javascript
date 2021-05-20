//let n = parseInt(gets());

let entradaNumeros = [];
//let numeros = [];
let objeto = {};

let numeros = [1,5,6,1,3,6,6,8];

for(let i = 0 ; i < numeros.length ; i++){
  //let numero = parseInt(gets());
  entradaNumeros.push(numeros[i]);
  if ( Object.keys(objeto).includes(`${numeros[i]}`) ){    
    let aux = objeto[numeros[i]];
    console.log("true "+aux);
    aux++;
    objeto[numeros[i]] = aux;
  } else {
    console.log("false "+ numeros[i]);
    objeto[numeros[i]] = 1;
  }
}
console.log("objeto: "+ Object.keys(objeto));

console.log(objeto);
for (let i = 0; i < Object.keys(objeto).length; i++) {
  let key = Object.keys(objeto)[i];
  let value = objeto[key];
  console.log(`${key} aparace ${value} vez(es)`);
}


