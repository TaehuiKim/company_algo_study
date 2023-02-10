int maxDepth(char * s){
    int count = 0, maxCount = 0, i = 0;
    while(s[i] != '\0') {
        if(s[i] == '(') ++count;
        if(s[i] == ')') --count;
        if(maxCount < count) maxCount = count;
        ++i;
    }
    return maxCount;
}