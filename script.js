let quantityOfItem1 = document.getElementById('quantityOfItem1');
let incrementItem1 = document.getElementById('incrementItem1');
let decrementItem1 = document.getElementById('decrementItem1');
let priceOfItem1 = document.getElementById('priceOfItem1');
let quantityOfItem1Num = parseFloat(quantityOfItem1.innerText);
let quantityOfItem2Num = parseFloat(quantityOfItem2.innerText);


//Increment change
incrementItem1.addEventListener('click', function () {
    quantityOfItem1Num++
    quantityOfItem1.innerText = quantityOfItem1Num
})

//Decrement change
decrementItem1.addEventListener('click', function () {
    if (quantityOfItem1.innerText > 0) {
        quantityOfItem1Num--
        quantityOfItem1.innerText = quantityOfItem1Num
    }
})

incrementItem2.addEventListener('click', function () {
    quantityOfItem2Num++
    quantityOfItem2.innerText = quantityOfItem2Num
    console.log(quantityOfItem2Num)

})

decrementItem2.addEventListener('click', function () {
    if (quantityOfItem2.innerText > 0) {
        quantityOfItem2Num--
        quantityOfItem2.innerText = quantityOfItem2Num
        console.log(quantityOfItem2Num)
    }
})
