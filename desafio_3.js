
let listaSim = [];
let listaNao = [];
let nome = "";
let vencedor = "";
let lista = [];
lista.push('Joao NAO');
lista.push('Carlos SIM');
lista.push('Abner NAO');
lista.push('Samuel SIM');
lista.push('Ricardo NAO');
lista.push('Abhay SIM');
lista.push('Samuel SIM');
lista.push('Andres SIM');
lista.push('Roberto NAO');
lista.push('Carlos SIM');
lista.push('Samuel SIM');
lista.push('Samuel SIM');
lista.push('Abhay SIM');
lista.push('Aline SIM');
lista.push('Andres SIM');
lista.push('FIM');
let c = 0;
while(true){
  let nome = lista[c++];
  if ( nome == 'FIM') break;
  let entrada = nome.split(' ');
  if ( entrada[1] == 'SIM' && !listaSim.includes(entrada[0]) ){
    listaSim.push(entrada[0]);
  }
  if( entrada[1] == 'NAO' && !listaNao.includes(entrada[0]) )  {
    listaNao.push(entrada[0]);
  }
}

let nao = listaNao.sort((a, b)=>{
  if ( a > b){
    return 1;
  } else if ( a < b){
    return -1;
  }
  return 0;
});

function retornaVencedor(listaSim){
  let vencedor = listaSim[0];
  for(let i = 1; i < listaSim.length; i++){
    if ( vencedor.length < listaSim[i].length  ){
      vencedor = listaSim[i];
    }
  }
  return vencedor;
}

vencedor = retornaVencedor(listaSim);

let sim = listaSim.sort((a,b)=>{
  if ( a > b){
    return 1;
  } else if ( a < b){
    return -1;
  }
  return 0;
})

for(let i = 0; i < sim.length; i++){
  console.log(sim[i]);
}
for(let i = 0; i < nao.length; i++){
  console.log(nao[i]);
}
console.log();
console.log(`Amigo do Pablo: ${vencedor}`);



