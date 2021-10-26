import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { ConfigService, ConfigModule } from './modules/config';
import { TestModule } from './modules/test';

@Module({
  imports: [TestModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    // DO MAGIC IN CONFIGURATION HERE
    useFactory: (configService: ConfigService) => ({ silent: configService.config.a !== 1 })
  })],
  controllers: [AppController],
})
export class AppModule {}
