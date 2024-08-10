class Data {

    headerPayload() {
        const headerBody = {
            "accept": "application/json",
            "Content-Type": "application/json"
        }
        return headerBody;
    }

    bodyPayload() {
        const postData = {
            "id": 13,
            "username": "sevdekulhan",
            "firstName": "Sevde",
            "lastName": "Külhan",
            "email": "sevdeka@gmail.com",
            "password": "000000000",
            "phone": "5555555555",
            "userStatus": 0
        }
        return postData;
    }

    updateBodyload(firstName, lastName) {
        const postData = {
            "id": 13,
            "username": "fatihkulhan",
            "firstName": firstName,
            "lastName": lastName,
            "email": "fatihka@gmail.com",
            "password": "11111111",
            "phone": "5555555555",
            "userStatus": 0
        }
        return postData;
    }

    createPetPayload() {
        const postData = {
            "id": 1995,
            "category": {
                "id": 100,
                "name": "Sokak Kedisi"
            },
            "name": "Mercimek",
            "photoUrls": [
                "string"
            ],
            "tags": [
                {
                    "id": 99,
                    "name": "tekir"
                }
            ],
            "status": "available"
        }
        return postData;
    }

    updatePetPayload() {
        const postData = {
            "id": 1995,
            "category": {
                "id": 100,
                "name": "Sokak Kedisi"
            },
            "name": "Fındık",
            "photoUrls": [
                "string"
            ],
            "tags": [
                {
                    "id": 100,
                    "name": "sarı tekir"
                }
            ],
            "status": "available"
        }
        return postData;
    }

    createOrderPayload() {

        const postData = {
            "id": 22,
            "petId": 1995,
            "quantity": 0,
            "shipDate": "2024-08-10T16:34:32.975Z",
            "status": "placed",
            "complete": true
        }

        return postData;
    }

    findOrderPayload() {

        const postData = {
            "id": 22,
            "petId": 1995,
            "quantity": 0,
            "shipDate": "2024-08-10T16:34:32.975Z",
            "status": "placed",
            "complete": true
        }

        return postData;
    }


}
export default Data;