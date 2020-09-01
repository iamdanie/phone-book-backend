import Contact from '../sqlz/models/contact'
import { Transaction } from 'sequelize/types'

export async function findAll(userId: any): Promise<any> {
  try {
    return await Contact.findAll({ where: { userId }, order: [['firstName', 'desc'], ['lastName', 'desc']] })
  } catch (error) {
    throw error
  }
}

export async function findById(contactId: any): Promise<any> {
  try {
    return await Contact.findByPk(contactId)
  } catch (error) {
    throw error
  }
}

export async function create(contact: any, transaction?: Transaction): Promise<any> {
  try {
    return await Contact.create(contact, { transaction })
  } catch (error) {
    throw error
  }
}

export async function remove(contactId: any, transaction?: Transaction): Promise<any> {
  try {
    return await Contact.destroy({ where: { id: contactId }, transaction })
  } catch (error) {
    throw error
  }
}
