#include <iostream>
#include <vector>

using namespace std;

int main(void) {
    ios_base::sync_with_stdio(0);
    cin.tie(NULL);

    int ns[(int) 1e6 + 1];

    for (int i=2; i<=1000000; i++) {
        ns[i] = 1;
    }

    ns[1] = 0;


    for (int i=2; i<=1000000; i++) {
        if (ns[i] == 0) continue;
        for (int j=i*2; j<=1000000; j+=i) {
            ns[j] = 0;
        }
    }
    
    int n, m;
    cin >> n;
    cin >> m;

    for (int i=n; i<=m; i++) {
        if (ns[i]) cout << i << '\n';
    }

    return 0;
}