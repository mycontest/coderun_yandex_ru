// helpers

let trigger_one = function () {
    const hide = {}
    const name = "$trigger"

    for (let item in this) {
        if (item.startsWith("$")) continue;
        hide[item] = this[item];
        delete this[item];
    }

    for (let item in this) {
        if (this[item] === getter) {
            this[item] = function (key) {
                let keys = hide
                if (key) return keys[key]
                return keys
            }
        }

        if (this[item] === trigger_one) {
            console.log(item)
        }
    }

    this[name] = trigger_two
}

const trigger_two = function () {
    const hide = {}

    for (let item in this) {
        if (item.startsWith("$")) continue;
        hide[item] = this[item];
        delete this[item];
    }

    for (let item in this) {
        if (this[item] === getter) {
            this[item] = function (key) {
                let keys = hide
                return keys[key]
            }
        }
    }
};

const getter = function (key) { };

module.exports = { trigger: trigger_one, getter }



