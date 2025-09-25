import { bankAccount } from "./bankAccount.js";

const client1 = new bankAccount(56433, "Daniel", 400);
client1.deposit(250);
console.log(client1.checkBalance());

const client2 = new bankAccount(47876, "Cindy", 2500);
client2.withdraw(300);
console.log(client2.checkBalance());

const client3 = new bankAccount(34580, "Janet", 25);
client3.withdraw(50);
console.log(client3.checkBalance());
