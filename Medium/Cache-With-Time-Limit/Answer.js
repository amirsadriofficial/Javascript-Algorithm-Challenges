const TimeLimitedCache = function () {
    this.cache = {};
    this.activeKeysCounter = 0;
};
TimeLimitedCache.prototype.set = function (key, value, duration) {
    var keyInCache = this.cache[key];
    keyInCache ? clearTimeout(keyInCache.timeout) : this.activeKeysCounter++;
    this.cache[key] = {
        value: value,
        timeout: setTimeout(() => {
            this.cache[key].value = -1;
            this.activeKeysCounter--;
        }, duration),
    }
    return Boolean(keyInCache);
};
TimeLimitedCache.prototype.get = function (key) {
    return this.cache[key]?.value || -1;
};
TimeLimitedCache.prototype.count = function () {
    return this.activeKeysCounter;
};

// Example
const timeLimitedCache = new TimeLimitedCache()
timeLimitedCache.set(1, 42, 1000); // false
timeLimitedCache.get(1) // 42
timeLimitedCache.count() // 1
