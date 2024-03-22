#include <iostream>
#include <algorithm>
#include <vector>

using namespace std;

int main(void) {
    int n;
    cin >> n;
    
    vector<pair<int, int>> v;

    for (int i=0; i<n; i++) {
        pair<int, int> a;
        cin >> a.first >> a.second;
        v.push_back(a);
    }

    sort(v.begin(), v.end());

    for (int i=0; i<n; i++) {
        cout
            << v.at(i).first 
            << " "
            << v.at(i).second
            << "\n";
    }

    return 0;
}