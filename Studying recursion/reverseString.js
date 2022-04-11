function reverseStr(input){
    //what is the base case
    if(input==''){
        return '';
    }
    
    //what is the smallest amount of work I can do in each iteration
    return reverseStr(input.substring(1)) + input[0];
    }
    
    console.log(reverseStr('the simple engineer'));