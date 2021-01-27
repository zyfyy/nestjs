import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { User } from '../users/user.entity';
import { UsersModule } from '../users/users.module';
import { CatsModule } from '../cats/cats.module';
import { PersonModule } from 'src/person/person.module';
import { HobbyModule } from 'src/hobby/hobby.module';
import { join } from 'path';

@Module({
  imports: [
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
    MongooseModule.forRoot('mongodb://localhost:27017/nest', {
      connectionName: 'cats',
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/three-in-one-db', {
      connectionName: 'gql',
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      playground: true,
      debug: false,
    }),
    PersonModule,
    HobbyModule,
    UsersModule,
    CatsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
