import request from 'supertest'
import App from '../../src/app'
import User from '../../src/sqlz/models/user'

let mockUser = null
let mockUserToken = null
let mockNewContactId = null
let app = null

const authenticateExistingTestUser = async () => {
    const users = await User.findAll()
    mockUser = users[0].toJSON()
    mockUser.password = 'test1234$'

    const response = await request(app).post('/api/v1/user/authenticate').send({ email: mockUser.email, password: mockUser.password })
    mockUserToken = response.body.token
}

describe('Contacts Routes', () => {

    beforeAll(async () => {
        app = new App().init()
        await authenticateExistingTestUser()
        return
    })

    afterAll(async () => {
        return await app.close()
    })

    it('should create a contact successfully', async (done) => {
        const response = await request(app).post('/api/v1/contact').set('Authorization', `Bearer ${mockUserToken}`).send({
            firstName: 'Test',
            lastName: 'Contact',
            phone: '+5215536382902'
        })

        mockNewContactId = response.body.id

        expect(response.status).toEqual(202)
        expect(response.body.id).toBeTruthy()
        expect(response.body.firstName).toEqual('Test')
        expect(response.body.lastName).toEqual('Contact')
        expect(response.body.phone).toEqual('+5215536382902')

        done()
    })

    it('should return a contact\'s detail', async (done) => {
        const response = await request(app).get(`/api/v1/contact/${mockNewContactId}`).set('Authorization', `Bearer ${mockUserToken}`)

        expect(response.status).toEqual(200)
        expect(response.body.id).toBe(mockNewContactId)
        expect(response.body.firstName).toEqual('Test')
        expect(response.body.lastName).toEqual('Contact')
        expect(response.body.phone).toEqual('+5215536382902')

        done()
    })

    it('should return a list of contacts corresponding to a user', async (done) => {
        const response = await request(app).get('/api/v1/contacts').set('Authorization', `Bearer ${mockUserToken}`)

        expect(response.status).toEqual(200)
        expect(response.body.totalItems).toBeGreaterThanOrEqual(1)
        expect(response.body.items.length).toBeGreaterThanOrEqual(1)

        done()
    })

    it('should delete a contact successfully', async (done) => {
        const response = await request(app).delete(`/api/v1/contact/delete/${mockNewContactId}`).set('Authorization', `Bearer ${mockUserToken}`)

        expect(response.status).toEqual(204)
        done()
    })
})