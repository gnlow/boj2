#include <iostream>

using namespace std;

int main() {
    int t; cin >> t;
    for (int i=0; i<t; i++) {
        int m, n, x, y;
        cin
            >> m
            >> n
            >> x
            >> y;
        for (int i=m+x; i <= m*n; i+=m) {
            //cout << i << "\n";
            if (i % n == y) {
                cout << i << "\n";
                goto xx;
            }
        }
        cout << -1 << "\n";
        xx: {}
    }
}