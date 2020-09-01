import Contact from '../sqlz/models/contact'
import { Transaction } from 'sequelize/types'
import { PaginationRequest, PaginatedResponse } from '../utils/pagination'

export async function findAll(userId: any, pagination: PaginationRequest): Promise<PaginatedResponse> {
  try {
    const totalItems = await Contact.count()
    const limit = pagination.calculateLimit()
    const offset = pagination.from

    const items = await Contact.findAll({ where: { userId }, order: [['firstName', 'asc'], ['lastName', 'asc']], limit, offset })

    return {
      totalItems,
      items
    }
  } catch (error) {
    throw error
  }
}

export async function findById(id: number, userId: number): Promise<any> {
  try {
    return await Contact.findOne({
      where: {
        id, userId
      }
    })
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

export async function remove(id: number, userId: number, transaction?: Transaction): Promise<any> {
  try {
    return await Contact.destroy({ where: { id, userId }, transaction })
  } catch (error) {
    throw error
  }
}
