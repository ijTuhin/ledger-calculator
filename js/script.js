document.getElementById('calculate-balance').addEventListener('click', function () {
    // console.log('Calculate Button clicked');
    const inputIncome = document.getElementById('inputIncome').value;
    const inputIncomeValue = parseFloat(inputIncome);

    const inputFood = document.getElementById('inputFood').value;
    const inputFoodValue = parseFloat(inputFood);

    const inputRent = document.getElementById('inputRent').value;
    const inputRentValue = parseFloat(inputRent);

    const inputClothes = document.getElementById('inputClothes').value;
    const inputClothesValue = parseFloat(inputClothes);
    // console.log(inputIncomeValue, inputFoodValue, inputRentValue, inputClothesValue);
})