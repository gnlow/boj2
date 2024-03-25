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

    vector<int> ps;

    for (int i=2; i<=1000000; i++) {
        if (ns[i] == 0) continue;
        ps.push_back(i);
        for (int j=i*2; j<=1000000; j+=i) {
            ns[j] = 0;
        }
    }
    
    while (true) {
        int a;
        cin >> a;
        if (a == 0) break;
        
        for (int p: ps) {
            if (p > a) break;
            if (ns[a - p] == 1) {
                cout
                    << a
                    << " = "
                    << p
                    << " + "
                    << a - p
                ;
                break;
            }
        }
    }

    return 0;
}