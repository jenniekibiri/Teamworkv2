const request = require('request');
let teamwork = require('../index')
let baseUrl = 'localhost:5000';

describe('API ENDPOINTS TEST', () => {
    describe('GET /feed', () => {
        it('Returns status code of 200', () => {
            request.get(baseUrl, (err, res, err) => {
                expect(res.statusCode).toBe(200)
                done()
            })
        })
        it('Returns the value ', () => {
            request.get(baseUrl, (err, res, body) => {
                expect(body).toBe('these are feeds')
            })
        })
    })
})