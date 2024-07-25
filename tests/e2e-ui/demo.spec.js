// @ts-check
const { test, expect } = require('@playwright/test');
const ApiHelper = require('../../utils/apiHelpers');
let apihelper = new ApiHelper()
const endpoints = require('../../routes/apiEndpoints.json');
import UserData from '../../data/userData'
import ContactData from '../../data/contactData';
import { LoginPage } from '../../pages/loginPage';
// @ts-ignore
import { ContactPage } from '../../pages/contactPage'
const fs = require('fs');

test.describe('Add contact Tests', () => {

  test.beforeEach(async ({ page }) => {
    console.log(`Running ${test.info().title}`);
  });

  test('Verify Registered user is able to login to app successfully', async ({ page }) => {
    let userDataInstance;
    let userData;
    userDataInstance = new UserData()
    console.log(userDataInstance.buildData())
    userData = userDataInstance.buildData()
    const loginPage = new LoginPage(page);
    await apihelper.createUser(endpoints.createUser, userData, 'Authorization: Bearer {{token}}')
    await loginPage.navigate()
    await loginPage.login(userData.email, userData.password)
    await expect(page.locator('h1')).toHaveText('Contact List')
    fs.writeFileSync('user-data.json', JSON.stringify(userData));
  });

  test('Verify Already Registered user is able to add contact in contact list', async ({ page }) => {
    let contactDataInstance;
    let contactData;
    contactDataInstance = new ContactData()
    contactData = contactDataInstance.getContactData()
    const contactPage = new ContactPage(page);
    const userData = JSON.parse(fs.readFileSync('user-data.json', 'utf8'));
    const loginPage = new LoginPage(page);
    await loginPage.navigate()
    await loginPage.login(userData.email, userData.password)
    await expect(page.locator('h1')).toHaveText('Contact List')
    await contactPage.addNewContact(contactData)
    fs.writeFileSync('contact-data.json', JSON.stringify(contactData));

  });

  test('Verify Already Registered user is able to view contact created', async ({ page }) => {

    const contactPage = new ContactPage(page);
    const userData = JSON.parse(fs.readFileSync('user-data.json', 'utf8'));
    const contactData = JSON.parse(fs.readFileSync('contact-data.json', 'utf8'));
    console.log(contactData)
    const loginPage = new LoginPage(page);
    await loginPage.navigate()
    await loginPage.login(userData.email, userData.password)
    await expect(page.locator('h1')).toHaveText('Contact List')
    let enteredName = await contactPage.getContactName()
    console.log("EnteredName in contact is" + enteredName)
    expect(enteredName).toEqual(`${contactData.firstName} ${contactData.lastName}`)

  });

  test('Verify Not Registered user is not able to login to app successfully', async ({ page }) => {

    const loginPage = new LoginPage(page);
    await loginPage.navigate()
    await loginPage.login("abc@hello.com", "123456")
    await expect(page.locator('#error')).toHaveText('Incorrect username or password')
  });



});