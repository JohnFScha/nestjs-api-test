import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Cat } from './cats/Models/cat.model';

@Module({
  imports: [
    CatsModule,
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'fran',
      password: '17620511Fran!',
      database: 'cats',
      models: [Cat],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
