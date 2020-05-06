const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../app')
const { expect } = require('chai')


chai.use(chaiHttp)
chai.should()

describe('router.post', () => {
 
  it('check  value 15, 377 + 233. must be 610', () => {
    //sending the request to the server export 
    // of a URL
    chai.request(server)
      .post(`/number`)
      
      .send ({ 
        body: '15', 
        bodyIp: '192',
        bodyDate: '20'
      }).then((res) => {
        res.should.have.status(200);
        (res.text).should.have.equal(String(377+233));
        //expect(res).to.have.status(200);
        //expect(res.text).equal('700');
        // 
      })
      .catch(err => {
        throw err
      })
  })
  it('check  value 22, 6765 + 10946. must be 17711', () => {
    //sending the request to the server export 
    // of a URL
    
    chai.request(server)
      .post(`/number`)
      
      .send ({ 
        body: '22', 
        bodyIp: '192',
        bodyDate: '20'
      }).then((res) => {
        res.should.have.status(200);
        (res.text).should.have.equal(String(6765 + 10946));
        //expect(res).to.have.status(200);
        //expect(res.text).equal('700');
        // 
      })
      .catch(err => {
        throw err
      })
  })
})
