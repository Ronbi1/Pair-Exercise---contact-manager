const fileUtils = require('../utils/fileUtils');


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

module.exports = {
    addContact,
    listContacts,
    deleteContacts
};