class BankAccount {
  constructor(accountNumber, accountHolderName, balance) {
    this.accountNumber = accountNumber;
    this.accountHolderName = accountHolderName;
    this.balance = balance;
  }

  deposit(amt) {
    this.balance = this.balance + amt;
    console.log("Yaqin rakhen apk pasie apky account me chaly gaye hen");
  }

  withdraw(amt) {
    if (this.balance < amt) console.log("In sufficient Balance");
    else this.balance = this.balance - amt;
  }

  transfer(beneficiaryAcc, amt) {
    for (let a = 0; a < accounts.length; a++) {
      if (accounts[a].accountNumber === beneficiaryAcc) {
        accounts[a].balance = accounts[a].balance + amt;
        this.balance = this.balance - amt;

        console.log("Amt transfers successfully");
      }
    }
  }

  balance() {
    console.log(`Your account balance is ${this.balance} `);
  }
}

let acc1 = new BankAccount(1001, "nasir", 10000);
let acc2 = new BankAccount(1002, "shehzad", 10000);
let acc3 = new BankAccount(1003, "Inzamam", 10000);

let accounts = [];
accounts.push(acc1, acc2, acc3);
