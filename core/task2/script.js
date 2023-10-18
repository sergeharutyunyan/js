function sum(a, b, v) {
    const obj = b.reduce(function(item, value) {
        item[value] = true;
        return item;
    }, {});

    for(let i = 0; i < a.length; i++) {
        const target = v - a[i];
        if(obj[target] === true) {
            return true;
        }
    }
    return false;
}

alert(sum([4, 2, 5, 60, 10, 9, 15], [67, 12, 0, 2, 1, 0], 22));
