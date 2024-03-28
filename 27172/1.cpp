#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int ns[(int) 1e6 + 1];

int* bin(int* begin, int* end, int target) {
    int size = end - begin;
    int* center = begin + (size / 2);

    if (target == *center) return center;
    if (begin >= end) return 0;

    if (target < *center) return bin(begin, center-1, target);
    if (target > *center) return bin(center+1, end, target);
}

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
    }

    sort(xs, xs + n);

    for (int x: xs) {
        for (int i=x; i<1000000; i+=x) {
            int* target = bin(xs, xs + n, i);
            if (target) {
                cnts[&x - &xs[0]]++;
                //cout << target - &xs[0] << "\n";
                cout << cnts[target - &xs[0]] << "\n";
                cnts[target - &xs[0]]--;
            }
        }
    }

    for (int cnt: cnts) {
        cout << cnt << " ";
    }
}