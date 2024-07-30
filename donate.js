function showOrgNameField(show) {
    document.getElementById('orgNameField').style.display = show ? 'block' : 'none';
    document.getElementById('orgName').required = show;
}
function checkPreparedMeal() {
    const foodType = document.getElementById('foodType').value;
    const preparedMealInfo = document.getElementById('preparedMealInfo');
    const ingredients = document.getElementById('ingredients');
    const prepDate = document.getElementById('prepDate');

    if (foodType === 'Prepared Meal') {
        preparedMealInfo.style.display = 'block';
        ingredients.required = true;
        prepDate.required = true;
    } else {
        preparedMealInfo.style.display = 'none';
        ingredients.required = false;
        prepDate.required = false;
    }
}
document.getElementById('fd-form').addEventListener('submit', function(event) {
    const donorDeclaration = document.getElementById('donorDeclaration');
    if (!donorDeclaration.checked) {
        alert('You must agree to the declaration.');
        event.preventDefault();
    }
});




function showOrgNameField(show) {
    document.getElementById('orgNameField').style.display = show ? 'block' : 'none';
  }

  function checkPreparedMeal() {
    var foodType = document.getElementById('foodType').value;
    document.getElementById('preparedMealInfo').style.display = (foodType === 'Prepared Meal') ? 'block' : 'none';
  }