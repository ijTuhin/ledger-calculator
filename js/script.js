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
            // console.log('Please reduce your expenses!'); 
            alert('Please reduce your expenses!'); // For invalid input type error.
            document.getElementById('total-expenses').innerText = '00';
            document.getElementById('balance-amount').innerText = '00';
            // Getting input fields cleared
            /* inputIncome.value = '';
            inputFood.value = '';
            inputRent.value = '';
            inputClothes.value = ''; */
        }
    }
    else {
        // console.log('Negative numbers are not accepted! Please provide valid amount');
        alert('Negative numbers are not accepted! Please provide valid amount'); // For invalid input type error.
        document.getElementById('total-expenses').innerText = '00';
        document.getElementById('balance-amount').innerText = '00';
        // Getting input fields cleared
        /* inputIncome.value = '';
        inputFood.value = '';
        inputRent.value = '';
        inputClothes.value = ''; */
    }
    // Getting input fields cleared
    // inputIncome.value = '';
    // inputFood.value = '';
    // inputRent.value = '';
    // inputClothes.value = '';
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
    if (inputIncomeValue >= 0 && inputFoodValue >= 0 && inputRentValue >= 0 && inputClothesValue >= 0) {
        if (inputIncomeValue >= totalExpenses) {
            if (savingsAmount <= balanceAmount) {
                document.getElementById('savings-amount').innerText = savingsAmount;
                document.getElementById('remaining-balance').innerText = remainingBalance;
            }
            else {
                // console.log('You do not have sufficient balance!');
                alert('You do not have sufficient balance!'); // For invalid input type error.
                document.getElementById('savings-amount').innerText = '00';
                document.getElementById('remaining-balance').innerText = '00';
                // Getting input fields cleared
                /* inputSavings.value = '';
                inputIncome.value = ''; */
            }
        }
        else {
            // console.log('Please reduce your expenses!');
            alert('Please reduce your expenses!'); // For invalid input type error.
            document.getElementById('total-expenses').innerText = '00';
            document.getElementById('balance-amount').innerText = '00';
            // Getting input fields cleared
            /* inputIncome.value = '';
            inputFood.value = '';
            inputRent.value = '';
            inputClothes.value = ''; */
        }
    }
    else {
        // console.log('Negative numbers are not accepted! Please provide valid amount');
        alert('Negative numbers are not accepted! Please provide valid amount'); // For invalid input type error.
        document.getElementById('total-expenses').innerText = '00';
        document.getElementById('balance-amount').innerText = '00';
        // Getting input fields cleared
        /* inputIncome.value = '';
        inputFood.value = '';
        inputRent.value = '';
        inputClothes.value = ''; */
    }
})
