console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

function addItem(item) {
    basket.push(item);
    console.log('New item going into the basket:', item);
    return true;
}

console.log(addItem('socks'));
