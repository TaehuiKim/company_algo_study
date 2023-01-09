const longestPalindrome = function(s) {
  const obj = s.split('').reduce((acc, cur) => { 
      acc[cur] = acc[cur] ? ++acc[cur] : 1;
      return acc;
  }, {});

  return Object.values(obj).reduce((acc, cur) => {
      if(acc % 2 === 1 && cur % 2 === 1) {
          --acc;
      }
      return acc + cur;
  }, 0);
};
