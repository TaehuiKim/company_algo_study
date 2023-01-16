const findMinArrowShots = (points) => {
  const pointsSize = points.length;

  if (pointsSize <= 1) return pointsSize;

  points.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);

  let burstCount = 1;
  let nextPoint = points[0][1];

  for(let i = 1; i < pointsSize; ++i) {
      if (points[i][0] > nextPoint) {
          ++burstCount;
          nextPoint = points[i][1];
      }
      else if (nextPoint > points[i][1]){
          nextPoint = points[i][1];
      }
  }
  
  return burstCount;
};