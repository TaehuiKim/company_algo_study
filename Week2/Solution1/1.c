void merge(int* nums, int start, int middle, int end) {
    int i, j;
    int k = start;
    int n1 = middle - start + 1;
    int n2 = end - middle;

    int left[n1], right[n2];

    // 좌측 배열
    for(i = 0; i < n1; ++i) {
        left[i] = nums[i + start];
    }

    // 우측 배열 
    for(i = 0; i <n2; ++i) {
        right[i] = nums[i + middle + 1];
    }

    // 좌측 우측 배열 정렬(두 쪽 모두 길이가 남아있는 동안 정렬 순회)
    for (i=0, j=0; i<n1 && j<n2; ++k){
        nums[k] = (left[i] > right[j]) ? right[j++] : left[i++];
    }

    // 위 정렬 끝나고 남은 아이템 털어넣기
    while (i < n1) {
        nums[k++] = left[i++];
    }

    // 위 정렬 끝나고 남은 아이템 털어넣기
    while(j < n2) {
        nums[k++] = right[j++];
    }
}

void mergeSort(int* nums, int start, int end) {
    // 종료 지점이 시작 지점보다 클 때까지만 재귀(완전히 다 쪼개어질 때 까지)
    if (end > start) {
        // 가운뎃 값 구하기
        int middle = (start + end) / 2;
        
        // 절반 씩 merge sort
        mergeSort(nums, start, middle);
        mergeSort(nums, middle + 1, end);

        // 정렬
        merge(nums, start, middle, end);
    }
}

int kthSmallest(int** matrix, int matrixSize, int* matrixColSize, int k){
    int i, j, index = -1;
    int* arr = malloc(sizeof(int) * matrixSize * (*matrixColSize));

    // 1차원 배열로 해체한다.
    for(i = 0; i < (*matrixColSize); ++i){
        for(j = 0; j < matrixSize; ++j){
            arr[++index] = matrix[i][j];
        }
    }
    
    // 정렬해준다.
    mergeSort(arr, 0, index);

    // k번째 값을 구한다.
    return arr[k - 1];
}