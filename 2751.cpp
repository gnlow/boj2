#include <iostream>
#include <algorithm>
#include <vector>

using namespace std;

int main(void) {
    int n;
    cin >> n;
    
    vector<int> v;

    for (int i=0; i<n; i++) {
        int a;
        cin >> a;
        v.push_back(a);
    }

    sort(v.begin(), v.end());

    for (int i=0; i<n; i++) {
        cout << v.at(i) << "\n";
    }

    return 0;
}