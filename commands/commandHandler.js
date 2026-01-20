const contactService = require('../services/contactService');


function handleCommand(command, arg1, arg2, arg3) {
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

}

module.exports = { handleCommand };