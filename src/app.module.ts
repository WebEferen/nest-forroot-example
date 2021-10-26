import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { ConfigService, ConfigModule } from './modules/config';
import { TestModule } from './modules/test';

@Module({
  imports: [TestModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: (configService: ConfigService) => ({ isDev: configService.config.a === 1, isMultiTenant: true })
  })],
  controllers: [AppController],
})
export class AppModule {}
