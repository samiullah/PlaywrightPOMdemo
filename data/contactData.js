import { randEmail, randFirstName, randLastName, randPhoneNumber, randStreetAddress } from '@ngneat/falso';

class ContactData {

    getRandomPastDate(format = 'YYYY-MM-DD') {

        const endDate = new Date();
        const startDate = new Date(endDate.setFullYear(endDate.getFullYear() - 10));

        const randomTimestamp = Math.random() * (endDate.getTime() - startDate.getTime()) + startDate.getTime();
        const randomDate = new Date(randomTimestamp);

        const year = randomDate.getFullYear();
        const month = String(randomDate.getMonth() + 1).padStart(2, '0');
        const day = String(randomDate.getDate()).padStart(2, '0');

        return `${year}-${month}-${day}`;
    }

    getContactData() {
        return {
            firstName: randFirstName(),
            lastName: randLastName(),
            dob: this.getRandomPastDate(),
            email: randEmail(),
            phone: '999999999',
            address1: randStreetAddress(),
            address2: randStreetAddress(),
            city: 'srinagar',
            state: 'jammu',
            postalCode: '190023',
            country: 'india'
        };
    }
}

export default ContactData;
