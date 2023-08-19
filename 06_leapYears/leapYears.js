const leapYears = function( year) {
  /*
  div 4 =0 si
  div 100 =0 no
  div 400 =0 si
  */
 if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0))return true
 else return false

};

// Do not edit below this line
module.exports = leapYears;
