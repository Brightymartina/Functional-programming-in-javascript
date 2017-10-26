Less bugs, Easier to reason about, Less time, Reuse more code

Higher order functions

functions are values ie assign values like string etc 
or pass to other functions
anony function assign to variable

higher order functions

var animals = [{name='fluffykins',species='rabbit'},
{name='Caro',species='dog'},
{name='Hamilton',species='dog'},
{name='Harold',species='fish'},
{name='Ursula',species='cat'},
{name='Jimmy',species='fish'},
]

var dogs = []

for (var i = 0; i < animals.length; i++>){
    if (animals[i]).species === 'dog')
    dogs.push(animals[i]);
}

```
// var x=1;
// var y=2;

// function add (x,y){
//     return x+y;
// }

// console.log(add(x,y));

// var triple=function(x){
// return x * 3
// }

// console.log(triple);

// var waffle = triple
// console.log(waffle(30));

var animals = [{name:'fluffykins',species:'rabbit'},
{name:'Caro',species:'dog'},
{name:'Hamilton',species:'dog'},
{name:'Harold',species:'fish'},
{name:'Ursula',species:'cat'},
{name:'Jimmy',species:'fish'},
]

var dogs = []

for (var i = 0; i < animals.length; i++){
    if (animals[i].species === 'dog')
    dogs.push(animals[i]);
}
console.log(dogs);

var dogs1 = animals.filter(function(animal){
    return animal.species==='dog'
})

console.log(dogs1);

var isDog = function(animal){
    return animal.species==='dog'
}

var otherAnimals = function(animal){
    return animal.species !='dog'
}

console.log(animals.filter(otherAnimals))
```

# Map

```
// var x=1;
// var y=2;

// function add (x,y){
//     return x+y;
// }

// console.log(add(x,y));

// var triple=function(x){
// return x * 3
// }

// console.log(triple);

// var waffle = triple
// console.log(waffle(30));

var animals = [{ name: 'fluffykins', species: 'rabbit' },
{ name: 'Caro', species: 'dog' },
{ name: 'Hamilton', species: 'dog' },
{ name: 'Harold', species: 'fish' },
{ name: 'Ursula', species: 'cat' },
{ name: 'Jimmy', species: 'fish' },
]

/* var names = []

for (var i = 0; i < animals.length; i++){
    names.push(animals[i].name);
} */

/* // Using Map
var names = animals.map(function (animal) {
    return animal.name
}) */

/* // Using => functions
var names = animals.map((animal) => {
    return animal.name
}) */

/* // Using => functions remove return keyword and {} block
var names = animals.map((animal) => animal.name)
 */

// Using => functions remove return keyword and {} block
var names = animals.map((x) => x.name)

console.log(names);
```

# Reduce

```
var orders = [
    { amount: 250 },
    { amount: 400 },
    { amount: 100 },
    { amount: 325 }
]

/* var totalAmount=0
for (var i = 0; i < orders.length; i++) {
    totalAmount += orders[i].amount;    
} */

/* var totalAmount = orders.reduce(function (sum, order) {
    console.log("hello", sum, order)
    return sum + order.amount
}, 0) */

var totalAmount = orders.reduce((sum, order) => sum + order.amount, 0)

console.log(totalAmount);
```

# Advanced Reduce
```
var fs = require('fs')
// import fs from 'fs'

var output = fs.readFileSync("data.txt", 'utf8')
    .trim()
    .split('\n')
    .map(line => line.split(','))
    .reduce((customers, line) => {
        // console.log('hello', line)
        customers[line[0]] = customers[line[0]] || []
        customers[line[0]].push({
            name:line[1],
            price:line[2],
            quantity:line[3]
        })
        return customers
    }, {})
console.log('output', JSON.stringify(output,null,2))

```

# impure
```
var me = 'bruce wayne'

function greetme(){
    console.log('Hello , '+me);
}
me='Batman'
greetme()
```

# pure
```
// var me = 'bruce wayne'

function greetme(me){
    console.log('Hello , '+me);
}
// me='Batman'
greetme('Batman')
```

# Currying
```
let dragon = (name, size, element) => 
    name + ' is a ' +
        size + ' dragon that breaths ' +
        element + '!'

console.log(dragon('fluffykins','tiny','lighting'))
```
```
let dragon = 
name =>
size=>
element=> 
    name + ' is a ' +
        size + ' dragon that breaths ' +
        element + '!'


console.log(dragon('fluffykins')('tiny')('lighting'))
```
```
let dragon = 
name =>
size=>
element=> 
    name + ' is a ' +
        size + ' dragon that breaths ' +
        element + '!'

        let fluffykinsDragon = dragon('fluffykins')
        let tinyDragon = fluffykinsDragon('tiny')

console.log(tinyDragon('lighting'))
```