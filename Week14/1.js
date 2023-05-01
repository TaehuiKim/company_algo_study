/**
 * Queue도 쓰고 Map도 써봤는데, 성능상 Map이 나았음.
 */

/**
 * @param {number[]} fruits
 * @return {number}
 */

const totalFruit = (fruits) => {
    const map = new Map();
    let maxCount = 0;
    let pointType = -1;
    let pointCount = 0;

    for(const fruit of fruits) {
      const count = mapSetCount(map.get(fruit));
      map.set(fruit, count);

      if (map.size > 2) {
        map.clear();
        map.set(pointType, pointCount);
        map.set(fruit, count);
      }

      maxCount = maxCountCheck(map, maxCount);

      pointCount = (fruit === pointType) ? ++pointCount : 1;
      pointType = fruit;
    }

    return maxCount;
};

const maxCountCheck = (map, maxCount) => {
  const iterator = map.values();
  const first = iterator.next().value ?? 0;
  const second = iterator.next().value ?? 0;
  return Math.max(maxCount, first + second);
};

const mapSetCount = (value) => {
  const count = value ?? 0;
  return count + 1;
}