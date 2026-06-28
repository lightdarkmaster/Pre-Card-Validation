# Pre-Credit Card Validation Using the Luhn Algorithm

## Overview

This project implements **Pre-Credit Card Validation** using the **Luhn Algorithm** (also known as the Modulus 10 or Mod 10 algorithm). The program validates whether a 16-digit credit card number is mathematically valid before it is processed by a payment system.

> **Note:** Passing the Luhn Algorithm does **not** guarantee that a credit card is genuine or active. It only verifies whether the number follows the correct checksum format.

---

## Features

- Validates 16-digit credit card numbers.
- Implements the Luhn Algorithm.
- Calculates the checksum automatically.
- Determines whether the entered card number is **Valid** or **Invalid**.
- Simple and efficient implementation.

---

## How the Luhn Algorithm Works

1. Start from the **rightmost digit** of the card number.
2. Moving left, **double every second digit**.
3. If doubling results in a number greater than 9, subtract 9 from it.
4. Add all digits together.
5. If the total is divisible by **10**, the card number is valid.

### Example

Card Number:

```
4539148803436467
```

Processing:

| Position | Digit | Operation | Result |
|----------|------:|-----------|-------:|
| Rightmost | 7 | Keep | 7 |
| Next | 6 | Double | 12 → 3 |
| Next | 4 | Keep | 4 |
| Next | 6 | Double | 12 → 3 |
| ... | ... | ... | ... |

Final Sum:

```
80
```

Since:

```
80 % 10 = 0
```

The card number is **Valid**.

---

## Program Flow

```
Start
   │
   ▼
Input Credit Card Number
   │
   ▼
Check if Length is 16 Digits
   │
   ▼
Apply Luhn Algorithm
   │
   ▼
Calculate Total Sum
   │
   ▼
Is Sum % 10 == 0 ?
   │
 ┌─┴───────────┐
 │             │
Yes           No
 │             │
 ▼             ▼
Valid       Invalid
 │             │
 └──────┬──────┘
        ▼
       End
```

---

## Sample Input and Output

### Valid Card

```
Enter Credit Card Number:
4539148803436467

Valid Credit Card
```

### Invalid Card

```
Enter Credit Card Number:
4539148803436468

Invalid Credit Card
```

---

## Time Complexity

| Operation | Complexity |
|-----------|-----------|
| Validation | **O(n)** |
| Space | **O(1)** |

Where **n** is the number of digits (16).

---

## Project Structure

```
PreCreditCardValidation/
│
├── src/
│   └── PreCreditCardValidation.java
│
├── README.md
└── LICENSE
```

---

## Requirements

- Java JDK 17 or later
- Any Java IDE (IntelliJ IDEA, Eclipse, VS Code, or NetBeans)

---

## How to Run

### Compile

```bash
javac PreCreditCardValidation.java
```

### Run

```bash
java PreCreditCardValidation
```

---

## Example Test Numbers

### Valid

```
4539148803436467
4532015112830366
4485275742308327
4556737586899855
```

### Invalid

```
4539148803436468
1111222233334444
1234567890123456
9999999999999999
```

---

## Limitations

- Supports only 16-digit card numbers.
- Does not identify the card issuer (Visa, MasterCard, etc.).
- Does not verify whether the account exists or is active.
- Performs only checksum validation using the Luhn Algorithm.

---

## Future Improvements

- Support multiple card lengths (13–19 digits).
- Detect card brands (Visa, MasterCard, American Express, Discover, etc.).
- Add a graphical user interface (GUI).
- Accept formatted input with spaces or hyphens.
- Implement unit tests for validation logic.

---

## References

- Luhn, H. P. (1960). *Computer for Verifying Numbers*. U.S. Patent No. 2,950,048.
- ISO/IEC 7812 Identification Cards – Numbering System.
- https://en.wikipedia.org/wiki/Luhn_algorithm


---
## Additional Resources for this Project For Testing.
- Credit Card Checker - https://dnschecker.org/credit-card-validator.php?ccn=5555500830030331
- Paypal Test Cards - https://www.paypalobjects.com/en_GB/vhelp/paypalmanager_help/credit_card_numbers.htm
- Master Cards Test Cards - https://developer.mastercard.com/mastercard-merchant-presented-qr/documentation/server-apis/test-card-numbers/

---

## License

This project is intended for educational purposes and may be freely modified and distributed.