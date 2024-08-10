import Data from "../data-helper/data";
import Params from "../data-helper/params";

describe('User Tests', () => {

  const data = new Data;
  const params = new Params;
  var url= params.url();

  it('Create User', () => {

    cy.request({
      method: 'POST',
      url: url+'/v2/user',
      body: data.bodyPayload()
    })
      .then((response) => {
        expect(response.status).to.eq(200)
      })

  })

  it('Get User Info', () => {

    cy.request('GET', url + '/v2/user/sevdekulhan')
      .then((response) => {
        expect(response.status).to.eq(200)
      })
  })

  it('Update User', () => {

    cy.request({
      method: 'PUT',
      url: url + '/v2/user/sevdekulhan',
      body: data.updateBodyload("Fatih", "Külhan")
    })
      .then((response) => {
        expect(response.status).to.eq(200)
      })
  })

  it('Delete User', () => {


    cy.request({
      method: 'DELETE',
      url: url + '/v2/user/fatihkulhan',
      headers: data.headerPayload()
    })
      .then((response) => {
        expect(response.status).to.eq(200)
      })
  })






})
