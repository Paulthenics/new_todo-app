#include <stdio.h>

int main() {

    int num;

    printf("Enter An Integer: ");
    scanf("%d", &num);

    if (num % 2 == 0) {
        printf("That is an even number! :D");
    } else {
        printf("That is an odd number! :D");
    }

    return 0;

}