#include <iostream>
#include <algorithm>
#include <vector>

using namespace std;

bool include(int array[], int begin, int end, int x) {
    int length = end - begin;
    int center = (begin + end) / 2;

    if (array[center] == x) return true;
    if (length == 1) return false;
    if (length == 0) return false;

    return x < array[center]
        ? include(array, begin, center, x)
        : include(array, center, end, x)
    ;
}

int main(void) {
    ios_base::sync_with_stdio(0);
    cin.tie(NULL);

    int n;
    cin >> n;
    
    int s[n];

    for (int i=0; i<n; i++) {
        int a;
        cin >> a;
        s[i] = a;
    }

    sort(s, s + n);

    int m;
    cin >> m;

    for (int i=0; i<m; i++) {
        int a;
        cin >> a;
        
        cout
            << include(s, 0, n, a)
            << "\n"
        ;
    }

    return 0;
}