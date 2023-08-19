const string = 
['a', 'b', 'c','d'];

// 4*4 = 16 bytes of storage

// push operations
console.log(string);
string.push('e');//O(1) T.C.


//pop operations
string.pop();//O(1) T.C.
string.pop();//O(1) T.C.


//unshift operations

string.unshift('x');//O(n) T.C. `Due to iteration of each element



string.splice(2,0,'avian') // O (n/2)  ==>W.C => O(n)   







console.log(string);