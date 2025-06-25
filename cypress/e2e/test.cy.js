const API_URL = Cypress.env('apiBaseUrl')
const authorization = `Bearer ${Cypress.env('x-api-key')}`

it('retrieves my user information', () => {
  cy.request({
    method: 'GET',
    url: `${API_URL}/users`,
    headers: { authorization }
  }).should(({ status, body }) => {
    const { alias, email, language } = body   

    expect(status).to.eq(200)
    expect(alias).to.eq('Walmyr Filho')
    expect(email).to.eq('walmyr@example.com')
    expect(language).to.eq('en')
  })
})