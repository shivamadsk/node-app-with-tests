const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

const {expect} = chai;

chai.use(chaiHttp);

describe('Practice', () => {
    it('should return "Hello World!!!" on /GET', (done) => {
        chai.request(app)
        .get('/')
        .end((err, res) => {
            expect(res).to.have.status(200);
            espect(res.text).to.equal('Hello World!!!');
            done();
        });
    }) 

})
