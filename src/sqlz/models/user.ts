import { DataTypes, Model, HasManyGetAssociationsMixin, Association } from 'sequelize'
import sequelize from './_index'
import Contact from './contact'

interface UserAttributes {
  id: number
  name: string
  email: string
  password: string
}

class User extends Model<UserAttributes> implements UserAttributes {
  public id: number
  public name: string
  public email: string
  public password: string

  public readonly createdAt!: Date
  public readonly updatedAt!: Date

  public getContacts!: HasManyGetAssociationsMixin<Contact>

  public readonly contacts?: Contact[]

  public static associations: {
    contacts: Association<User, Contact>
  }
}

User.init(
  {
    id: {
      allowNull: false,
      type: DataTypes.DOUBLE(),
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING(255)
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING(255)
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING(255)
    }
  }, {
  tableName: 'Users', sequelize
}
)

User.hasMany(Contact, {
  sourceKey: 'id',
  foreignKey: 'userId',
  as: 'contacts'
})

export default User
