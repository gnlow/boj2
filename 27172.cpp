#include <iostream>
#include <vector>
using namespace std;

int ns[(int) 1e6 + 1];

int main() {

    /*
    for (int i=2; i<=1000000; i++) {
        ns[i] = 1;
    }

    vector<int> ps;

    for (int i=2; i<=1000000; i++) {
        if (ns[i] == 0) continue;
        ps.push_back(i);
        for (int j=i*2; j<=1000000; j+=i) {
            ns[j] = 0;
        }
    }

    cout << ps.size();

    */
    int n;
    cin >> n;

    int xs[n];
    int cnts[n];

    for (int i=0; i<n; i++) {
        cin >> xs[i];
        cnts[i] = 0;

        for (int j=0; j<i; j++) {
            //cout << xs[j] << " " << xs[i] << "\n";
            if (xs[j] % xs[i] == 0) {
                cnts[j]--;
                cnts[i]++;
            }
            if (xs[i] % xs[j] == 0) {
                cnts[i]--;
                cnts[j]++;
            }
        }
    }

    for (int cnt: cnts) {
        cout << cnt << " ";
    }
}