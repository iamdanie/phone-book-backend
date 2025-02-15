import { Response } from 'express'
import { ContactsDao, UsersDao } from '../dao'
import { Pagination } from '../utils/pagination'

export async function findByUser(req: any, res: Response) {
  try {
    const { id: userId } = req.decodedUser
    const { from, to, limit } = req.query

    const user = await UsersDao.findById(userId)

    if (!user) {
      return res.status(404).json({ error: 'Provided user doesn\'t exist', errorCode: 'USER_NOT_EXIST', status: 404 })
    }

    const pagination = new Pagination(parseInt(from), parseInt(to), parseInt(limit))
    const contacts = await ContactsDao.findAll(userId, pagination)

    return res.status(200).json(contacts)
  }
  catch (error) {
    return res.status(500).json({ error: error.response || error.errors[0].message || error })
  }
}

export async function findById(req: any, res: Response) {
  try {
    const { contactId } = req.params
    const { id: userId } = req.decodedUser

    const contact = await ContactsDao.findById(contactId, userId)

    if (!contact) {
      return res.status(404).json({ error: 'Provided contact doesn\'t exist', errorCode: 'CONTACT_NOT_EXIST', status: 404 })
    }

    return res.status(200).json(contact)
  }
  catch (error) {
    return res.status(500).json({ error: error.response || error.errors[0].message || error })
  }
}

export async function create(req: any, res: Response) {
  try {
    const { id: userId } = req.decodedUser
    const newContact = { ...req.body, userId }
    const createdContact = await ContactsDao.create(newContact)

    return res.status(202).json(createdContact)
  } catch (error) {
    return res.status(500).json({ error: error.response || error.errors[0].message || error })
  }
}

export async function remove(req: any, res: Response) {
  try {
    const { contactId } = req.params
    const { id: userId } = req.decodedUser

    const removedContact = await ContactsDao.remove(contactId, userId)

    if (!removedContact) {
      return res.status(404).json({ error: 'Provided contact doesn\'t exist', errorCode: 'CONTACT_NOT_EXIST', status: 404 })
    }

    return res.status(204).json()
  } catch (error) {
    return res.status(500).json({ error: error.response || error.errors[0].message || error })
  }
}