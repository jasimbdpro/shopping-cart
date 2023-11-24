let incrementItem1 = document.getElementById('incrementItem1')
incrementItem1.addEventListener('click', function () {
    let quantityOfItem1 = stringToNum('quantityOfItem1');
    let quantity1Increased = quantityOfItem1 + 1;
    document.getElementById('quantityOfItem1').innerText = quantity1Increased;
    let priceOfItem1 = stringToNum('priceOfItem1')
    let price1Increased = priceOfItem1 + 1219;
    document.getElementById('priceOfItem1').innerText = price1Increased;

})



// function for get element and make it number 
function stringToNum(id) {
    let stringNum = parseFloat(document.getElementById(id).innerText);
    return stringNum;
}
