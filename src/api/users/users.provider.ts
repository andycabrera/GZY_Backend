import { Connection } from 'mongoose'
import { UserSchema } from './users.schema'

export const usersProviders = [
  {
    provide: 'UsersModel',
    useFactory: (connection: Connection) => connection.model('Users', UserSchema),
    inject: ['DATABASE_CONNECTION'],
  },
]