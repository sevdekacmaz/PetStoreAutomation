import Data from "../data-helper/data";
import Params from "../data-helper/params";

describe('Store Tests', () => {

    const data = new Data;
    const params = new Params;
    var url = params.url();

    it('Create Order', () => {

        cy.request({
            method: 'POST',
            url: url + '/v2/store/order',
            header: data.headerPayload(),
            body: data.createOrderPayload()
        })
            .then((response) => {
                expect(response.status).to.eq(200)
            })

    })

    it('Find Order', () => {

        cy.request({
            method: 'GET',
            url: url + '/v2/store/order/22',
            header: data.headerPayload(),
            body: data.findOrderPayload()
        })
            .then((response) => {
                expect(response.status).to.eq(200)
            })

    })

    it('Delete Order', () => {

        cy.request({
            method: 'DELETE',
            url: url + '/v2/store/order/22',
            headers: data.headerPayload()
    
        })
            .then((response) => {
                expect(response.status).to.eq(200)
            })

    })

    it('Inventory List', () => {

        cy.request({
          method: 'GET',
          url: url +'/v2/store/inventory',
          headers : data.headerPayload()
        })
          .then((response) => {
            expect(response.status).to.eq(200);
          })
      })

})
