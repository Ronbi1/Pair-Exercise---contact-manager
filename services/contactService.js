const fileUtils = require('../utils/fileUtils');
const validation = require('../utils/validation');


const { isInputValid, isNameExist } = validation.searchValidation();

function addContact(name, email, phone) {

    if (!email.includes('@')) {
        console.log("✗ Error: Email must contain @ symbol");
        return;
    }
    console.log("Loading contacts from contacts.json...");
    let contacts = [];
    try {
        // try to load contact
        contacts = fileUtils.loadContacts();
        console.log(`✓ Loaded ${contacts.length} contacts`);
    } catch (e) {
        // if file not exist
        console.log("✗ File not found - creating new contact list");
        contacts = [];
    }

    contacts.push({
        name: name,
        email: email,
        phone: phone
    });
    console.log(`✓ Contact added: ${name}`);

    fileUtils.saveContacts(contacts);
    console.log("✓ Contacts saved to contacts.json");
}

function listContacts() {
    console.log("Loading contacts from contacts.json...");

    try {
        const list = fileUtils.loadContacts();
        console.log(`✓ Loaded ${list.length} contacts`);

        console.log("=== All Contacts ===");
        list.forEach((person, index) => {
            console.log(`${index + 1}. ${person.name} - ${person.email} - ${person.phone}`);
        });
    } catch (e) {
        console.log("✗ Error loading contacts or file is empty");
    }
}

function deleteContacts(byEmail) {
    const list = fileUtils.loadContacts();
    try {
        const deletePerson = list.filter(mail => mail.email === byEmail);
        if (deletePerson.length === 0) {
            console.error(`✗ Error: No contact found with email: ${byEmail}`);
            return;
        }
        const rest = list.filter(mail => mail.email !== byEmail)
        fileUtils.saveContacts(rest);
        console.log(`Contact deleted: ${deletePerson[0].name}`);
    } catch (e) {
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