import * as express from 'express'
import { ContactController } from '../endpoints/_index'

export function routes(app: express.Application, API_VERSION: string) {
  app.get(`${API_VERSION}/contacts/:userId`, ContactController.findByUser)
  app.get(`${API_VERSION}/contact/:contactId`, ContactController.findById)
  app.post(`${API_VERSION}/contact`, ContactController.create)
  app.delete(`${API_VERSION}/contact/:contactId`, ContactController.remove)
}
