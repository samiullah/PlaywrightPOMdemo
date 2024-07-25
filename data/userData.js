import { randEmail, randFirstName, randLastName, randPassword } from '@ngneat/falso';

class UserData {
    getUserData() {
        return {
            firstName: randFirstName(),
            lastName: randLastName(),
            email: randEmail(),
            password: randPassword({ size: 10 })
        };
    }

    buildData() {

        return {
            "firstName": (this.getUserData()).firstName,
            "lastName": (this.getUserData()).lastName,
            "email": (this.getUserData()).email,
            "password": (this.getUserData()).password
        }
    }
}

export default UserData;
