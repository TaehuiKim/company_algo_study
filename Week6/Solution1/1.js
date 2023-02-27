const minStoneSum = (piles, k) => {
  const q = new MaxPriorityQueue();
  let sum =  piles.reduce((acc, cur) => {
      q.enqueue(cur);
      return acc + cur;
  }, 0);
  for(let i = 0; i < k; ++i) {
      const { priority } = q.dequeue();
      const value = priority / 2;
      sum -= Math.floor(value);
      q.enqueue(Math.round(value));
  }
  return sum;
};