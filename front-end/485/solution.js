// helpers

const getter = function (key) {
    let keys = {};
    return keys[key];
};

const trigger_one = function () {
    let hide = {}
    for (let item in this) {
        if (item.startsWith("$")) continue;
        hide[item] = this[item];
        delete this[item];
    }

    for (let item in this) {
        if (this[item] === trigger_one) {
            this[item] = trigger_two;
        }
    }

    // save to cache
    // cache[JSON.stringify(this)] = hide

    for (let item in this) {
        if (this[item] === getter) {
            this[item] = function (key) {
                let keys = hide;
                if (!key) return keys
                return keys[key];
            };
        }
    }
};

const trigger_two = function () {
    let hide = this.$getter();
    for (let item in hide) {
        this[item] = hide[item];
        delete hide[item];
    }

    // save to cache
    // cache[JSON.stringify(this)] = {}

    for (let item in this) {
        if (this[item] === trigger_two) {
            this[item] = trigger_one;
        }
    }
    
};


module.exports = { trigger: trigger_one, getter }