#include <stdio.h>
#include <math.h>

int main() {

    int a[10] = {1, 20, 3}, i;
    int *p = &a[3];
    int *q = p + 2;

    for (i = 3; i < 10; i++)
        a[i] = a[i - 2] + 1;

    *(++q) = *(++p);
    q++;
    *(q++) = *(p++);

    printf("%d %d %d\n", *a + *q - *p, q - p, *p - *q);

    for (i = 4; i < 8; i++)
        printf(" %d", a[i]);   

    return 0;
}