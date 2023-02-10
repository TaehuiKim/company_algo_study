const maxDepth = (s) => {
  let count = 0;
  let maxCount = 0;
  const sLength = s.length;

  for (let i = 0; i < sLength; ++i) {
      if(s[i] === '(') ++count;
      else if(s[i] === ')') {
          if(maxCount < count) {
              maxCount = count;
          }
          --count;
      }
  }
  return maxCount;
};