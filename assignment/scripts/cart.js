console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!


//Create a variable called 'basket'

let basket = [];

//Create a function called 'addItem'

function addItem(item) {
    basket.push(item);
    console.log('New item added to the basket:', item);
    return true;
}

console.log(addItem('socks'));
console.log(addItem('t-shirt'));
console.log(addItem('jeans'));
console.log(addItem('undies'));

//Create a function called 'listItems'

function listItems(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
    return 'Items in list';
}

console.log(listItems(basket));

//Create a function called 'empty'


