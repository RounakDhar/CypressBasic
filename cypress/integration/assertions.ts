it('learning aeertions',function(){

cy.visit('https://example.cypress.io/')

cy.contains('get').click()

//cy.get('#query-btn',{timeout: 6000}).should('contain','Button123')\
cy.get('#query-btn').should('contain','Button')
.should('have.class','query-btn btn btn-primary')
.should('be.visible')
.should('be.enabled')
//.should('be.disabled')

cy.get('#query-btn').invoke('attr','id')
.should('equal','query-btn')

cy.get('#query-btn')
.should('contain','Button')
.and('have.class','query-btn')

//Explicit Assertions
//expect

expect(true).to.be.true
//expect(true).to.be.false

let name = 'Raghav'
expect(name).to.be.equal('Raghav')

//assert
assert.equal(4,5,'Not Equal')
assert.strictEqual(4,4,'Not Strictly Equal')

})