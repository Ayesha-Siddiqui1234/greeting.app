function greetings() {
    let takingPromptOfName = prompt("Please enter your name");

    // Getting the values of the date inputs
    let dobInput = document.getElementById('dobInput').value;
    let currentInput = document.getElementById('currentInput').value;

   
    let dateOfBirth = new Date(dobInput);
    let currentDate = new Date(currentInput);

    // Difference in years
    let takingAge = currentDate.getFullYear() - dateOfBirth.getFullYear();

    // Check eligibility
    if (takingAge >= 18) {
        document.getElementById('displayContent').innerHTML = `Welcome ${takingPromptOfName}!!! You are eligible to participate!`;
    } else if (takingAge < 18 && takingAge > 0) {
        document.getElementById('displayContent').innerHTML = `Sorry ${takingPromptOfName}!! You are not eligible to participate!`;
    } else {
        document.getElementById('displayContent').innerHTML = `Try again!! you are entering invalid input`;
    }
}