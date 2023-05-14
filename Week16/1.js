const deepestLeavesSum = (root) => {
    const deepArray = [];
    recursiveSum(root, deepArray, 0);
    return deepArray[deepArray.length -1];
};

const recursiveSum = (node, array, deep) => {
    array[deep] = (array[deep] ?? 0) + node.val;
    if (node.left) {
        recursiveSum(node.left, array, deep + 1);
    }
    if (node.right) {
        recursiveSum(node.right, array, deep + 1)
    }
}