const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../routes/number')

chai.should()
chai.use(chaiHttp)


describe('User permission', () => {
  it('sets the user permissions', () => {
    //Notice we are sending the request to the server export 
    // of a URL
    return chai.request(server)
      .post('/')
      .then(res => {
        res.should.have.status(200);
        console.log(res);
        // add more tests here as you see fit
      })
      .catch(err => {
        throw err
      })
  })
})
