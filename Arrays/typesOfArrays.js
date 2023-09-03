
var  object1 = {value: 10};
var object2 = object1;
var object3  = {value: 10};


console.log(object1 === object2)// true

console.log(object1 === object3)// false


object1.value = 15;
console.log(object1.value,object2.value,object3.value);

//This code snippet is written in JavaScript and it demonstrates the concept of object references and how they work in JavaScript. Let's break down the code step by step:

// 1. Firstly, we declare a variable called `object1` and assign it an object with a property `value` set to 10.
// 2. Next, we declare another variable called `object2` and assign it the value of `object1`. This means that `object2` now holds a reference to the same object as `object1`.
// 3. Then, we declare a variable called `object3` and assign it a new object with a property `value` set to 10. This means `object3` holds a reference to a different object than `object1` and `object2`.
// 4. The first `console.log` statement checks if `object1` is strictly equal (`===`) to `object2`. Since both variables hold a reference to the same object, the output will be `true`.
// 5. The second `console.log` statement checks if `object1` is strictly equal to `object3`. Since `object3` holds a reference to a different object, the output will be `false`.
// 6. The following line `object1.value = 15;` changes the value of the `value` property in the object that `object1` and `object2` reference. Therefore, the `value` property in both objects will be updated to `15`.
// 7. The final `console.log` statement prints the `value` property of `object1`, `object2`, and `object3`. Since `object1` and `object2` reference the same object, their `value` property will be `15`. However, the `value` property of `object3` remains unchanged at `10`.

// In summary, this code demonstrates how object references work in JavaScript. When you assign an object to a variable, the variable holds a reference to that object. If multiple variables hold references to the same object, modifying the object through one variable will affect all other variables that reference the same object.

