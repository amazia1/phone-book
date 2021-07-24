import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { ContactModule } from './contact/contact.module';
import { PhoneModule } from './phone/phone.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "amazia",
      password: "phonebook123",
      database: "phonebook",
      entities: ["dist/**/*.entity.js"],
      synchronize: true,
      logging: true
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true
  }),
  // ServeStaticModule.forRoot({
  //   rootPath: join(__dirname, '..', 'src/contact/image-upload/images'),
  //   //exclude: ['/api*'],
  // }),
  ContactModule,
  PhoneModule
],
})
export class AppModule {}
