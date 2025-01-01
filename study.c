#include <stdio.h>
#include <string.h>
#include <math.h>

int fact(int a);
int sum(int b);
int expo(int x, int y);

void main() {

    int num;

    printf("Enter An Integer: ");
    scanf("%d", &num);

    // FACTORIAL OF A NUMBER
    // printf("%d! = %d", num, fact(num));

    // SUM OF FIRST n NATURAL NUMBERS
    // printf("Sum of First %d Natural Numbers is: %d", num, sum(num));


}

int fact(int a) {
    if (a == 0 || a == 1) {
        return 1;
    } else {
        return a * fact(a - 1);
    }
}

int sum(int b) {
    if (b == 1) {
        return 1;
    } else {
        return b + sum(b - 1);
    }
}

int expo(int x, int y) {
    if (y == 0) {
        return 1;
    } else {
        return x * expo(x);
    }
}