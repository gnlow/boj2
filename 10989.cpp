#include <iostream>

using namespace std;

int main(void) {
    ios_base::sync_with_stdio(0);
    int n;
    cin >> n;
    
    int v[10000];

    for (int i=0; i<10000; i++) {
        v[i] = 0;
    }

    for (int i=0; i<n; i++) {
        int a;
        cin >> a;
        v[a-1]++;
    }

    for (int i=0; i<10000; i++) {
        for (int j=0; j<v[i]; j++) {
            cout << i+1 << "\n";
        }
    }

    return 0;
}