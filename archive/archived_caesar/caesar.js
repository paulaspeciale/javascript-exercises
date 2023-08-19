//https://www.xarg.org/tools/caesar-cipher/
const caesar = function(cadena,rot) {
var result='';
for (let i=0; i<cadena.length; i++ ){
  let asciiNum=cadena[i].charCodeAt();
  if(asciiNum>=65 && asciiNum<=77){
    result+=String.fromCharCode(asciiNum+rot)
  }else if(asciiNum>=78&&asciiNum<=90){
    result+=String.fromCharCode(asciiNum-rot)
  }
 }
 return result
};

// Do not edit below this line
module.exports = caesar;
