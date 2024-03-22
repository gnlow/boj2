#include <iostream>
#include <algorithm>
#include <vector>

using namespace std;

int main(void) {
    ios_base::sync_with_stdio(0);
    cin.tie(NULL);

    int n;
    cin >> n;
    
    int nums[n];

    for (int i=0; i<n; i++) {
        int a;
        cin >> a;
        nums[i] = a;
    }

    sort(nums, nums + n);

    int m;
    cin >> m;

    for (int i=0; i<m; i++) {
        int a;
        cin >> a;

        int cnt =
            upper_bound(nums, nums + n, a)
            - lower_bound(nums, nums + n, a);
        cout << cnt << " ";
    }

    return 0;
}