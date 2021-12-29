let chai = require('chai');
let chaiHttp = require('chai-http');
var should = chai.should();
chai.use(chaiHttp);
let server = require('../app');
//Our parent block
describe('Indexroute', () => {
 describe('/GET index', () => {
     it('it should GET the index results', (done) => {
     chai.request(server)
       .get('/')
       .end((err, res) => {
             (res).should.have.status(200);
             (res.text).should.be.a('string');
             (res.text).should.equal('Welcome to CI/CD with AWS..');
             done();
          });
       });
  });
});