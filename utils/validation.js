function searchValidation() {
    function isInputValid(input) {
        if (!input) {
            throw new Error("Please enter a valid name");
        }
        return true;
    }
    function isNameExist(arr) {
        return arr.length === 0;
    }
    return {
        isInputValid,
        isNameExist
    };
}
module.exports = {
    searchValidation
}
