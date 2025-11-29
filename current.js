// Question 1: Closure-Based Counter

function createCounter() {
    let count = 0;

    return {
        increment: function () {
            count++;
            console.log("Current count:", count);
        },
        decrement: function () {
            count--;
            console.log("Current count:", count);
        }
    };
}

// Example usage for Question 1
const counter = createCounter();
counter.increment();
counter.increment();
counter.decrement();
function createBankAccount() {
    let balance = 0;
    let transactionHistory = [];

    return {
        deposit: function (amount) {
            balance += amount;
            transactionHistory.push("Deposited: " + amount);
            console.log("Deposited:", amount);
        },
        withdraw: function (amount) {
            if (amount > balance) {
                console.log("Insufficient balance");
                transactionHistory.push("Failed withdrawal: " + amount);
            } else {
                balance -= amount;
                transactionHistory.push("Withdrawn: " + amount);
                console.log("Withdrawn:", amount);
            }
        },
        checkBalance: function () {
            console.log("Current balance:", balance);
        },
        getHistory: function () {
            console.log("Transaction History:", transactionHistory);
        }
    };
}
const account = createBankAccount();
account.deposit(500);
account.withdraw(200);
account.withdraw(400);
account.checkBalance();
account.getHistory();
