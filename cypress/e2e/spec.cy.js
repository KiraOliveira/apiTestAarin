
describe('GET /users', () => {
  it('List all users', () => {
    cy.api({
      url: '/users',
      method: 'GET',
      failOnStatusCode: false
    }).then(response => {
      expect(response.status).to.eq(200)
    })
  })
})

describe('POST /users', () => {
  it('Create a new user', () => {
    const user = {
      name: "morpheus",
      job: "leader"
    }

    cy.api({
      url: '/users',
      method: 'POST',
      body: user,
      failOnStatusCode: false
    }).then(response => {
      expect(response.status).to.eq(201)
      cy.log(JSON.stringify(response.body))
      // Assert para verificar o status da resposta
      expect(response.status).to.eq(201);

      // Assert para verificar a estrutura do corpo da resposta
      expect(response.body).to.have.property('name)', 'morpheus');
      expect(response.body).to.have.property('job', 'leader');
      expect(response.body).to.have.property('id').and.to.be.a('string');
      expect(response.body).to.have.property('createdAt').and.to.be.a('string');

      // Opcional: Verificar que o ID retornado não está vazio
      expect(response.body.id).to.not.be.empty;
      expect(response.body.createdAt).to.not.be.empty;
    })
  })
})