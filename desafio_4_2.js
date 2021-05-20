let entradaNumeros = [];
let numeros = [];
let objeto = {};

let resposta = '';

function retiraRepeticao(string){
  let resposta = '';
  let substr = "";
  let string2 = "";
  let substr3 = "";
  let arrayAux = [];
  let substrReverse = [];
  let max = 0;
  let arrayString = string.split('');
  let c = 1;
  for(let i = arrayString.length - 1 ; i >= 0 ; i--){
     
    console.log("ANTES000: " + arrayString[i] + "i: "+ i);
    substrReverse.unshift(arrayString[i]);
    //arrayAux = substrReverse.reverse();
    substr = substrReverse.join('');
    //substrReverse = substr.reverse();
    console.log("ANTES: " + string + " reverse: "+ substr);
    max = substr.length;

    substr3 = recursiva(string, substr, string);
    //string = substr3;
    //console.log("DEPOIS: " + string + " substr: "+ substr);
    if (substr3.includes(substr)){
      
    } else {
      console.log('ENTROU ENTROU');
      continue;
    } 
  }
  substr = substr3;

  return substr;
  if (substr.length == string.length  ){
    return string;
  } else {
    console.log("substr: " + substr);
    resposta = string.substr(0, (string.length - substr.length));
    return resposta;
  }
}

function recursiva(string1, substring, string2) {
  // let arrayDeString1 =[];
  // let sub = substring;
  // let str = string1;
  // for (let i = 0; i < array.length; i++) {    
  //   arrayDeString1.push(str.substr((-1 * substring.length))); 
  //   if (str.length - substring.length < 0){
  //     break;
  //   } else {
  //     str = str.substr(0, (str.length - substring.length));
  //   }
  //   console.log("FOR "+str);
  // }
  

  console.log("AQUIDADAREC");
  if(string1 == substring){
    console.log('IF1: '+string1+' substring: '+substring);    
    return string1;
  }
  if (string1.includes(substring)){
    console.log('IF2: '+string1+' substring: '+substring);    
    return recursiva(string1.substr(0,(string1.length - substring.length)), substring, string1);
  } else {
    console.log('IF3: '+string2+' substring: '+substring);
    return string2;
  }
}

while(true){
  let palavra = 'alissoratorato';
  if(!palavra) break;
  
  resposta = retiraRepeticao(palavra);
  console.log('REsposta: '+resposta);
  break;
}

