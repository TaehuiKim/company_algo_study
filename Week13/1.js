/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
const intervalIntersection = (firstList, secondList) => {
    const pointer = { first: 0, second: 0 };
    const firstLength = firstList.length;
    const secondLength = secondList.length;
    
    const result = [];
    while(pointer.first < firstLength && pointer.second < secondLength) {
        const firstArea = firstList[pointer.first];
        const secondArea = secondList[pointer.second];

        const start = Math.max(firstArea[0], secondArea[0]);
        const end = Math.min(firstArea[1], secondArea[1]);
        firstArea[1] < secondArea[1] ? ++pointer.first : ++pointer.second;
        if (start <= end) result.push([start, end]);
    }
    return result;
};