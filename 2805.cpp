#include <iostream>
#include <algorithm>
#include <vector>

using namespace std;

int max(int a, int b) {
    return a > b ? a : b;
}

template<typename F>
int upper_bound(F f, int targetY, int minX, int maxX) {
    int range = maxX - minX;
    int center = (maxX + minX) / 2;

    int y = f(center);
    cout
        << center
        << " "
        << y;

    if (range == 0) {
        if (y < targetY) return y;
        else return -1;
    }
    if (targetY < y) {
        return upper_bound(f, targetY, minX, center);
    } else {
        return upper_bound(f, targetY, center, maxX);
    }
}

int wood(vector<int> as, int length, int h) {
    int result = 0;
    for (int i=0; i<length; i++) {
        result += max(as[i] - h, 0);
    }
    return result;
}

int main(void) {
    ios_base::sync_with_stdio(0);
    cin.tie(NULL);

    int n, m;
    cin >> n >> m;
    
    vector<int> trees;

    for (int i=0; i<n; i++) {
        int a;
        cin >> a;
        trees[i] = a;
    }

    sort(trees.begin(), trees.end());
    
    // cout << trees[n-1];

    cout << upper_bound([trees, n](int h) {
        return wood(trees, n, h);
    }, m, trees[0], trees[n-1]);

    //cout << wood(trees, n, 15);

    return 0;
}