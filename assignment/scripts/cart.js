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
//I kept the differnt ways I tried to create the 'empty' 
//function at the bottom of this js file


//***STRETCH GOALS***

const maxItems = 5;

//Create a function called 'isFull'

function isFull(arr) {
    if (arr.length < maxItems) {
        console.log('More room in basket. Basket full:');
        return false;
    } else if (arr.length > maxItems) {
        console.log('No more will fit. Too Full!')
    } else {
        console.log('Your Basket is Full');
    }
    return true
}

console.log(isFull(basket));

console.log(addItem('shoe'));
console.log(addItem('jacket'));
console.log(addItem('hat'));

console.log(isFull(basket));

console.log(addItem('mittens'));
console.log(addItem('scarf'));

console.log(isFull(basket));

console.log(addItem('vest'));

console.log(isFull(basket));

function addItem(item) {
    basket.push(item);
    function isFull(arr) {
        if (arr.length < maxItems) {
            console.log('More room in basket. Basket full:');
            return false;
        } else if (arr.length > maxItems) {
            console.log('No more will fit. Too Full!')
        } else {
            console.log('Your Basket is Full');
        }
        return true
    }
}

console.log(addItem('tie'));

//let itemAdd = addItem(item){
  //  let nowItem = function isFull(){
    //    return item;
    //}
    //return nowItem;
//}

//console.log(itemAdd(basket));



//Create a function called 'removeItem'

function removedItem(item, array){
    let numItem = array.indexOf(item);
            console.log(numItem);
            if(numItem >= 0){
                array.splice(numItem);
                return item;
            }else{
                console.log('Not in basket');
            }
           return null;
    }


//console.log(removedItem('pants', basket));
console.log(removedItem('scarf', basket));



//Ways I tried first to make 'empty' function:

//function empty(item){
//  basket.pop(item);
//  console.log('Removed all items:', item);
//  return 'Empty Basket';
//}
//console.log(empty(basket));

//function empty(item) {
  //  for(i=0; i<item.lenght; i++){
    //    basket.pop(item);
      //  console.log('Removed item from basket:', item);
    //}
//}
//console.log(empty(basket));

//function empty(array0) {
  //  for (i = 0; i < array0.length; i++); {
    //    console.log(array0[i]);
      //  if (array0[i] > 0);
        //array0[i].pop[i];
        //console.log('Removed item:', array0[i]);
  //  }
//}
//console.log(empty(basket))

