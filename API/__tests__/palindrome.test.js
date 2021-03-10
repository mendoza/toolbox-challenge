const request = require('supertest')('http://localhost:3001')
const { expect } = require('chai')

describe('GET /iecho?text=test', () => {
  it('Should return status 200 and the text should be turn around and the palindrome flag being false', () => {
    request.get('/iecho?text=test').then((response) => {
      expect(response.status).to.eql(200)
      expect(response.body.text).to.eql('tset')
      expect(response.body.palindrome).to.eql(false)
      done()
    })
  })
})

describe('GET /iecho?text=ana', () => {
  it('Should return status 200 and the text should be turn around and the palindrome flag being true', () => {
    request.get('/iecho?text=test').then((response) => {
      expect(response.status).to.eql(200)
      expect(response.body.text).to.eql('ana')
      expect(response.body.palindrome).to.eql(true)
      done()
    })
  })
})

describe('GET /iecho', () => {
  it("Should return status 400 because it doesn't have text", () => {
    request.get('/iecho').then((response) => {
      expect(response.status).to.eql(400)
      expect(response.body.error).to.eql('no text')
      done()
    })
  })
})
