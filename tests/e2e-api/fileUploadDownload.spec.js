// @ts-check
const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');
const endpoints = require('../../routes/apiEndpoints.json');

test.describe('File Download Upload API Tests', () => {
    test('File download and reading file content and write it in file. ', async ({ request }) => {
        const downloadUrl = endpoints.fileDownload;
        const response = await request.get(downloadUrl);

        expect(response.ok()).toBeTruthy();

        const fileBuffer = await response.body();
        const filePath = path.join(__dirname, 'assets/downloaded-file.doc');

        fs.writeFileSync(filePath, fileBuffer);
        const fileExists = fs.existsSync(filePath);
        const fileStats = fs.statSync(filePath);

        expect(fileExists).toBeTruthy();
        expect(fileStats.size).toBeGreaterThan(0);
    });

    test('should upload the downloaded file', async ({ request }) => {
        const filePath = path.join(__dirname, 'assets/downloaded-file.doc');
        const fileExists = fs.existsSync(filePath);
        expect(fileExists).toBeTruthy();


        const fileBuffer = fs.readFileSync(filePath);
        const fileName = path.basename(filePath);


        const response = await request.post(endpoints.uploadUrl, {
            multipart: {
                file: {
                    name: fileName,
                    mimeType: 'application/msword',
                    buffer: fileBuffer,
                },
            },
        });


        if (response.ok()) {
            const responseBody = await response.text();
            console.log('Upload successful:', responseBody);
        } else {
            console.error('Upload failed with status:', response.status());
        }




    });
});
