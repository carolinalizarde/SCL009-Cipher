window.cipher = {
    /* Acá va tu código */
  encode: (mensaje1,llave) => {
  //recorre el mensaje1 
    let codigocifrado="";
    for(let i=0; i <mensaje1.length; i++){
    //console.log(mensaje1[i]);
    
  //transformar a codigo ascii
     let n= mensaje1[i].charCodeAt();
     //console.log(n);

  //AHORAAAAAA CODIFICAAAA pafavaaaa 
     let ncodigo= (n-65+llave)%26+65;
     //console.log(ncodigo);

  //cambiar de numero a letra 
     let naletra= String.fromCharCode (ncodigo);
     //console.log(naletra);
  //
     codigocifrado=codigocifrado+=naletra;
     //console.log(codigocifrado);
    }

     return codigocifrado; 
    
      
  
  },

  decode: (mensaje1,llave) => {
    /* Acá va tu código */
  
  //recorre el mensaje1 
    let codigodescifrado="";
    for( let i=0; i < mensaje1.length; i++)
    {
    //console.log(mensaje1[i]);
    
  //transformar a codigo ascii
     let n= mensaje1[i].charCodeAt();
     //console.log(n);

  //AHORAAAAAA DECODIFICAAAA pafavaaaa 
     let ncodigo= (n+65-llave)%26+65;
     //console.log(ncodigo);

  //cambiar de numero a letra 
     let naletra= String.fromCharCode(ncodigo);
     //console.log(naletra);
  //
    
     codigodescifrado=codigodescifrado+=naletra
     //console.log(codigodescifrado);
    }
     return codigodescifrado; 
    
      }
    };
