window.cipher = { 
  encode: (offset, message) => {
    let result ="";
    for (var i = 0; i < message.length; i++)  {// for (inicio; condición de parada; incrementador)
      let toAsciiCode = message.charCodeAt(i); // determinar el caracter en código ascii
   
      if(toAsciiCode > 64 && toAsciiCode < 91){      //condicion para mayúsculas
       result += String.fromCharCode((toAsciiCode - 65 + parseInt(offset)) % 26 + 65);
      } else if(toAsciiCode > 96 && toAsciiCode < 123){  //condición para minúsculas
       result += String.fromCharCode((toAsciiCode - 97 + parseInt(offset)) % 26 + 97);
      } else 
       result += String.fromCharCode(toAsciiCode);  //todos los demás caracteres
     }
    return result;
    },
  decode: (offset2, message2) => {
    let resultDecode ="";
    
    for (var i = 0; i < message2.length; i++)  {
      let toAsciiCode = message2.charCodeAt(i);

      if(toAsciiCode > 64 && toAsciiCode < 91){      //condición para mayúsculas
        resultDecode += String.fromCharCode((toAsciiCode - 65 - parseInt(offset2) + 26) % 26 + 65);
      } else if(toAsciiCode > 96 && toAsciiCode < 123){  //condición para minúsculas
        resultDecode += String.fromCharCode((toAsciiCode - 97 - parseInt(offset2) + 26) % 26 + 97);
      } else 
        resultDecode += String.fromCharCode(toAsciiCode); 
      }
    return resultDecode;
  }
}