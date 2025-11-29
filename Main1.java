import java.util.*;
public class Main1 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (!sc.hasNextInt()) return;
        int rows = sc.nextInt();
        if (!sc.hasNextInt()) return;
        int cols = sc.nextInt();
        sc.nextLine();
        char[][] board = new char[rows][cols];
        for (int i = 0; i < rows; i++) {
            if (sc.hasNextLine()) {
                String row = sc.nextLine().replaceAll("\\s+", "");
                if (row.length() == cols) {
                    board[i] = row.toCharArray();
                } else {
                    i--;
                }
            }
        }
        sc.close();

        int rowCount = 0;
        int colCount = 0;
        for (int i = 0; i < rows; i++) {
            boolean hasCable = false;
            for (int j = 0; j < cols; j++) {
                if (board[i][j] == 'C') {
                    hasCable = true;
                    break;
                }
            }
            if (hasCable) rowCount++;
        }

        for (int j = 0; j < cols; j++) {
            boolean hasCable = false;
            for (int i = 0; i < rows; i++) {
                if (board[i][j] == 'R') {
                    hasCable = true;
                    break;
                }
            }
            if (hasCable) colCount++;
        }
        int switches = rowCount * colCount;
        System.out.println(switches);
    }
}
