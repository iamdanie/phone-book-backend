import * as express from 'express'
import { ContactController } from '../endpoints/_index'
import { protectRoute, validateHttpMethod } from '../middlewares'
import { GET, POST, DELETE } from '../utils/httpMethods'

export function routes(app: express.Application, API_VERSION: string) {
  app.all(`${API_VERSION}/contacts`, protectRoute, validateHttpMethod(GET), ContactController.findByUser)
  app.all(`${API_VERSION}/contact/:contactId`, protectRoute, validateHttpMethod(GET), ContactController.findById)
  app.all(`${API_VERSION}/contact`, protectRoute, validateHttpMethod(POST), ContactController.create)
  app.all(`${API_VERSION}/contact/delete/:contactId`, protectRoute, validateHttpMethod(DELETE), ContactController.remove)
}
