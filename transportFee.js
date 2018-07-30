module.exports = function(shift){
    if (shift == 'morning'){
      console.log(shift);
      return "R20"
    }
    else if(shift == 'afternoon'){
      console.log(shift);
      return "R10"
    }
    else {
      console.log(shift);
      return "free"
    }
  }