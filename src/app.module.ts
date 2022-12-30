import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './rest-api-nestjs/src/user/user.module';
import { UserController } from './rest-api-nestjs/src/user/controller/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(), UserModule],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}
