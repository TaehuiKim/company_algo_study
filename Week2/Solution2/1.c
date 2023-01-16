int compare(const int **a, const int **b)
{   
    // x[n][0]을 우선으로 정렬하되, x[n][0]의 값이 동일할 때 x[n][1]의 값을 비교해서 정렬
    return (*a)[0] == (*b)[0] ? (*a)[1] > (*b)[1] : (*a)[0] > (*b)[0];
}

int findMinArrowShots(int** points, int pointsSize, int* pointsColSize){
    // early return
    if (pointsSize <= 1) return pointsSize;

    // sort
    qsort(points, pointsSize, sizeof(int*), compare);

    // 첫 풍선은 무조건 하나로 카운트, 정렬된 첫 풍선의 뒤 길이를 최초 point로 삼아서 비교
    int burstCount = 1;
    int nextPoint = points[0][1];

    for (int i = 1; i < pointsSize; ++i) {
        // 뒷 풍선의 시작점이 앞 풍선의 종결점보다 크다면
        if (points[i][0] > nextPoint) {
            // 새로운 핀이 필요하고, 다음 포인트를 현재의 종결점으로 지정한다.
            ++burstCount;
            nextPoint = points[i][1];
        }
        // 크지 않더라도 앞 풍선의 종결점보다 현재 풍선의 종결점이 짧다면 종결점을 변경해준다. 그래야 포함 관계가 가능하기 때문.
        else if (nextPoint > points[i][1]){
            nextPoint = points[i][1];
        }
    }
    return burstCount;
}