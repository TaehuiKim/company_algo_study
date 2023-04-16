class LFUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
        this.frequencies = new Map();
        this.lfu = 0;
    }
    _isLfuValue(lfuValue){
        return !this.frequencies.get(lfuValue).size && lfuValue === this.lfu;
    }

    get(key) {
        if(!this.cache.has(key)) {
            return -1;
        }

        const values = this.cache.get(key);
        const returnValue = values[0];
        let lfuValue = values[1];

        this.frequencies.get(lfuValue).delete(key);

        if(this._isLfuValue(lfuValue)) {
            this.lfu = lfuValue + 1;
        }
        
        if(!this.frequencies.get(++lfuValue)) {
            this.frequencies.set(lfuValue, new Set());
        }
        
        this.frequencies.get(lfuValue).add(key);

        return returnValue;
    }

    put(key, value) {
        if (!this.capacity) {
            return;
        }

        if(this.cache.has(key)) {
            const values = this.cache.get(key);
            let lfuValue = values[1];
            this.frequencies.get(lfuValue).delete(key);
            if (this._isLfuValue(lfuValue)){ 
                this.lfu = lfuValue + 1;
            }
            if(!this.frequencies.get(++lfuValue)) {
                this.frequencies.set(lfuValue, new Set());
            }
        
            this.frequencies.get(lfuValue).add(key);
            values[0] = value;
        }
        else {
            if(this.cache.size == this.capacity){
                this.cache.delete(this.frequencies.get(this.lfu).values().next().value);
                this.frequencies.get(this.lfu).delete(this.frequencies.get(this.lfu).values().next().value);
            }
            this.cache.set( key, [ value, this.lfu = 1 ] );
            if(!this.frequencies.get(1)){
                 this.frequencies.set(1, new Set());
            }
            this.frequencies.get(1).add(key);
        } 
    }
}
/** 
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */