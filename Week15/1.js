/**
 * @param {number[]} nums
 * @return {number}
 */
const specialArray = (nums) => {
    nums.sort((a, b) => b - a);
    const numsLength = nums.length;
    let index = -1;
    for(let i = 0; i < numsLength; ++i) {
        if(nums[i] >= i + 1) {
            index = i + 1;
            continue;
        }
        if(nums[i] >= index) index = -1;
    }
    return index;
};