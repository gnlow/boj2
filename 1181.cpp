#include <iostream>
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<int> v;

    for (int i=0; i<n; i++) {
        int x;
        cin >> x;
        v.push_back(x);
    }

    sort(v.begin(), v.end(), [](string a, string b) {
        a.size() == b.size()
            ? a < b
            : 
    });

    string a = "hello";
    cout<<a;

    return 0;
}