// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here
    let newString=[];
    let square=[["a","b","c","d","e"],["f","g","h","i/j","k"],["l","m","n","o","p"],["q","r","s","t","u"],["v","w","x","y","z"]]; //creating my polybius square
    
    let alphabet="abcdefghijklmnopqrstuvwxyz".split(""); //creating array for alphabet
    input=input.toLowerCase(); //ignore capital letters
     
    
    
    if(encode){ //encoding
    
    for(let k=0;k<input.length;k++){
         for(let i=0;i<5;i++){ //going through square to find match with input[k]
      for(let j=0;j<5;j++){
        
        if(input[k]=="i"||input[k]=="j"){ //if it's i or j just manually input 42
          newString.push(42);
          k++; //go to next letter since numbers already logged
        }
        
        if(square[i][j]==input[k]){
          
          newString.push(j+1);
          newString.push(i+1); //+1 bc arrays index start at 0
     
        }
        if(input[k]==" "){ //leave spaces as is and go to next letter
          newString.push(" ");
          k++;
        }
      }
    }
    }
    }
   
    
    else{ //decoding
      
      let numberOfSpaces=0;
      
        for(let k=0;k<input.length-1;k+=2){ //-1 bc always using k and k+1
          
          if(input[k]==" "){ //leave spaces as is and go to next letter
          newString.push(" ");
        numberOfSpaces++;
          k++;
        }
        
        if(input[k]==4 && input[k+1]==2){ //if it's i or j write ass (i/j)
          newString.push("(i/j)");
       
        }
      
          else{
           
            newString.push(square[input[k+1]-1][input[k]-1]); //-1 bc array index starts at 0
          
          }
      }
      if((input.length-numberOfSpaces)%2!=0) //there is odd number of numbers
        return false;
    }

    return newString.join("").toString();
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
