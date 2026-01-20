const fileUtils = require('../utils/fileUtils');
const validation = require('../utils/validation');


const { isInputValid, isNameExist } = validation.searchValidation();

function addContact(name, email, phone) {
    console.log(name, email, phone);
    let contacts = fileUtils.loadContacts();
    contacts.push({
        name: name,
        email: email,
        phone: phone
    });

    fileUtils.saveContacts(contacts);
};

function listContacts() {
    const list = fileUtils.loadContacts();
    list.forEach((person, index) => console.log(`===All Contacts===\n${index + 1}. ${person.name} - ${person.email} - ${person.phone}`));
}

function deleteContacts(byEmail) {
    const list = fileUtils.loadContacts();
    try {
        const deletePerson = list.filter(mail => mail.email === byEmail);
        const rest = list.filter(mail => mail.email !== byEmail)
        fileUtils.saveContacts(rest);
        return "Contact deleted: " + deletePerson[0].name;
    } catch (e) {
        console.error("Email not found");
        return [];
    }

}

function searchContacts(byName) {
    isInputValid(byName);
    const list = fileUtils.loadContacts();
    const searchPerson = list.filter(name => name.name === byName);
    if (isNameExist(searchPerson)) {
        console.error("No contacts found matching:", byName);
        return [];
    }
    console.log(` === Search Results for "${byName}" ===`);
    searchPerson.forEach((person, index) => console.log(`${index + 1}. ${person.name} - ${person.email} - ${person.phone}`));
    return searchPerson;
}


function help() {
    console.log('Commands:\n');
    console.log('  add "name" "email" "phone"  - Add a new contact\n');
    console.log('  list                        - List all contacts\n');
    console.log('  search "query"              - Search contacts by name or email\n');
    console.log('  delete "email"              - Delete contact by email\n');
    console.log('  help                        - Show this help message\n');
}


module.exports = {
    addContact,
    listContacts,
    deleteContacts,
    searchContacts,
    help
};