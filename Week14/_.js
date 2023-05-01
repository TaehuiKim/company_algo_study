/**
 * 답은 맞는데 성능이 주따 맘에 안드는 상황.
 */

/**
 * @param {number[]} fruits
 * @return {number}
 */

const totalFruit = (fruits) => {
    const data = [];
    
    if (!dataUniqueCheck(fruits) || fruits.length < 2) {
      return fruits.length;
    }

    fruits.push(-1);

    const fruitsLength = fruits.length;
    let fruitType = fruits[0];
    let fruitCount = 1;
    let maxCount = 0;

    for(let i = 1; i < fruitsLength; ++i) {
        if (fruitType === fruits[i]) {
            ++fruitCount;
            if (i < fruitsLength -1) continue;
        }
        
        data.push({ type: fruitType, count: fruitCount });
        while (dataUniqueCheck(data.map(item => item.type))) data.shift();
        maxCount = maxCountFunc(data, maxCount);
        fruitType = fruits[i];
        fruitCount = 1;
    }

    return maxCount;
};

const dataUniqueCheck = (data) => {
    const set = new Set(data);
    const uniqueArr = [...set];
    return uniqueArr.length > 2;
};

const maxCountFunc = (data, maxCount) => {
    const count = data.reduce((x,y) => x + y.count, 0);
    return Math.max(maxCount, count);
}