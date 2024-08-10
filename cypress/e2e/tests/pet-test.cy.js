import Data from "../data-helper/data"
import Params from "../data-helper/params";

describe('Pet Tests', () => {

  const data = new Data;
  const params = new Params;
  var url= params.url();

  it('Create Pet', () => {
    
    cy.request({
      method: 'POST',
      url: url +'/v2/pet',
      body: data.createPetPayload()
    })
      .then((response) => {
        expect(response.status).to.eq(200)
      })
  })

  it('Get Pet Info', () => {

    cy.request('GET', url+'/v2/pet/1995')
      .then((response) => {
        expect(response.status).to.eq(200)
      })

  })

  it('Update Pet Info', () => {
    
    cy.request({
      method: 'POST',
      url: url +'/v2/pet',
      body: data.updateBodyload()
    })
      .then((response) => {
        expect(response.status).to.eq(200)
      })
  })

  it('Find Pending Status Pets', () => {
    
    cy.request({
      method: 'GET',
      url: url +'/v2/pet/findByStatus?status=pending'
    })
      .then((response) => {
        expect(response.status).to.eq(200)
      })
  })

  it('Delete Pet', () => {
    cy.request({
      method: 'DELETE',
      url: url + '/v2/pet/1995',
      headers: data.headerPayload()
    })
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
