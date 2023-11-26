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
    if (document.getElementById('quantityOfItem1').innerText > 0) {
        let quantity1Increased = quantityOfItem1 - 1;
        document.getElementById('quantityOfItem1').innerText = quantity1Increased;
        let priceOfItem1 = stringToNum('priceOfItem1')
        let price11Increased = priceOfItem1 - 1219;
        document.getElementById('priceOfItem1').innerText = price11Increased;
        updateSubtotal();
    }
})
// Click handler to second + button

let incrementItem2 = document.getElementById('incrementItem2')
incrementItem2.addEventListener('click', function () {
    let quantityOfItem2 = stringToNum('quantityOfItem2');
    let quantity1Increased = quantityOfItem2 + 1;
    document.getElementById('quantityOfItem2').innerText = quantity1Increased;
    let priceOfItem2 = stringToNum('priceOfItem2')
    let price2Increased = priceOfItem2 + 59;
    document.getElementById('priceOfItem2').innerText = price2Increased;

})
// Click handler to second - button

let decrementItem2 = document.getElementById('decrementItem2')
decrementItem2.addEventListener('click', function () {
    let quantityOfItem2 = stringToNum('quantityOfItem2');

    if (document.getElementById('quantityOfItem2').innerText > 0) {
        let quantity1Increased = quantityOfItem2 - 1;
        document.getElementById('quantityOfItem2').innerText = quantity1Increased;
        let priceOfItem2 = stringToNum('priceOfItem2')
        let price21Increased = priceOfItem2 - 59;
        document.getElementById('priceOfItem2').innerText = price21Increased;
        updateSubtotal();
    }
})


function updateSubtotal() {
    let newPriceItem1 = stringToNum('priceOfItem1')
    let newPriceItem2 = stringToNum('priceOfItem2')
    let subTotal = document.getElementById('subtotal')
    let newsubTotal = newPriceItem1 + newPriceItem2;
    subTotal.innerText = newsubTotal;
    let tax = document.getElementById('tax')
    let taxAmount = newsubTotal * 5 / 100;
    tax.innerText = taxAmount
    let total = document.getElementById('total')
    total.innerText = newsubTotal + taxAmount;

}











// function for get element and make it number 
function stringToNum(id) {
    let stringNum = parseFloat(document.getElementById(id).innerText);
    return stringNum;
}
