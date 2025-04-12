import { ClassSerializerInterceptor, MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';

import { ConfigModule, ConfigService } from '@nestjs/config';
import { validationSchema } from 'env';

import LogsMiddleware from './util/log.middleware';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { AllExceptionsFilter } from './util/all-exception.filter';
import { ExamModule } from './modules/exam/exam.module';
import { RedisModule } from './modules/redis/redis.module';
import { CACHE_TTL } from './common/constant';
import { createKeyv } from '@keyv/redis';
import { CacheInterceptor, CacheModule } from '@nestjs/cache-manager';





@Module({
  imports: [
    CacheModule.registerAsync({
      isGlobal: true,
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        stores: [
          createKeyv(configService.get('REDIS_CONNECT')),
        ],
        ttl: CACHE_TTL
      }),
      
      inject: [ConfigService]
    }),
    DatabaseModule,
    ConfigModule.forRoot({
      validationSchema: validationSchema,
      isGlobal: true,
    }),
    ExamModule,
    RedisModule,
   
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor
    },
    
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LogsMiddleware).forRoutes('*');
  }
}
