import request from 'supertest'
import App from '../../src/app'

const mockNewUser = {
    name: 'Test User',
    email: 'testuser@me.com',
    password: 'test1234$'
}
let mockUserToken: string
let mockUserId: number
let app = null

describe('Users Routes', () => {

    beforeAll(() => {
        return app = new App().init()
    })

    afterAll(async () => {
        return await app.close()
    })

    it('should create a user successfully', async (done) => {
        const response = await request(app).post('/api/v1/user').send(mockNewUser)
        mockUserId = response.body.id

        expect(response.status).toEqual(202)
        expect(response.body.id).toBeTruthy()
        expect(response.body.name).toEqual(mockNewUser.name)
        expect(response.body.email).toEqual(mockNewUser.email)

        done()
    })

    it('should authenticate an existing user successfully', async (done) => {
        const response = await request(app).post('/api/v1/user/authenticate').send({ email: mockNewUser.email, password: mockNewUser.password })
        const token = response.body.token
        mockUserToken = token

        expect(response.status).toEqual(200)
        expect(response.body.user.email).toEqual(mockNewUser.email)
        expect(response.body.user.name).toEqual(mockNewUser.name)
        expect(response.body.token).toBeDefined()

        done()
    })

    it('should reset an existing user\'s password successfully', async (done) => {
        const response = await request(app).put(`/api/v1/user/password/${mockUserId}`).set('Authorization', `Bearer ${mockUserToken}`).send({ currentPassword: mockNewUser.password, newPassword: 'F00b4R842$' })

        expect(response.status).toEqual(200)
        expect(response.body.message).toEqual('User password has been updated successfully')
        expect(response.body.code).toEqual('PASSWORD_RESET_SUCCESS')
        done()
    })

    afterAll(async () => {
        return await app.listen().close()
    })
})