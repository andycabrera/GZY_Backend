import { Module } from '@nestjs/common'
import { databaseProviders } from './database.provider'
import { ConfigModule } from '@nestjs/config'

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
