import * as express from 'express'
import { UserController } from '../endpoints/_index'
import { protectRoute, validateHttpMethod } from '../middlewares'
import { POST, PUT } from '../utils/httpMethods'

export function routes(app: express.Application, API_VERSION: string) {
  app.all(`${API_VERSION}/user/authenticate`, validateHttpMethod(POST), UserController.authenticate)
  app.all(`${API_VERSION}/user`, validateHttpMethod(POST), UserController.register)
  app.all(`${API_VERSION}/user/password/:userId`, protectRoute, validateHttpMethod(PUT), UserController.resetPassword)
}
