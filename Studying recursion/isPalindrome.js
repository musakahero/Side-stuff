function isPalindrome(input){
    //base case
    if(input.length == 0 || input.length == 1){
        return true;
    }
    
    //do some work to shrink the problem space
    if(input[0] == input[input.length-1]){
        return isPalindrome(input.substring(1,input.length-1));
    }
    
    //additional base case to handle non-palindromes
    return false;
    }
    
    console.log(isPalindrome('grandma'));