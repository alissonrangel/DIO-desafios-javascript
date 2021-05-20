

function retiraRepeticao(string){
  
  let arrayString = [];
  let substring = '';
  let retorno = '';
  let arrayAux = [];
  let retornos = [];

  arrayString = string.split(''); 

  for(let i = arrayString.length - 1 ; i >= 0 ; i--){
    
    arrayAux.unshift(arrayString[i]);
    substring = arrayAux.join('');

    retorno = recursiva(string, substring, string);

    if ( retorno != string){
      retornos.push(retorno);
    }
  }
  let aux = { tam: 50, index: -1};
  for (let i = 0; i < retornos.length; i++) {
    if( retornos[i].length < aux.tam){
      aux.tam = retornos[i].length;
      aux.index = i;
      console.log("aux-tam "+aux.tam);
      
    }
  }
  console.log(retornos);
  console.log(aux.index);
  
  return retornos[aux.index];
  
}

function recursiva(string1, substring, string2) {
  
  let retiraSubstring = string1.substr(0,(string1.length - substring.length));
  let antesDaRepeticao = retiraSubstring.substr(0,(retiraSubstring.length - substring.length));
  let primeiraRepeticao = retiraSubstring.substr((-1 * substring.length));
  console.log(retiraSubstring +' - '+ antesDaRepeticao + ' - ' + primeiraRepeticao + ' - ' + substring);
  
  if ( primeiraRepeticao === substring){
    return recursiva(retiraSubstring, substring, retiraSubstring)
    //return retiraSubstring;
  } else {
    return string1;
  }
}

while(true){
  let palavra = 'aaaaabb';
  if(!palavra) break;
  
  resposta = retiraRepeticao(palavra);
  console.log('REsposta: '+resposta);
  break;
}