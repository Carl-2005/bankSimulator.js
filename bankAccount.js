class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }

    checkBalance(amount) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (amount <= 0) {
                    reject("Invalid amount");
                } else if (this.balance >= amount) {
                    resolve(true);
                } else {
                    reject("Insufficient funds");
                }
            }, 1000); 
        });
    }

    deductAmount(amount) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                try {
                    this.balance -= amount;
                    resolve(true);
                } catch (error) {
                    reject("Error processing deduction");
                }
            }, 1000);
        });
    }

    confirmTransaction() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const success = Math.random() > 0.1; 
                if (success) {
                    resolve("Transaction complete");
                } else {
                    reject("Transaction failed");
                }
            }, 1000);
        });
    }

    async transfer(amount) {
        try {
            await this.checkBalance(amount);
            await this.deductAmount(amount);
            const result = await this.confirmTransaction();
            return result;
        } catch (error) {
            throw error;
        }
    }
}


const account = new BankAccount(1000);


account.transfer(500)
    .then(result => console.log(result))
    .catch(error => console.error(error));


account.transfer(2000)
    .then(result => console.log(result))

    .catch(error => console.error(error));
