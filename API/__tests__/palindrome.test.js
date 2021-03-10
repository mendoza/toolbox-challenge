const request = require('supertest')('http://localhost:3001')
const { expect } = require('chai')

describe('GET /iecho?text=test', () => {
  it('Should return status 200 and the text should be turn around and the palindrome flag being false', () => {
    request
      .get('/iecho?text=test')
      .expect(200)
      .then((response) => {
        expect(response.body.text).to.eql('tset')
        expect(response.body.palindrome).to.eql(false)
        done()
      })
  })
})

describe('GET /iecho?text=ana', () => {
  it('Should return status 200 and the text should be turn around and the palindrome flag being true', () => {
    request
      .get('/iecho?text=test')
      .expect(200)
      .then((response) => {
        expect(response.body.text).to.eql('ana')
        expect(response.body.palindrome).to.eql(true)
        done()
      })
  })
})

describe('GET /iecho', () => {
  it("Should return status 400 because it doesn't have text", () => {
    request
      .get('/iecho')
      .expect(400)
      .then((response) => {
        expect(response.body.error).to.eql('no text')
        done()
      })
  })
})
