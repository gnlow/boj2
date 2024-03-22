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
        cin >> a.second >> a.first;
        v.push_back(a);
    }

    sort(v.begin(), v.end());

    for (int i=0; i<n; i++) {
        cout
            << v.at(i).second 
            << " "
            << v.at(i).first
            << "\n";
    }

    return 0;
}