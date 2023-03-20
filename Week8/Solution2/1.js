/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
const mincostTickets = (days, costs) => {
  const lastDay = days[days.length - 1];
  const lastArea = lastDay + 1;
  const dp = new Array(lastArea).fill(0);
  
  for(let i = 1; i < lastArea; ++i) {
      if(days.includes(i)) {
          dp[i] = costs[0] + dp[i-1];
          dp[i] = Math.min(costs[1] + dp[Math.max(i - 7, 0)], dp[i]);
          dp[i] = Math.min(costs[2] + dp[Math.max(i - 30, 0)], dp[i]); 
      }
      else {
          dp[i] = dp[i-1];
      }
  }
  return dp[lastDay];
};