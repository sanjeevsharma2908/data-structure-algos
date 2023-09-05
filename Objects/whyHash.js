

            // Arrays              HashTable

// Search -> O(n)                  -> O(1)
//lookup  -> O(1)                  -> O(1)
// insert -> O(n)                  -> O(1)
//delete  -> O(n)                  -> O(1)
// push   -> O(1)


// Google Question 
// Given an array = [2,5,1,2,3,5,1,2,4];
// it should be returning -> 2


// Given an array = [2,1,1,2,3,5,1,2,4];
// it should be returning -> 1


// Given an array = [2,3,4,5];
// it should be returning -> undefined

function firstRecurringNumber(array){
    for(let i = 0; i<array.length; i++){
        for(let j = i+1; j<array.length; j++){
           if(array[i] === array[j]){
            return array[i];
           } 
        }
    }
    return undefined;
}//O(n^2) quadratic equation -> space Complexity -> O(1) 


function firstRecurringNumber2(array){
    const hashMap = {};
    for(let i = 0; i<array.length; i++){
        if(hashMap[i] !==undefined){
            return array[i];
        }else{
            hashMap[array[i]]=i;
        }
        console.log(hashMap);
    }
    return undefined;
}// O(n) -> Time Complexity

console.log(firstRecurringNumber2([2,5,1,2,3,5,1,2,4]));