#define _ALPHABET_ 128

int longestPalindrome(char * s){
    int alphabetCount[_ALPHABET_] = {0};
    int i;
    int sLen = strlen(s);

    for(i = 0; s[i] != '\0'; ++i) {
        ++alphabetCount[s[i]];
    }

    int odd = 0;
    int palindromeCount = 0;

    for(i = 65; i < _ALPHABET_; ++i) {
        palindromeCount += alphabetCount[i];
        if (alphabetCount[i] % 2 == 1) {
            if (!odd) odd = 1;
            --palindromeCount;
        }
    }

    return odd ? ++palindromeCount : palindromeCount;
}