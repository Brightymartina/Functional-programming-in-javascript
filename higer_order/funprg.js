//map

var animals = [{ name: 'fluffykins', species: 'rabbit' },
{ name: 'Caro', species: 'dog' },
{ name: 'Hamilton', species: 'dog' },
{ name: 'Harold', species: 'fish' },
{ name: 'Ursula', species: 'cat' },
{ name: 'Jimmy', species: 'fish' },
]

var names = animals.map((animal) => animal.name)


console.log(names);


//reduce



var orders = [
    { amount: 250 },
    { amount: 400 },
    { amount: 100 },
    { amount: 325 }
]


var totalamt = orders.reduce((sum, order) => {
    console.log("hello", sum, order.amount);
    return sum += order.amount;

}, 0)

console.log(totalamt);

//impure function
var s = 'Brighty'
function name() {
    console.log("hello ," + s);
}
s = 'Martina'
name()

//pure function
function name1(ss) {
    console.log("hello ," + ss);
}

name1('Shiny')


//currying

var school = (frnd, sir, schl_name) =>
    '########### my friend ' + frnd + ' is my bst frnd and my sir Mr.' + sir +
    ' is my 12th class teacher and I did my school in ' + schl_name + ' !!!! ###########'

console.log(school('kitty', 'jehova', 'jersalem HSS'))


//******************************************* */


var school =
    frnd =>
        sir =>
            schl_name =>
                ' *********** my friend ' + frnd + ' is my bst frnd and my sir Mr.' + sir +
                ' is my 12th class teacher and I did my school in ' + schl_name + ' !!!!*****************'

console.log(school('kitty')('jehova')('jersalem HSS'))

//************************************* */


var school =
    frnd =>sir => schl_name =>
                ' $$$$$$$$$$$ my friend ' + frnd + ' is my bst frnd and my sir Mr.' + sir +
                ' is my 12th class teacher and I did my school in ' + schl_name + ' !!!!  $$$$$$$$$$$'

var frnd=school('Kitty')
var sir=frnd('Jehova')
console.log(sir('jerusalem HSS'))