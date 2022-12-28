const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

bitcoin.createNewBlock(234, "asdd3edqq2", "45gddg3sf");
bitcoin.createNewBlock(111, "22dg233", "345dgdfg");
bitcoin.createNewBlock(234, "678fghf", "98975vvvc");


console.log(bitcoin);
