import Data from "../data-helper/data";
describe('User Tests', () => {

    const data = new Data;

    it('Create User', () => {
      const postData={
        "id": 13,
        "username": "sevdekulhan",
        "firstName": "Sevde",
        "lastName": "Külhan",
        "email": "sevdeka@gmail.com",
        "password": "000000000",
        "phone": "5555555555",
        "userStatus": 0
    }
      cy.request({
        method: 'POST',
        url: 'https://petstore.swagger.io/v2/user',
        body: postData
      })
      .then((response) => {
        expect(response.status).to.eq(200)
      })

    })

    it('Get User Info', () => {
  
        cy.request('GET','https://petstore.swagger.io/v2/user/sevdekulhan')
        .then((response) => {
          expect(response.status).to.eq(200)
        })
      })

    it('Update User', () => {
        const postData={
            "id": 13,
            "username": "fatihkul",
            "firstName": "Fatih",
            "lastName": "Külhan",
            "email": "fatihkul@gmail.com",
            "password": "11111111",
            "phone": "6666666666",
            "userStatus": 1
          }
        cy.request({
          method: 'PUT',
          url: 'https://petstore.swagger.io/v2/user/sevdekulhan',
          body: postData
        })
        .then((response) => {
          expect(response.status).to.eq(200)
        })
      })
  
      it('Delete User', () => {
  
      
        cy.request({
            method: 'DELETE',
            url: 'https://petstore.swagger.io/v2/user/fatihkul',
            headers: data.headerPayload()
          })
          .then((response) => {
            expect(response.status).to.eq(200)
          })
      })

  
  
  
  
    
  })
  