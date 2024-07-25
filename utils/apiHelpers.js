const { request } = require('playwright');

class ApiHelper {
    async postRequest(url, data, headers = {}) {
        const apiRequestContext = await request.newContext();

        const response = await apiRequestContext.post(url, {
            data,
            headers,
        });

        const responseBody = await response.json();
        await apiRequestContext.dispose();

        return {
            status: response.status(),
            headers: response.headers(),
            body: responseBody,
        };
    }

    async createUser(url, data, headers = {}) {
        const response = await this.postRequest(url, data, headers);
        console.log('Status:', response.status);
        console.log('Headers:', response.headers);
        console.log('Body:', response.body);
    }
}

module.exports = ApiHelper;
