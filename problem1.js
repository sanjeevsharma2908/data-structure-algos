const arr1 = ['a', 'b', 'c', 'd', 'e', 'f'];
const arr2 = ['g','h', 'i', 'm', 'k', 'l'];


//Brute force

function containsCommonItems(array1, array2) {
    for(let i = 0; i < array1.length; i++) {
        for(let j = 0; j < array2.length; j++) {
            if(array1[i] === array2[j]) {
                return true;
            }
        }
       
    }
    return false;
}
// O(a*b) Time Complexity
//console.log(containsCommonItems(arr1, arr2));


//Hash Table or Object method
function containsCommonItems1(arr1, arr2) {
    //loop through each first array and create an object where properties === items in array 
    // can we  assume always 2 params?
    
    let map = {};
for(let i = 0; i < arr1.length; i++) {
   
    if (!map[arr1[i]]) {
        const item = arr1[i];
        map[item] = true;
    }
   
}
//console.log(map)


//loop through the second array and check if item in second array exists on the created object.
for(let j = 0; j < arr2.length; j++) {
    if(map[arr2[j]]){
        return true;
    }
}
return false;
}

// O (a + b) // Time Complexity
//console.log(containsCommonItems1(arr1, arr2));


//Highly readable code using inbuilt functions
function containsCommonItems2(arr1, arr2) {
    return arr1.some(items => arr2.includes(items))
}
console.log(containsCommonItems2(arr1, arr2));