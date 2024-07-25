// ContactPage.js
const { expect } = require('@playwright/test');

class ContactPage {
    constructor(page) {
        this.page = page;
    }

    get addButton() {
        return this.page.getByRole('button', { name: 'Add a New Contact' });
    }

    get firstNameField() {
        return this.page.getByPlaceholder('First Name');
    }

    get lastNameField() {
        return this.page.getByPlaceholder('Last Name');
    }

    get dobField() {
        return this.page.getByPlaceholder('yyyy-MM-dd');
    }

    get emailField() {
        return this.page.getByPlaceholder('example@email.com');
    }

    get phoneField() {
        return this.page.getByPlaceholder('8005551234');
    }

    get address1Field() {
        return this.page.getByPlaceholder('Address 1');
    }

    get address2Field() {
        return this.page.getByPlaceholder('Address 2');
    }

    get cityField() {
        return this.page.getByPlaceholder('City');
    }

    get stateField() {
        return this.page.getByPlaceholder('State or Province');
    }

    get postalCodeField() {
        return this.page.getByPlaceholder('Postal Code');
    }

    get countryField() {
        return this.page.getByPlaceholder('Country');
    }

    get submitButton() {
        return this.page.getByRole('button', { name: 'Submit' });
    }

    get contactName(){
        return this.page.locator('//tr/td[2]')
    }

    async addNewContact(contact) {
        await this.addButton.click();
        await this.firstNameField.fill(contact.firstName);
        await this.lastNameField.fill(contact.lastName);
        await this.dobField.fill(contact.dob);
        await this.emailField.fill(contact.email);
        await this.phoneField.fill(contact.phone);
        await this.address1Field.fill(contact.address1);
        await this.address2Field.fill(contact.address2);
        await this.cityField.fill(contact.city);
        await this.stateField.fill(contact.state);
        await this.postalCodeField.fill(contact.postalCode);
        await this.countryField.fill(contact.country);
        await this.submitButton.click();
    }

    async getContactName(){
        return await this.contactName.textContent()

    }
}

module.exports = { ContactPage };
