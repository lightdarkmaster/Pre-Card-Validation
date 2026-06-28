const CREDIT_CARD_LENGTH = 16;

const creditCard = prompt("Enter Credit Card Number:");

if (creditCard.length !== CREDIT_CARD_LENGTH) {
    console.log("Invalid credit card length.");
} else {
    let sum = 0;

    for (let index = 0; index < CREDIT_CARD_LENGTH; index++) {
        const reverseIndex = CREDIT_CARD_LENGTH - 1 - index;
        let numberValue = parseInt(creditCard.charAt(reverseIndex), 10);

        if (reverseIndex % 2 === 0) {
            numberValue *= 2;

            if (numberValue > 9) {
                numberValue -= 9;
            }
        }

        process.stdout?.write
            ? process.stdout.write(numberValue + " ")
            : console.log(numberValue);

        sum += numberValue;
    }

    const isValid = sum % 10 === 0;

    console.log(`\nValid: ${isValid}`);
}





// another setup for validation using map and reduce:


const creditCard = "1234567812345670";

const isValid =
    [...creditCard]
        .map((_, index) => {
            const reverseIndex = creditCard.length - 1 - index;
            let numberValue = Number(creditCard[reverseIndex]);

            if (reverseIndex % 2 === 0) {
                numberValue *= 2;
                if (numberValue > 9) numberValue -= 9;
            }

            console.log(numberValue);
            return numberValue;
        })
        .reduce((sum, num) => sum + num, 0) % 10 === 0;

console.log("Valid:", isValid);



function validateCreditCard(cardNumber) {
    let sum = 0;

    for (let i = 0; i < cardNumber.length; i++) {
        const reverseIndex = cardNumber.length - 1 - i;
        let digit = Number(cardNumber[reverseIndex]);

        if (reverseIndex % 2 === 0) {
            digit *= 2;
            if (digit > 9) digit -= 9;
        }

        sum += digit;
    }

    return sum % 10 === 0;
}

console.log(validateCreditCard("1234567812345670"));