import { Request, Response } from 'express'
import { ContactsDao, UsersDao } from '../dao/_index'

export async function findByUser(req: any, res: Response) {
  try {
    const { id: userId } = req.decodedUser
    const user = await UsersDao.findById(userId)

    if (!user) {
      return res.status(404).json({ error: 'Provided user doesn\'t exist', errorCode: 'USER_NOT_EXIST', status: 404 })
    }

    const contacts = await ContactsDao.findAll(userId)

    return res.status(200).json(contacts)
  }
  catch (error) {
    return res.status(500).json({ error: error.response || error })
  }
}

export async function findById(req: Request, res: Response) {
  try {
    const { contactId } = req.params
    const contact = await ContactsDao.findById(contactId)

    if (!contact) {
      return res.status(404).json({ error: 'Provided contact doesn\'t exist', errorCode: 'CONTACT_NOT_EXIST', status: 404 })
    }

    return res.status(200).json(contact)
  }
  catch (error) {
    return res.status(500).json({ error: error.response || error })
  }
}

export async function create(req: any, res: Response) {
  try {
    const { id: userId } = req.decodedUser
    const newContact = { ...req.body, userId }
    const createdContact = await ContactsDao.create(newContact)

    return res.status(202).json(createdContact)
  } catch (error) {
    return res.status(500).json({ error: error.response || error })
  }
}

export async function remove(req: Request, res: Response) {
  try {
    const { contactId } = req.params
    await ContactsDao.remove(contactId)

    return res.status(204).json()
  } catch (error) {
    return res.status(500).json({ error: error.response || error })
  }
}