it('google test',function(){


    cy.visit('https://google.com')
    //cy.get('[name="q"]').type('Automation Step by Step{enter}')
    cy.get('[name="q"]').type('Automation Step by Step').type('{enter}')
})