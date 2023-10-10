#include <stdio.h>
#include <stdlib.h>

int main() {
    float total = 0, counter = 0, milesDriven, gallonsUsed, milesPerGallon, aveMilesPerGallon;

    printf("Enter the miles driven (-1 to end): ");
    scanf("%f", &milesDriven);

    while (milesDriven != -1) {
        printf("Enter gallons used: ");
        scanf("%f", &gallonsUsed);

        milesPerGallon = milesDriven / gallonsUsed;
        printf("Miles per Gallon for this tank was: %f\n\n", milesPerGallon);

        counter = counter + 1;
        total = total + milesPerGallon;

        printf("Enter the miles driven (-1 to end): ");
        scanf("%f", &milesDriven);
    }

    if (counter != 0) {
        aveMilesPerGallon = total / counter;
        printf("Overall average miles per gallon for this tank was: %f\n", aveMilesPerGallon);
    }

    return 0;
}





#include <stdio.h>

int main(){
    int largest1 = 0;
    int largest2 = 0;
    int num = 1
    while(num<=10){
        int input;
        printf("Enter the numbers")
        scanf("%d",&number);
        if(input>=largest1){            40>=0 true  50>=40 true 45>=50 false
                                       largest2 = 45 largest1 = 50   
            largest2 = largest1
            largest1 = input
        }else if(input>largest2){ 45>=40
            largest2 = input;
        }
        num++
    }
    printf("The largest number is:\n",&largest1);
    printf("The second largest number is:\n",&largest2);
    return 0;
}

our test data will be the following values 40,50,35,60,58,80
/* A programmer defined square function*/
#include<stdio.h>

int square(int); /* function prototype*/ parameters

main(){

    int x;

    for(x = 1; x <= 10; x++)  arguments,parameters
    printf("%d  ", square(x)); invoking,calling - means assining values

    printf("\n");
    return 0;

}
/* function definition*/
int square(int y){
    return y*y;
}
int num,square
printf("enter num");
scanf('%d',num)
square = num*num;
printf("The square of the number is:",&square) functions are values