import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config.module';
import { ConfigService } from './config.service';
import { TestModule } from './test/test.module';

@Module({
  imports: [TestModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: (configService: ConfigService) => ({ isDev: configService.config.a === 1, isMultiTenant: true })
  })],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule {}
