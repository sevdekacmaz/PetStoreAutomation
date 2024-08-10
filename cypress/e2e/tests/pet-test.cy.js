describe('Pet Tests', () => {


  it('Create Pet', () => {
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
    cy.request({
      method: 'POST',
      url: 'https://petstore.swagger.io/v2/pet',
      body: postData
    })
      .then((response) => {
        expect(response.status).to.eq(200)
      })
  })

  it('Get Pet Info', () => {

    cy.request('GET', 'https://petstore.swagger.io/v2/pet/1995')
      .then((response) => {
        expect(response.status).to.eq(200)
      })

  })

  // it('Upload Image', () => {

  //   const postData = {
  //     "file": "kedi.jpeg;type=image/jpeg"

  //   }

  //   const headerBody = {
  //     "accept": "application/json",
  //   }

  //   cy.request({
  //     method: 'POST',
  //     url: 'https://petstore.swagger.io/v2/pet/1995/uploadImage',
  //     headers: headerBody,
  //     body: postData
  //   })
  //     .then((response) => {
  //       expect(response.status).to.eq(200)
  //     })


  // })

})
