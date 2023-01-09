void merge(int* nums, int start, int middle, int end) {
    int i, j;
    int k = start;
    int n1 = middle - start + 1;
    int n2 = end - middle;

    int left[n1], right[n2];

    for(i = 0; i < n1; ++i) {
        left[i] = nums[i + start];
    }

    for(i = 0; i <n2; ++i) {
        right[i] = nums[i + middle + 1];
    }

    for (i=0, j=0; i<n1 && j<n2; ++k){
        nums[k] = (left[i] > right[j]) ? right[j++] : left[i++];
    }

    while (i < n1) {
        nums[k++] = left[i++];
    }

    while(j < n2) {
        nums[k++] = right[j++];
    }
}

void mergeSort(int* nums, int start, int end) {
    if (end > start) {
        int middle = (start + end) / 2;
        
        mergeSort(nums, start, middle);
        mergeSort(nums, middle + 1, end);

        merge(nums, start, middle, end);
    }
}

int* sortArray(int* nums, int numsSize, int* returnSize){
    *returnSize = numsSize;
    mergeSort(nums, 0, numsSize - 1);
    
    return nums;
}