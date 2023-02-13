/**
 * @param {string} s
 * @return {string}
 */
const booleanInteger = (c) => Number.isInteger(Number(c));
const decodeString = (s) => {
    const sLength = s.length;
    const stack = [];
    
    let number = '';
    let text = '';
    for (let i = 0; i < sLength; ++i) {
        if(s[i] === '[') {
            if (number) stack.push(number);
            number = '';
            text = '';
            continue;
        }

        if(s[i] === ']') {
            let repeatCount = 0;
            while(stack.length){
                let data = stack.pop();
                if(data && booleanInteger(data)){
                    repeatCount = data;
                    break;
                }
                text = `${data}${text}`;
            }
            stack.push(text.repeat(repeatCount));
            text = '';
            continue;
        }

        if(booleanInteger(s[i])){
            number = `${number}${s[i]}`;
            continue;
        }

        stack.push(s[i]);
    }
    return stack.join('');
};