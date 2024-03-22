#include <iostream>
#include <algorithm>
#include <vector>
#include <set>

using namespace std;

bool cmp(string a, string b) {
    return a.size() == b.size()
        ? a < b
        : a.size() < b.size();
}

int main(void) {
    ios_base::sync_with_stdio(0);
    int n;
    cin >> n;
    
    set<string, decltype(&cmp)> s(cmp);

    for (int i=0; i<n; i++) {
        string a;
        cin >> a;
        if (s.find(a) == s.end())
            s.insert(a);
    }

    std::set<string>::iterator it;
    for (it = s.begin(); it != s.end(); ++it) {
        cout << *it << "\n";
    }

    return 0;
}