function sym() {

    let args = [];
    for (const arr of arguments) {
        args.push(arr);
    }

    while (args.length > 1) {
        let arrA = args.shift();
        let arrB = args.shift();
        let diffArr = [];

        for (let el of arrB) {
            if (!arrA.includes(el)) {
                diffArr.push(el);
            }
        }
        for (let el of arrA) {
            if (!arrB.includes(el)) {
                diffArr.push(el);
            }
        }

        args.unshift(diffArr);
    }
     
    args = args[0].slice();
    
    args.sort((a, b) => a - b);

    let uniqueItems = [...new Set(args)]

    //console.log(uniqueItems);
    return uniqueItems;
}


sym([1, 2, 3], [5, 2, 1, 4]);
console.log('==');
sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);