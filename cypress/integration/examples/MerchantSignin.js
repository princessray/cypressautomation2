describe('Sign In', function()
{
it('Test description', function() {
cy.visit('https://app-dev.warenext.ng/login')
cy.get('[name="username"]').type('merchant@test.com')
cy.get('[style="position: relative; width: 100%;"] > .input').type('test1234')
cy.get('.sc-emmjRN').click()
cy.wait(5000)

//Assertions 
if(
    cy.get(':nth-child(1) > .sc-hMqMXs > .sc-kEYyzF > a > .sc-iAyFgw').should('exist'),
    cy.get(':nth-child(2) > .sc-hMqMXs > .sc-kEYyzF > a > .sc-iAyFgw').should('exist'),
    cy.get(':nth-child(3) > .sc-hMqMXs > .sc-kEYyzF > a > .sc-iAyFgw').should('exist'),
    cy.get(':nth-child(4) > .sc-hMqMXs > .sc-kEYyzF > a > .sc-iAyFgw').should('exist')
)
{
    cy.log('Test passed')
}
else {
    cy.log('Test failed')
}
})

})