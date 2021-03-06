import { join } from 'path';

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { User } from '../users/user.entity';
import { UsersModule } from '../users/users.module';
import { UploaderModule } from '../uploader/uploader.module';
import { CatsModule } from '../cats/cats.module';
import { PersonModule } from 'src/person/person.module';
import { HobbyModule } from 'src/hobby/hobby.module';
import configuration from '../config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    TypeOrmModule.forRootAsync({
      // https://github.com/nestjsx/nestjs-config/issues/19
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        return Object.assign(
          {
            type: 'mysql', // or mongoose
            database: 'test',
            entities: [User],
            synchronize: true,
            retryAttempts: 0,
          },
          configService.get('mysql'),
        );
      },
      inject: [ConfigService],
    }),
    UsersModule,
    // MongooseModule.forRootAsync({
    //   imports: [ConfigModule],
    //   useFactory: async (configService: ConfigService) => ({
    //     uri: configService.get('mg1').url,
    //   }),
    //   inject: [ConfigService],
    //   connectionName: 'cats',
    // }),
    // MongooseModule.forRootAsync({
    //   imports: [ConfigModule],
    //   useFactory: async (configService: ConfigService) => ({
    //     uri: configService.get('mg2').url,
    //   }),
    //   inject: [ConfigService],
    //   connectionName: 'gql',
    // }),
    // GraphQLModule.forRoot({
    //   autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    //   sortSchema: true,
    //   playground: true,
    //   debug: false,
    // }),
    // PersonModule,
    // HobbyModule,
    // CatsModule,
    UploaderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
