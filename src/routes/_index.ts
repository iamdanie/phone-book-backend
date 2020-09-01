import { Request, Response } from 'express'
import * as express from 'express'
import * as UsersRoutes from './users'
import * as ContactsRoutes from './contacts'

export function initRoutes(app: express.Application) {

  const { VERSION } = require('../../config/api.json')

  app.get(`${VERSION}/healthcheck`, (req: Request, res: Response) =>
    res.status(200).json({
      message: 'Welcome to the Phone Book Api!',
      date: Date.now()
    })
  )

  UsersRoutes.routes(app, VERSION)
  ContactsRoutes.routes(app, VERSION)

  app.all('*', (req: Request, res: Response) => res.status(404).json({
    error: 'Resource not found',
  }))
}
