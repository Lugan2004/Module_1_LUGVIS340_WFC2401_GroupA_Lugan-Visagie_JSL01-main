function validateSyntax() {
    // add a console.log to check if onclick eventlistner works correctly
    console.log("button clicked");
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    let petPrefix = "pet_"
    //combine regular expressions into a single patter
    let validInputRegex = new RegExp(`^${petPrefix}[0-9]+[a-zA-Z]+$`);
    let result = ''; // Placeholder for validation result

    // TODO: Write your validation logic here
        // Check if input starts with 'pet_' and followed by alphanumeric characters

            document.getElementById('result').innerText = result;
}


