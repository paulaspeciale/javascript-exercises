const repeatString = function(cadena, numero) {
let solucion='';
if(numero<0) return 'ERROR'
if(numero===0) return ''
if(numero===1) return cadena

for (let i=0; i<numero; i++){
solucion+=cadena;
}
return solucion;
};

// Do not edit below this line
module.exports = repeatString;
