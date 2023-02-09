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
        console.log('Item in basket:', array[i]);
    }
    return true;
}

console.log(listItems(basket));

//Create a function called 'empty'

function empty(array) {
    array.length = 0;
    array.splice(0, array.length);
    console.log('Basket is empty', array);
    return true;
}
console.log(empty(basket));



//***STRETCH GOALS***

const maxItems = 5;

//Create a function called 'isFull'

function isFull(arr) {
    if (maxItems > arr.length) {
        console.log('More room in basket. Basket full:');
        return false;
    } else if (maxItems < arr.length) {
        console.log('No more will fit. Too Full!')
        return true;
    } else {
        console.log('Your Basket is Full.');
    }
    return true
}

console.log(isFull(basket));

//Added items to see code in each step

console.log(addItem('shoe'));
console.log(addItem('jacket'));
console.log(addItem('hat'));

console.log(isFull(basket));

console.log(addItem('mittens'));
console.log(addItem('scarf'));

console.log(isFull(basket));

console.log(addItem('vest'));

console.log(isFull(basket));

// ReCreate 'addItems' function


function addItem2(item, array){
    if(isFull(array) < maxItems){
        console.log('Basket Full!!!');
        return false;
    }else{
       array.push(item);
       console.log(`Added item: ${item}`)
    }
    return true;
}

console.log(addItem2('hoodie', basket));


//Ran 'listItems' again to see if 'addItem2' was working:

// function listItems(array) {
//     for (let i = 0; i < array.length; i++) {
//         console.log('Item in basket:', array[i]);
//     }
//     return true;
// }

// console.log(listItems(basket));


//Create a function called 'removeItem'

function removedItem(item, array){
    let numItem = array.indexOf(item);
            console.log(numItem);
            if(numItem >= 0){
                array.splice(numItem);
                return item;
            }else{
                console.log('Not in basket.');
            }
           return null;
    }


//console.log(removedItem('pants', basket));
console.log(removedItem('scarf', basket));


