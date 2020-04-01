'use strict';

const accounts: any[] = [
  { clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
  { clientName: 'Vladimir', accountNumber: 43546731, balance: 5204100071.23 },
  { clientName: 'Sergei', accountNumber: 23456311, balance: 1353600.0 }
];

// Create function that returns the name and balance of cash on an account in a list
// getNameAndBalance(11234543);
// should return: ['Igor', 203004099.2]

// Create function that transfers an amount of cash from one account to another
// it should have four parameters:
//  - the accounts
//  - from accountNumber
//  - to accountNumber
//  - amount of cash to transfer
//
// Log "404 - account not found" if any of the account numbers don't exist to the console.

// transferAmount(accounts, 43546731, 23456311, 500.0);
//After printing the "accounts" it should look like:
// const accounts = [
//	{ clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
//	{ clientName: 'Vladimir', accountNumber: 43546731, balance: 5204099571.23 },
//	{ clientName: 'Sergei', accountNumber: 23456311, balance: 1354100.0 }
//]

function getNameAndBalance(accNumber: number): any[] {
    const filteredAccounts: any[] = accounts.filter((acc) => {return acc.accountNumber == accNumber});
    if (filteredAccounts.length == 1) {
        return [filteredAccounts[0].clientName, filteredAccounts[0].balance];
    }

    return ['404 - account not found'];
}

function getAccountsIndexesForTransfer(accountNumbers: number[], accFrom: number, accTo: number): number[] {
    return [accountNumbers.indexOf(accFrom), accountNumbers.indexOf(accTo)];
}

function isTransferIndexesValid(transferIndexes: number[]): boolean {
    return transferIndexes[0] != -1 && transferIndexes[1] != -1;
}

function transferAmount(accounts: any[], accFrom: number, accTo: number, amount: number) {
    let accountNumbers: number[] = accounts.map(acc => acc.accountNumber);
    let transferIndexes: number[] = getAccountsIndexesForTransfer(accountNumbers, accFrom, accTo);
    if (!isTransferIndexesValid(transferIndexes)) {
        console.log('404 - account not found');
        return;  
    }

    accounts[transferIndexes[0]].balance -= amount;
    accounts[transferIndexes[1]].balance += amount;

    console.log(accounts);
}

console.log(getNameAndBalance(11234543));

transferAmount(accounts, 43546731, 23456311, 500.0);



// export = {
//   getNameAndBalance,
//   transferAmount,
//   accounts
// };