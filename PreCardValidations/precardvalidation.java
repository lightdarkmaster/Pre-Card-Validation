package PreCardValidations;
import java.util.stream.IntStream;

class precardvalidation{

    public static void main(String[] args){
        final int CREDIT_CARD_LENGTH = 16;
        try(var scanner = new java.util.Scanner(System.in)){
            System.out.print("Enter Credit Card Number: ");
            var creditCard = scanner.next();
            var isValid = IntStream.range(0, CREDIT_CARD_LENGTH).map(index ->{
                var reverseIndex = CREDIT_CARD_LENGTH - 1 - index;
                var numberValue = Character.getNumericValue(creditCard.charAt(reverseIndex));

                if(reverseIndex % 2 == 0) {
                    numberValue *= 2;
                    if(numberValue > 9)
                        numberValue -= 9;
                }
                return numberValue;
                
            }).peek(number -> System.out.print(number + " ")).sum() % 10 == 0;
            System.out.printf("\nValid: %B", isValid);
        }
    }
}