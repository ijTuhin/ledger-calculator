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
    // Adding all expenses and Displaying total expenses
    const totalExpenses = inputFoodValue + inputRentValue + inputClothesValue;
    document.getElementById('total-expenses').innerText = totalExpenses;
    // Calculating and displaying balance amount
    const balanceAmount = inputIncomeValue - totalExpenses;
    document.getElementById('balance-amount').innerText = balanceAmount;
    // Getting input fields cleared
    inputIncome.value = '';
    inputFood.value = '';
    inputRent.value = '';
    inputClothes.value = '';
})
//For Savings section
document.getElementById('savings-button').addEventListener('click', function () {

    // getting input value and converting into float type
    const inputSavings = document.getElementById('inputSavings');
    const inputSavingsText = inputSavings.value;
    const inputSavingsValue = parseFloat(inputSavingsText);
    // Calculating percentage
    const percentageValue = inputSavingsValue / 100;
    // calculating savings amount from income
    const inputIncome = document.getElementById('inputIncome');
    const inputIncomeText = inputIncome.value;
    const inputIncomeValue = parseFloat(inputIncomeText);
    const savingsAmount = inputIncomeValue * percentageValue;
    document.getElementById('savings-amount').innerText = savingsAmount;

    // Getting input fields cleared
    inputSavings.value = '';
    inputIncome.value = '';
})