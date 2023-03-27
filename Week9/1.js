const lemonadeChange = function(bills) {
  const moneys = { 5: 0, 10: 0, 20: 0 };
  for(item of bills) {
      ++moneys[item];
      if(item === 10) {
          --moneys[5];
      } else if(item === 20) {
          if(moneys[10] === 0){
              moneys[5] -= 3;
          } else {
              --moneys[5];
              --moneys[10];
          }
      }
      if(moneys[5] < 0 || moneys[10] < 0) return false;
  }
     
  return true;
};