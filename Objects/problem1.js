

let user = {
    age:54,
    name: 'Kylie',
    magic: true,
    screen: function(){
        console.log('ahhhhhhh!');
    }
}

user.age// O(1)
user.spell = 'abra kadabra'; //O(1)
user.screen(); Object//O(1)


const a = new Map() // ant dt could be a key in Map but in case of objects it is mandatory to have an string as a key

const b = new Sets()