// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    let newString=[];
    
    if(!alphabet) //alphabet param not given, return false
      return false;
    
    
    
    input=input.toLowerCase(); //capitals ignored
    alphabet=alphabet.toLowerCase();
  
    
    let givenAlphabet=alphabet.split(""); //making param alphabet into array
    
    
    if(givenAlphabet.length!=26) //must be 26 characters long
      return false;
    
    for(let i=0;i<givenAlphabet.length/2;i++){ //each character must be unique or return false
      for(let j=givenAlphabet.length-1;j>givenAlphabet.length/2;j--){
        if(givenAlphabet[i]==givenAlphabet[j])
          return false;
      }
    }
    
    let normalAlphabet=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    
   
    for(let k=0;k<input.length;k++){ //going through the word/input
    
      if(encode==true){ 
      for(let m=0;m<normalAlphabet.length;m++){ //going through normal alphabet to find index of input[k]
       
       
        if(input[k]==normalAlphabet[m]){ //found index
          
          newString.push(givenAlphabet[m]);
         break;
        }
        
         if(input[k]==" "){ //keep spaces as is
          newString.push(" ");
          break;
        }
        
         if(m==normalAlphabet.length-1){ //letter hasn't been found so it must be a character
          newString.push(input[k]);
        break;
        }
      }
    }
      else{
        for(let m=0;m<givenAlphabet.length;m++){ //going through normal alphabet to find index of input[k]
            
        if(input[k]==givenAlphabet[m]){ //found index
          
          newString.push(normalAlphabet[m]);
         break;
        }
        
         if(input[k]==" "){ //keep spaces as is
          newString.push(" ");
          break;
        }
        
         if(m==givenAlphabet.length-1){ //letter hasn't been found so it must be a character
          newString.push(input[k]);
        break;
        }
      }
      }
    }
      
    
    return newString.join("").toString();
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
