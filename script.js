let quantityOfItem1 = document.getElementById('quantityOfItem1');
let incrementItem1 = document.getElementById('incrementItem1');
let decrementItem1 = document.getElementById('decrementItem1');
let priceOfItem1 = document.getElementById('priceOfItem1');
let quantityOfItem1Num = parseFloat(quantityOfItem1.innerText);
let quantityOfItem2Num = parseFloat(quantityOfItem2.innerText);
let priceOfItem1Num = parseFloat(priceOfItem1.innerText)
let priceOfItem2Num = parseFloat(priceOfItem2.innerText)
let subtotal = document.getElementById('subtotal')
let subtotalNum = parseFloat(subtotal)


//Increment change
incrementItem1.addEventListener('click', function () {
    quantityOfItem1Num++
    quantityOfItem1.innerText = quantityOfItem1Num;
    let priceOfItem1NumChange = priceOfItem1Num * quantityOfItem1Num
    priceOfItem1.innerText = priceOfItem1NumChange;
    subtotal.innerText = priceOfItem1NumChange
})

//Decrement change
decrementItem1.addEventListener('click', function () {
    if (quantityOfItem1.innerText > 0) {
        quantityOfItem1Num--
        quantityOfItem1.innerText = quantityOfItem1Num

        let priceOfItem1NumChange = priceOfItem1Num * quantityOfItem1Num
        priceOfItem1.innerText = priceOfItem1NumChange;
        subtotal.innerText = priceOfItem1NumChange
    }
})




//second item
incrementItem2.addEventListener('click', function () {
    quantityOfItem2Num++
    quantityOfItem2.innerText = quantityOfItem2Num
    console.log(quantityOfItem2Num)
    let priceOfItem2NumChange = priceOfItem2Num * quantityOfItem2Num
    priceOfItem2.innerText = priceOfItem2NumChange;
    subtotal.innerText = priceOfItem2NumChange

})

decrementItem2.addEventListener('click', function () {
    if (quantityOfItem2.innerText > 0) {
        quantityOfItem2Num--
        quantityOfItem2.innerText = quantityOfItem2Num
        console.log(quantityOfItem2Num)

        let priceOfItem2NumChange = priceOfItem2Num * quantityOfItem2Num
        priceOfItem2.innerText = priceOfItem2NumChange;
        subtotal.innerText = priceOfItem2NumChange

    }
})
quantityOfItem2.addEventListener('input', function () {
    console.log('change detected')
})