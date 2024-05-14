#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    ios_base::sync_with_stdio(0);
    cin.tie(nullptr);

    int n; cin >> n;

    int nums[500000];

    for (int i=0; i<n; i++) {
        int a; cin >> a;
        nums[i] = a;
    }

    int cnt = 0;
    for (int i=0; i<n; i++) {
        for (int j=i-1; i>=0; i--) {
            if (nums[j] > nums[i]) break;
            cnt++;
        }
        for (int j=i+1; i<n; i++) {
            if (nums[j] > nums[i]) break;
            cnt++;
        }
    }
    cout << cnt;
}
