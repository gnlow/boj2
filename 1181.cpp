#include <iostream>
#include <algorithm>
#include <vector>

using namespace std;

template <typename T>
bool include(vector<T> v, T x) {
    for (int i=0; i<v.size(); i++) {
        if (x == v[i]) {
            return true;
        }
    }
    return false;
}

int main(void) {
    ios_base::sync_with_stdio(0);
    int n;
    cin >> n;
    
    vector<string> v;

    for (int i=0; i<n; i++) {
        string a;
        cin >> a;
        if (!include(v, a))
            v.push_back(a);
    }

    sort(v.begin(), v.end(), [](string a, string b) {
        return a.size() == b.size()
            ? a < b
            : a.size() < b.size();
    });

    for (int i=0; i<v.size(); i++) {
        cout << v[i] << "\n";
    }

    return 0;
}