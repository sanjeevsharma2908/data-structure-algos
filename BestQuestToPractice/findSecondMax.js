
// You are given three numbers stored in the variable a,b,c -> print the second largest number from them.

//Approach 1

function findSecondLargest1(a, b, c) {
    // step -1 -> find the minimum & maximum from the given three numbers.
    let max = Math.max(a, b, c);
    let min = Math.min(a, b, c);

    // step -2 -> calculate the sum of all the three numbers.
    let sum = a + b + c;

    // step -3 -> subtract the minimum value from the sum and then subtract the maximum value from that result.

    let secondMax = sum - max - min;
    // return secondMax;
}

let result1 = findSecondLargest1(-39, -44, -99);
console.log(result1);


//Approach 2

function findSecondLargest2(a, b, c) {
    // step -1 -> store all the three numbers in an array.

    let numbers = [a, b, c];

    // step 2 -> Sort the array in descending order
    numbers.sort(function (x, y) {
        return y - x;
    });

    // step -3 ->  Second max is the element at index 1 (0-based index)
    let secondMax = numbers[1];

    //return secondMax;

}

let result2 = findSecondLargest2(-39, -44, -99);
console.log(result2);

// Approach 3 

function findSecondLargest3(a, b, c) {
    // step -1 -> Initialize two variable as max & secondMax.

    let max, secondMax;

    // step 2 -> Sort the array in descending order
    if (a > b) {
        max = a;
        secondMax = b;
    }
    else {
        max = b;
        secondMax = a;
    }
    if (c > max) {
        secondMax = max;
        max = c;
    } else if (c > secondMax) {
        secondMax = c;
    }
    return secondMax;

}

let result3 = findSecondLargest3(-39, -44, -99);
console.log(result3);