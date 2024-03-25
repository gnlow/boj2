#include <iostream>
#include <algorithm>
#include <vector>

using namespace std;

int max(int a, int b) {
    return a > b ? a : b;
}

int wood(int as[], int length, int h) {
    int result = 0;
    for (int i=0; i<length; i++) {
        result += max(as[i] - h, 0);
    }
    return result;
}

int wood_upper_bound(int as[], int length, int targetY, int minX, int maxX) {
    int range = maxX - minX;
    int center = (maxX + minX) / 2;

    int y = wood(as, length, center);

    cout << minX << ".." << maxX << "\n";
    cout << y << "vs" << targetY << "\n\n";

    if (range <= 1) {
        if (y < targetY) return y;
        else return -1;
    }
    if (targetY == y) {
        return y;
    }
    if (targetY > y) {
        return wood_upper_bound(as, length, targetY, minX, center);
    } else {
        return wood_upper_bound(as, length, targetY, center, maxX);
    }
}

int main(void) {
    ios_base::sync_with_stdio(0);
    cin.tie(NULL);

    int n, m;
    cin >> n >> m;
    
    int trees[n];

    for (int i=0; i<n; i++) {
        int a;
        cin >> a;
        trees[i] = a;
    }

    sort(trees, trees+n);

    //cout << wood(trees, n, 15);
    cout << wood_upper_bound(trees, n, m, trees[0], trees[n-1]);

    return 0;
}