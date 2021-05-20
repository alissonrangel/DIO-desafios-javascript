let entradaNumeros = [];
let numeros = [];
let objeto = {};

let resposta = '';

function retiraRepeticao(string){
  let resposta = '';
  let substr = "";
  let substr2 = "";
  let substr3 = "";
  let arrayAux = [];
  let substrReverse = '';
  for(let i = string.length - 1 ; i >= 0 ; i--){
    substr += string[i];
    arrayAux = substr.split('');
    substrReverse = arrayAux.reverse().join('');
    //substrReverse = substr.reverse();
    console.log("ANTES: " + string + " reverse: "+ substrReverse);
    
    if ( string.includes(substrReverse) ){
      console.log("subsss: "+substrReverse);
      substr2 = substrReverse;
      let str = string.substr(0,(string.length - substr2.length));
      console.log("akdkad: "+ str);      
      if (str.includes(substr2)){
        substr3 = substr2;
      } else {
        break;
      }
    } else {
      break;  
    }
  }
  substr = substr3;
  
  if (substr.length == string.length  ){
    return string;
  } else {
    console.log("substr: " + substr);
    resposta = string.substr(0, (string.length - substr.length));
    return resposta;
  }
}

while(true){
  let palavra = 'ratoratoaabbaabb';
  if(!palavra) break;
  
  resposta = retiraRepeticao(palavra);
  console.log('REsposta: '+resposta);
  break;
}

