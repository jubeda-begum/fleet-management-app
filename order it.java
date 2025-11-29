import java.util.*;
public class Main {
    private static int findLIS(int[] sequence) {
        if (sequence == null || sequence.length == 0) return 0;
        List<Integer> lisTracker = new ArrayList<>();
        for (int num : sequence) {
            int low = 0, high = lisTracker.size();
            while (low < high) {
                int mid = (low + high) / 2;
                if (lisTracker.get(mid) < num) {
                    low = mid + 1;
                } else {
                    high = mid;
                }
            }

            if (low == lisTracker.size()) {
                lisTracker.add(num);
            } else {
                lisTracker.set(low, num);
            }
        }

        return lisTracker.size();
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        try {
            if (!sc.hasNextInt()) return;
            int n = sc.nextInt();
            sc.nextLine();
            if (!sc.hasNextLine() || !sc.nextLine().trim().equals("shuffled")) return;
            String[] shuffled = new String[n];
            for (int i = 0; i < n; i++) {
                if (sc.hasNextLine()) {
                    shuffled[i] = sc.nextLine().trim();
                } else return;
            }
            if (!sc.hasNextLine() || !sc.nextLine().trim().equals("original")) return;
            Map<String, Integer> orderMap = new HashMap<>();
            for (int i = 0; i < n; i++) {
                if (sc.hasNextLine()) {
                    orderMap.put(sc.nextLine().trim(), i);
                } else return;
            }
            int[] indices = new int[n];
            for (int i = 0; i < n; i++) {
                indices[i] = orderMap.get(shuffled[i]);
            }
            int lisLength = findLIS(indices);
            int minOps = n - lisLength;
            System.out.println(minOps);
        } catch (Exception e) {
        } finally {
            sc.close();
        }
    }
}
