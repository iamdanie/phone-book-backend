import * as express from 'express'
import { ContactController } from '../endpoints/_index'
import protectRoute from '../middlewares/protectRoute'

export function routes(app: express.Application, API_VERSION: string) {
  app.get(`${API_VERSION}/contacts`, protectRoute, ContactController.findByUser)
  app.get(`${API_VERSION}/contact/:contactId`, protectRoute, ContactController.findById)
  app.post(`${API_VERSION}/contact`, protectRoute, ContactController.create)
  app.delete(`${API_VERSION}/contact/:contactId`, protectRoute, ContactController.remove)
}
