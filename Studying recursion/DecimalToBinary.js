function DecToBinary(decimal, result){
    //base case
    if(decimal==0){
        return result;
    }

    result = Math.floor(decimal % 2) + result;

    return DecToBinary(Math.floor(decimal/2), result);
}

console.log(DecToBinary(233, ''));
