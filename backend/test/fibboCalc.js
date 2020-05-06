const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../app')


chai.use(chaiHttp)
chai.should()

describe('router.post', () => {
 
  it('sets2', () => {
    //sending the request to the server export 
    // of a URL
    chai.request(server)
      .post(`/number`, {
        body: 5, 
      }).then((res) => {
        
        res.should.have.status(200);
        // 
      })
      .catch(err => {
        throw err
      })
  })
})
