export class bankAccount {
 constructor (accountNumber, accountHolder, balance){
    this.accountNumber = accountNumber;
    this.accountHolder = accountHolder;
    this.balance = balance;
 }
 deposit(amount){
    this.balance += amount;
    console.log(`$${amount} deposited. Current balance is $${this.balance}`);
 }
withdraw(amount){
    if(amount > this.balance){
        console.log("You have insufficent funds.");
    } else {
        this.balance -= amount;
        console.log(`You have withdrawn $${amount}. Your current balanace is $${this.balance}`);
    }
 }
checkBalance(){
return `Account balance for ${this.accountHolder}: $${this.balance}`;
 }
}
 
