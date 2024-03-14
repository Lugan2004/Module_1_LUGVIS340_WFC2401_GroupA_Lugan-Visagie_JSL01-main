function validateSyntax() {
    // add a console.log to check if onclick eventlistner works correctly
    console.log("button clicked");
    let input = document.getElementById('petInput').value.trim();// Trim whitespace from input
    // Validation logic goes here
    let petPrefix = "pet_";
    //combine regular expressions into a single pattern
    let validInputRegex = new RegExp(`^${petPrefix}[0-9]+[a-zA-Z]+$`);
    let result = ''; // Placeholder for validation result
    //add a console.log to check the validInputRegex
    console.log(validInputRegex);

    // TODO: Write your validation logic here
        // Check if input starts with 'pet_' and followed by alphanumeric characters
      // Check if input matches the combined pattern
    if (validInputRegex.test(input)) {
        result = 'valid Syntax';
        document.getElementById('result').style.color = '#008000';
        document.getElementById('indicater').style.backgroundColor = '#008000';
        console.log(result);
    } else {
        result = 'invalid Syntax';
        document.getElementById('result').style.color = '#ff4500';
        document.getElementById('indicater').style.backgroundColor = '#ff4500';
        console.log(result);
    }

            document.getElementById('result').innerText = result;
}


