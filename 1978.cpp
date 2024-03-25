#include <iostream>
#include <vector>

using namespace std;

int main(void) {
    ios_base::sync_with_stdio(0);
    cin.tie(NULL);

    int ns[1001];

    for (int i=2; i<=1000; i++) {
        ns[i] = 1;
    }

    ns[1] = 0;


    for (int i=2; i<=100; i++) {
        if (ns[i] == 0) continue;
        for (int j=i*2; j<=1000; j+=i) {
            ns[j] = 0;
        }
    }
    
    int n;
    cin >> n;

    int cnt = 0;

    for (int i=0; i<n; i++) {
        int a;
        cin >> a;
        if (ns[a]) cnt++;
    }

    cout << cnt;

    return 0;
}