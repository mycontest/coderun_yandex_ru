let get_unique_id = (() => {
    let id = 0;
    let objectMap = new Map(); // Map to store unique IDs for each object structure

    return (obj) => {
        let objStr = JSON.stringify(obj); // Serialize object to a string for structure comparison

        if (!objectMap.has(objStr)) {
            id++;
            objectMap.set(objStr, id);
        }

        return objectMap.get(objStr);
    };
})();

// Example usage
let test = () => {
    console.log("salom");
};

let obj1 = {
    test: test
};

console.log(get_unique_id(obj1)); // first call returns 1
console.log(get_unique_id(obj1)); // again call returns 1

let obj2 = {
    test: test
};

console.log(get_unique_id(obj2)); // first call returns 2
console.log(get_unique_id(obj2)); // again call returns 2
