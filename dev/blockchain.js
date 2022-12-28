function Blockchain() {
    this.chain = [];
    this.newTransactions = [];
}

Blockchain.prototype.createNewBlock = function (nonce, previousBlockHash, hash) {
    const newBlock = {
        index: this.chain.length + 1,
        timestamp: Date.now(),
        transactions: this.newTransactions, // Past all transactions
        nonce: nonce, // Proof of work
        hash: hash,
        previousBlockHash: previousBlockHash
    };

    this.newTransactions = [];
    this.chain.push(newBlock);

    return newBlock;
}

Blockchain.prototype.getLastBlock = function () {
    return this.chain[this.chain.length - 1];
}

Blockchain.prototype.createNewTransaction = function (amount, sender, recipient) {
    const newTransaction = {
      amount,
      sender,
      recipient
    };

    this.newTransactions.push(newTransaction);
}

module.exports = Blockchain;
