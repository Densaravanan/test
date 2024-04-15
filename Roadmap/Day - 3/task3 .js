let obj1 = {name:"Person 1",age:5};
let obj2 = {age:5,name:"Person 1"};

function areObjectEqual(obj1,obj2) {
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (var key of keys1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
} 
console.log(areObjectEqual(obj1,obj2))