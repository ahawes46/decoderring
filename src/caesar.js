// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    
    if(!shift || shift==0 || shift<-25 ||shift>25)
      return false;
    
   
    let newString=[];
    input=input.toLowerCase(); //ignore capital letters
    
    
    
     let alphabet="abcdefghijklmnopqrstuvwxyz".split("");
    
    if(encode==false){ //for decoding message, just change sign of shift (pos or neg)
      shift=-shift;
    }
    
    
    for(let i=0;i<input.length;i++){
      for(let j=0;j<alphabet.length;j++){
        
        if(input[i]==alphabet[j]){ //shifting happens here
          
          if(j+shift<alphabet.length && j+shift>=0){//no edge case
          newString.push(alphabet[j+shift]); 
          break; //found match, added letter to new array(string), move to next letter of input
          }
          else if (j+shift>=alphabet.length){ //end of alphabet start at beginning
            let index=alphabet.length-j;
            newString.push(alphabet[shift-index]);
            break;
          }
          else if(j+shift<0){//beginning of alphabet (neg shift) go to end
            newString.push(alphabet[alphabet.length+(j+shift)]);
            break;
          }
        }
        
     else if(j==alphabet.length-1 && input[i]!=alphabet[j]){ //input[i] isn't a letter, add it as is
          newString.push(input[i]);
       break;
        }
          
      }
      
    }
   
    return newString.join("").toString();
    }
    
   
  

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
