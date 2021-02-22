//getting dom elements
const currOnePicker = document.getElementById('Currency-one');
const currTwoPicker = document.getElementById('Currency-two');
const currOneAmount = document.getElementById('amount-one');
const currTwoAmount = document.getElementById('amount-two');
const flipButton = document.getElementById('flip');
const rate = document.getElementById('rate');



//Fetch exchange rate from 3rd party API and update DOM
//www.exchangerate-api.com
function calculate() {

    const currencyOneCode = currOnePicker.value;
    const currencyTwoCode = currTwoPicker.value;

    fetch(`https://v6.exchangerate-api.com/v6/d73245b002d2d961fd52567e/latest/${currencyOneCode}`)
        .then(res => res.json())
        .then(data => {

            //get the exchange rate from API Data
            const exchangeRate = data.conversion_rates[currencyTwoCode];

            //Display the conversion rate
            rate.innerText = `1 ${currencyOneCode} = ${exchangeRate} ${currencyTwoCode}`;

            //apply conversion rate and update amount of currency two
            currTwoAmount.value = (currOneAmount.value * exchangeRate).toFixed(2);

        });

}

//Flip function for the flip button to reverse currency
function flip() {
    const temp = currOnePicker.value;
    currOnePicker.value = currTwoPicker.value;
    currTwoPicker.value = temp;
    calculate();
};

//eventlistners
currOnePicker.addEventListener('change', calculate);
currTwoPicker.addEventListener('change', calculate);
currOneAmount.addEventListener('input', calculate);
currTwoAmount.addEventListener('input', calculate);
flipButton.addEventListener('click', flip);



calculate();