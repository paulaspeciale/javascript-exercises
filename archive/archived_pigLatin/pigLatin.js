function pigLatin(str) {
  
    const VOWELS=['a','e','i','o','u'];
    let firstChar=str[0];
    if(VOWELS.includes(firstChar)){
      return str+'way'
    }
    let hasNoVowels=true;
    for (const c of str){
      if(VOWELS.includes(c)){
        hasNoVowels=false;
        break;
      }
    }
    if(hasNoVowels){
      return str+'ay'
    }
    let consonantCluster='';
    let firstVowelIndex=0;
    for(let i=0;i<str.length;i++){
      const c=str[i]
      if(VOWELS.includes(c)){
        firstVowelIndex=i;
        break
      }
      consonantCluster+=c;
    }
    return str.substring(firstVowelIndex)+consonantCluster+'ay'
  }
;
  
// Do not edit below this line
module.exports = pigLatin;
