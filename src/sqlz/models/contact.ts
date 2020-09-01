import { DataTypes, Model } from 'sequelize'
import sequelize from './db'

interface ContactAttributes {
  id: number
  userId: number,
  firstName: string
  lastName: string
  phone: string
}

class Contact extends Model<ContactAttributes> implements ContactAttributes {
  public id: number
  public userId: number
  public firstName: string
  public lastName: string
  public phone: string

  public readonly createdAt!: Date
  public readonly updatedAt!: Date
}

Contact.init(
  {
    id: {
      allowNull: false,
      type: new DataTypes.DOUBLE(),
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      allowNull: false,
      type: new DataTypes.DOUBLE()
    },
    firstName: {
      allowNull: false,
      type: new DataTypes.STRING(255)
    },
    lastName: {
      allowNull: false,
      type: new DataTypes.STRING(255)
    },
    phone: {
      allowNull: false,
      type: new DataTypes.STRING(255)
    }
  }, {
  tableName: 'Contacts', sequelize
}
)

export default Contact
