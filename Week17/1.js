const maxAreaOfIsland = (grid) => {
    const col = grid.length;
    const row = grid[0].length;
    let result = 0;

    for (let i = 0; i < col; ++i){
        for (let j = 0; j < row; ++j){
            result = Math.max(result, _search(grid, i, j));
        }
    }

    return result;
};

const _search = (grid, i, j) => {
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] === 0) return 0;
    grid[i][j] = 0;

    const down = _search(grid, i + 1, j);
    const up = _search(grid, i - 1, j);
    const right = _search(grid, i, j + 1);
    const left = _search(grid, i, j - 1);

    return 1 + down + up + right + left;
}