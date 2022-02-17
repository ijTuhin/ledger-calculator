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
    document.getElementById('total-expenses').innerText = totalExpenses;
    document.getElementById('balance-amount').innerText = balanceAmount;
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
    document.getElementById('savings-amount').innerText = savingsAmount;
    document.getElementById('remaining-balance').innerText = remainingBalance;
    // Getting input fields cleared
    // inputSavings.value = '';
    // inputIncome.value = '';
})
