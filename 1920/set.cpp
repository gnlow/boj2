#include <iostream>
#include <algorithm>
#include <vector>
#include <set>

using namespace std;

int main(void) {
    ios_base::sync_with_stdio(0);
    cin.tie(NULL);

    int n;
    cin >> n;
    
    set<int> s;

    for (int i=0; i<n; i++) {
        int a;
        cin >> a;
        s.insert(a);
    }

    int m;
    cin >> m;

    for (int i=0; i<m; i++) {
        int a;
        cin >> a;
        cout
            << (s.find(a) != s.end()
                ? "1"
                : "0"
            )
            << "\n";
    }

    return 0;
}