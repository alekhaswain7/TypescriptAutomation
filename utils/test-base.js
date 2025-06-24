const base = require('@playwright/test');


exports.customtest= base.test.extend(
    {
        testDataForOrder: {

            "username": "alekhaswain7@gmail.com",
            "password": "Alekha@123",
            "productName": "ADIDAS ORIGINAL"



        }
    }
)
