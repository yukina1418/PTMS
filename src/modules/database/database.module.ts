import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => {
        if (process.env.NODE_ENV === 'TEST') {
          return {
            type: 'postgres',
            host: process.env.TEST_DATABASE_HOST,
            port: 5432,
            username: process.env.TEST_DATABASE_USERNAME,
            password: process.env.TEST_DATABASE_PASSWORD,
            database: process.env.TEST_DATABASE_NAME,
            entities: [__dirname + './../**/**.entity{.ts,.js}'],
            dropSchema: true,
            synchronize: true,
          };
        }

        return {
          type: 'postgres',
          host: process.env.DATABASE_HOST,
          port: 5432,
          username: process.env.DATABASE_USERNAME,
          password: process.env.DATABASE_PASSWORD,
          database: process.env.DATABASE_NAME,
          entities: [__dirname + './../**/**.entity{.ts,.js}'],
          dropSchema: false,
          synchronize: false,
        };
      },
    }),
  ],
})
export class DatabaseModule {}
