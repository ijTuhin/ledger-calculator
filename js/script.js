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
    // Adding all expenses
    const totalExpenses = inputFoodValue + inputRentValue + inputClothesValue;
    console.log(totalExpenses);
    // Displaying total expenses
    document.getElementById('total-expenses').innerText = totalExpenses;
    // Getting input fields cleared
    inputIncome.value = '';
    inputFood.value = '';
    inputRent.value = '';
    inputClothes.value = '';
})