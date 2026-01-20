const contactService = require('./services/contactService');

console.log(process.argv);
const command = process.argv[2];

console.log("command", command);
const arg1 = process.argv[3];
const arg2 = process.argv[4];
const arg3 = process.argv[5];
switch (command) {
    case 'add': contactService.addContact(arg1, arg2, arg3);
        break;
    case 'list': contactService.listContacts();
        break;
    case 'delete': contactService.deleteContacts(arg1);
        break;
    case 'search': contactService.searchContacts(arg1);
        break;
    case 'help': contactService.help();
        break;
    default: console.log('Unknown command', command);
}
