import java.util.*;
import java.util.function.Function;

class P {
    int x, y;

    P(int x, int y) {
        this.x = x;
        this.y = y;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof P)) return false;
        P p = (P) o;
        return x == p.x && y == p.y;
    }

    @Override
    public int hashCode() {
        return Objects.hash(x, y);
    }
}

class K {
    int x, y, s;

    K(int x, int y, int s) {
        this.x = x;
        this.y = y;
        this.s = s;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof K)) return false;
        K k = (K) o;
        return x == k.x && y == k.y && s == k.s;
    }

    @Override
    public int hashCode() {
        long h = x;
        h = (h << 21) ^ y;
        h = (h << 21) ^ s;
        return (int) (h ^ (h >>> 32));
    }
}

public class Main {
    static int e;
    static Map<P, List<Integer>> g = new HashMap<>();
    static Map<K, int[]> nx = new HashMap<>();

    static int[] fall(int x, int y) {
        for (int yy = y - 1; yy >= 0; yy--) {
            P point = new P(x, yy);
            if (!g.containsKey(point)) continue;

            List<Integer> ids = g.get(point);
            if (ids.isEmpty()) continue;

            if (ids.size() == 1) {
                int s = ids.get(0);
                K key = new K(x, yy, s);
                if (!nx.containsKey(key)) {
                    return fall(x, yy);
                }
                if (e == 0) break;
                e--;
                int[] next = nx.get(key);
                x = next[0];
                y = next[1];
                return fall(x, y);
            } else {
                long c = 1L * x * yy;
                List<int[]> dn = new ArrayList<>();
                for (int s : ids) {
                    K k = new K(x, yy, s);
                    if (nx.containsKey(k)) dn.add(nx.get(k));
                }

                if ((long) e <= c) {
                    if (dn.isEmpty()) {
                        return fall(x, yy);
                    }
                    return dn.get(0);
                }

                e -= (int) c;

                if (dn.isEmpty()) {
                    return fall(x, yy);
                }

                if (e == 0) break;
                e--;

                int[] next = dn.get(0);
                x = next[0];
                y = next[1];
                return fall(x, y);
            }
        }

        return new int[]{x, 0};
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // Input: n e
        int n = sc.nextInt();
        e = sc.nextInt();

        int[][] sl = new int[n][4];
        for (int i = 0; i < n; i++) {
            sl[i][0] = sc.nextInt();
            sl[i][1] = sc.nextInt();
            sl[i][2] = sc.nextInt();
            sl[i][3] = sc.nextInt();
        }

        // Build g and nx maps
        for (int s = 0; s < n; s++) {
            int x1 = sl[s][0], y1 = sl[s][1], x2 = sl[s][2], y2 = sl[s][3];
            int dx = (x2 > x1) ? 1 : -1;
            int dy = (y2 > y1) ? 1 : -1;
            int L = Math.abs(x2 - x1);

            if (dy == -1) {
                for (int k = 0; k <= L; k++) {
                    int x = x1 + dx * k;
                    int y = y1 - k;
                    g.computeIfAbsent(new P(x, y), z -> new ArrayList<>()).add(s);
                    nx.put(new K(x, y, s), new int[]{x + dx, y - 1});
                }
                g.computeIfAbsent(new P(x2, y2), z -> new ArrayList<>()).add(s);
            } else {
                for (int k = 0; k <= L; k++) {
                    int x = x2 - dx * k;
                    int y = y2 - k;
                    g.computeIfAbsent(new P(x, y), z -> new ArrayList<>()).add(s);
                    nx.put(new K(x, y, s), new int[]{x - dx, y - 1});
                }
                g.computeIfAbsent(new P(x1, y1), z -> new ArrayList<>()).add(s);
            }
        }

        // Optional start point (default: 0, large y)
        int startX = 0, startY = 1000000;
        if (sc.hasNextInt()) {
            startX = sc.nextInt();
            startY = sc.nextInt();
        }

        int[] result = fall(startX, startY);
        System.out.println(result[0] + " " + result[1]);
        sc.close();
    }
}