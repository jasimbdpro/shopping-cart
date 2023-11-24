// Click handler to first + button

let incrementItem1 = document.getElementById('incrementItem1')
incrementItem1.addEventListener('click', function () {
    let quantityOfItem1 = stringToNum('quantityOfItem1');
    let quantity1Increased = quantityOfItem1 + 1;
    document.getElementById('quantityOfItem1').innerText = quantity1Increased;
    let priceOfItem1 = stringToNum('priceOfItem1')
    let price1Increased = priceOfItem1 + 1219;
    document.getElementById('priceOfItem1').innerText = price1Increased;
})
// Click handler to first - button

let decrementItem1 = document.getElementById('decrementItem1')
decrementItem1.addEventListener('click', function () {
    let quantityOfItem1 = stringToNum('quantityOfItem1');
    let quantity1Increased = quantityOfItem1 - 1;
    document.getElementById('quantityOfItem1').innerText = quantity1Increased;
    let priceOfItem1 = stringToNum('priceOfItem1')
    let price1Increased = priceOfItem1 - 1219;
    document.getElementById('priceOfItem1').innerText = price1Increased;
})
// Click handler to second + button

let incrementItem2 = document.getElementById('incrementItem2')
incrementItem2.addEventListener('click', function () {
    let quantityOfItem2 = stringToNum('quantityOfItem2');
    let quantity1Increased = quantityOfItem2 + 1;
    document.getElementById('quantityOfItem2').innerText = quantity1Increased;
    let priceOfItem2 = stringToNum('priceOfItem2')
    let price1Increased = priceOfItem2 + 59;
    document.getElementById('priceOfItem2').innerText = price1Increased;
})
// Click handler to second - button

let decrementItem2 = document.getElementById('decrementItem2')
decrementItem2.addEventListener('click', function () {
    let quantityOfItem2 = stringToNum('quantityOfItem2');
    let quantity1Increased = quantityOfItem2 - 1;
    document.getElementById('quantityOfItem2').innerText = quantity1Increased;
    let priceOfItem2 = stringToNum('priceOfItem2')
    let price1Increased = priceOfItem2 - 59;
    document.getElementById('priceOfItem2').innerText = price1Increased;
})








// function for get element and make it number 
function stringToNum(id) {
    let stringNum = parseFloat(document.getElementById(id).innerText);
    return stringNum;
}
