import { Module } from '@nestjs/common';
import { DatabaseModule } from '../databases/database.module';
import { UserController } from './users.controller';
import { usersProviders } from './users.provider';
import { UserService } from './users.service';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [UserService, ...usersProviders],
})
export class ProductModule {}