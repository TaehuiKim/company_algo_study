/**
 * @param {number[]} heights
 * @return {number}
 */
const largestRectangleArea = (heights) => {
  if (new Set(heights).size === 1) return heights.length * heights[0];

  const rectangleAreas = [];
  while(heights.length) {
      let min = Number.MAX_SAFE_INTEGER;
      let max = Number.MIN_SAFE_INTEGER;
      const length = heights.length;
      for(let i = length - 1; i >= 0; --i) {
          min = Math.min(min, heights[i]);
          max = Math.max(max, (length - i) * min);
      }
      rectangleAreas.push(max);
      heights.pop();
  }
  return Math.max(...rectangleAreas);
};

// 결국 Time Limit Exceeded... 이럴 줄 알았음. 다중 순회 불가.. 새로운 방법이 필요해