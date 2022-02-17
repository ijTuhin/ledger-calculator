document.getElementById('calculate-balance').addEventListener('click', function () {

    // getting input values and converting into float type
    const inputIncome = document.getElementById('inputIncome');
    const inputIncomeText = inputIncome.value;
    const inputIncomeValue = parseFloat(inputIncomeText);

    const inputFood = document.getElementById('inputFood');
    const inputFoodText = inputFood.value;
    const inputFoodValue = parseFloat(inputFoodText);

    const inputRent = document.getElementById('inputRent');
    const inputRentText = inputRent.value;
    const inputRentValue = parseFloat(inputRentText);

    const inputClothes = document.getElementById('inputClothes');
    const inputClothesText = inputClothes.value;
    const inputClothesValue = parseFloat(inputClothesText);

    // Adding all expenses and calculating balance amount
    const totalExpenses = inputFoodValue + inputRentValue + inputClothesValue;
    const balanceAmount = inputIncomeValue - totalExpenses;

    // displaying outputs
    if (inputIncomeValue >= 0 && inputFoodValue >= 0 && inputRentValue >= 0 && inputClothesValue >= 0) {
        if (inputIncomeValue >= totalExpenses) {
            document.getElementById('total-expenses').innerText = totalExpenses;
            document.getElementById('balance-amount').innerText = balanceAmount;
        }
        else {
            alert('Please reduce your expenses!'); // while expense exceeds income type error.
            document.getElementById('total-expenses').innerText = '00';
            document.getElementById('balance-amount').innerText = '00';
            //Clearing input field to get new input
            inputFood.value = '';
            inputRent.value = '';
            inputClothes.value = '';
        }
    }
    else {
        alert('Negative number detected! Please provide valid amount'); // For invalid negative integer input type error.
        document.getElementById('total-expenses').innerText = '00';
        document.getElementById('balance-amount').innerText = '00';
        //Clearing input field to get new input
        inputIncome.value = '';
        inputFood.value = '';
        inputRent.value = '';
        inputClothes.value = '';
    }
})

//For Savings section
document.getElementById('savings-button').addEventListener('click', function () {

    // getting input value and converting into float type
    const inputSavings = document.getElementById('inputSavings');
    const inputSavingsText = inputSavings.value;
    const inputSavingsValue = parseFloat(inputSavingsText);
    // Inputs from balance section
    const inputIncome = document.getElementById('inputIncome');
    const inputIncomeText = inputIncome.value;
    const inputIncomeValue = parseFloat(inputIncomeText);

    const inputFood = document.getElementById('inputFood');
    const inputFoodText = inputFood.value;
    const inputFoodValue = parseFloat(inputFoodText);

    const inputRent = document.getElementById('inputRent');
    const inputRentText = inputRent.value;
    const inputRentValue = parseFloat(inputRentText);

    const inputClothes = document.getElementById('inputClothes');
    const inputClothesText = inputClothes.value;
    const inputClothesValue = parseFloat(inputClothesText);

    // Adding all expenses and calculating balance amount
    const totalExpenses = inputFoodValue + inputRentValue + inputClothesValue;
    const balanceAmount = inputIncomeValue - totalExpenses;

    // Calculating percentage
    const percentageValue = inputSavingsValue / 100;

    // calculating savings and remaining balance amount from income
    const savingsAmount = inputIncomeValue * percentageValue;
    const remainingBalance = balanceAmount - savingsAmount;

    // Displaying output
    if (inputIncomeValue >= 0 && inputFoodValue >= 0 && inputRentValue >= 0 && inputClothesValue >= 0 && inputSavingsValue >= 0) {
        if (inputIncomeValue >= totalExpenses) {
            if (savingsAmount <= balanceAmount) {
                document.getElementById('savings-amount').innerText = savingsAmount;
                document.getElementById('remaining-balance').innerText = remainingBalance;
            }
            else {
                alert('You do not have sufficient balance!'); // For insufficient balance type error.
                document.getElementById('savings-amount').innerText = '00';
                document.getElementById('remaining-balance').innerText = '00';
                //Clearing input field to get new input
                inputSavings.value = '';
            }
        }
        else {
            alert('Please reduce your expenses!'); // while expense exceeds income type error.
            document.getElementById('total-expenses').innerText = '00';
            document.getElementById('balance-amount').innerText = '00';
            //Clearing input field to get new input
            inputFood.value = '';
            inputRent.value = '';
            inputClothes.value = '';
        }
    }
    else {
        alert('Negative number detected! Please provide the valid amount'); // For invalid negative integer input type error.
        document.getElementById('total-expenses').innerText = '00';
        document.getElementById('balance-amount').innerText = '00';
        //Clearing input field to get new input
        inputIncome.value = '';
        inputFood.value = '';
        inputRent.value = '';
        inputClothes.value = '';
        inputSavings.value = '';
    }
})
