function recursiveSummation(inputNum) {
    if (inputNum <= 1){
        return inputNum;
    }

    return inputNum + recursiveSummation(inputNum-1);
}

console.log(recursiveSummation(5));