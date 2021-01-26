import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
// import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { User } from './users/user.entity';
import { UsersModule } from './users/users.module';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [
    // GraphQLModule.forRoot({
    //   debug: false,
    //   playground: false,
    // }),
    TypeOrmModule.forRoot({
      type: 'mysql', // or mongoose
      host: 'localhost',
      port: 3306,
      username: 'test',
      password: 'lol@12Txt_!',
      database: 'test',
      entities: [User],
      synchronize: true,
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/nest'),
    UsersModule,
    CatsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
