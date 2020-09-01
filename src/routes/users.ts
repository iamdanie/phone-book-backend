import * as express from 'express'
import { UserController } from '../endpoints/_index'

export function routes(app: express.Application, API_VERSION: string) {
  app.post(`${API_VERSION}/user/authenticate`, UserController.authenticate)
  app.post(`${API_VERSION}/user`, UserController.register)
  app.put(`${API_VERSION}/user/:userId`, UserController.resetPassword)
}
