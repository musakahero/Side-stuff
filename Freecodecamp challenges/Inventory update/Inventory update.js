function updateInventory(arr1, arr2) {

    //updating - iterate through each new item
    for (const item of arr2) {

        let foundAndUpdated = false;

        //iterate through each current item and compare product names
        for (const curItem of arr1) {
            if (curItem[1] == item[1]) {
                foundAndUpdated = true;
                curItem[0] += item[0];
                break;
            }
        }

        //if prod name was not found, add the whole product array to the inventory (arr1)
        if (foundAndUpdated == false) {
            arr1.push(item);
        }
    }


    //sorting alphabetically
    arr1.sort((a, b) => a[1].localeCompare(b[1]));

    return arr1;
}

updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]],
    [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]);