const fs = require('fs');

function loadContacts() {
    try {
        const dataBuffer = fs.readFileSync('contacts.json', 'utf-8');
        const dataJSON = JSON.parse(dataBuffer);
        return dataJSON;
    } catch (e) {
        return [];
    }
};

function saveContacts(contacts) {
    try {
        const bufferConverter = JSON.stringify(contacts);
        fs.writeFileSync('contacts.json', bufferConverter);
    } catch (error) {
        console.error("Failed to write file:", error.message);
        throw error;
    }
};


module.exports = {
    loadContacts,
    saveContacts
};