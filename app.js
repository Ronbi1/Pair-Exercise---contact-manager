const commandHandler = require('./commands/commandHandler');

console.log(process.argv);
const command = process.argv[2];

console.log("command", command);
const arg1 = process.argv[3];
const arg2 = process.argv[4];
const arg3 = process.argv[5];
commandHandler.handleCommand(command, arg1, arg2, arg3);



