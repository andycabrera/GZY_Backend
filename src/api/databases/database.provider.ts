import * as mongoose from 'mongoose'
import { ConfigService, ConfigModule } from '@nestjs/config'

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (configService: ConfigService): Promise<typeof mongoose> =>
      await mongoose.connect(configService.get<string>('MONGODB_URI'), {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      }),
    inject: [ConfigService],
    imports: [ConfigModule],
  },
]
