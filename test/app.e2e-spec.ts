import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it('/cats (GET)', () => {
    return request(app.getHttpServer())
      .get('/cats')
      .expect(200)
      .expect('This action returns all cats');
  });
  
  it('/cats (POST)', () => {
    return request(app.getHttpServer())
      .post('/cats')
      .send({ name: 'Tom' })
      .expect(201)
      .expect('This action adds a new cat');
  });
});
