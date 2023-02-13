const booleanInteger = (c) => Number.isInteger(Number(c));
const decodeString = (s) => {
    const sLength = s.length;
    const stack = [];
    
    for (let i = 0; i < sLength; ++i) {
        if(s[i] === ']') {
            let num = '';
            let text = '';
            while(true){
                const data = !!stack.length && stack.pop();
                if (data && booleanInteger(data)){
                    num = `${data}${num}`;
                    continue;
                }
                
                if (num !== ''){
                    if (data !== false){
                        stack.push(data);
                    }
                    stack.push(text.repeat(Number(num)));
                    break;
                }

                if (data != '[') text = `${data}${text}`;
            }
            continue;
        }
        stack.push(s[i]);
    }
    return stack.join('');
};