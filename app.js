var initialPrice = document.querySelector('#initial-price');
var stocksQuantity = document.querySelector('#stocks-quantity');
var CurrentPrice = document.querySelector('#current-price');

var submitBtn = document.querySelector('#submit-btn');

var outputBox = document.querySelector('.output-box');
//outputBox.innerText="chalu"

function calculateProfitAndLoss(initial, current, quantity) {
    if (initial > current) {
        //loss
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss / initial) * 100;

        showOutput(`Hey😢 the loss is ₹${loss} and the percent is ${lossPercentage.toFixed(2)}% `);

    } else if (current > initial) {
        //profit
        var profit = (current - initial) * quantity;
        var profitPercentage = (profit / initial) * 100;

        showOutput(`Hey the 😃Profit is ₹${profit} and the percent is ${profitPercentage.toFixed(2)} % `);


    } else {
        //same
        showOutput("No Loss No Gain!!!");
    }
}

// calculateProfitAndLoss(100,500,1);

submitBtn.addEventListener('click', submitHandler);

function submitHandler() {
    var ip = Number(initialPrice.value);
    var qty = Number(stocksQuantity.value);
    var curr = Number(CurrentPrice.value);
    calculateProfitAndLoss(ip, curr, qty);
}
function showOutput(msg) {  
    //console.log(msg)
    outputBox.innerText = msg;
}
