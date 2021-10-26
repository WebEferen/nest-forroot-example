import { DynamicModule, Module, ModuleMetadata } from '@nestjs/common';
import { WinstonModule, WinstonModuleOptions } from 'nest-winston';
import { TestService } from './test.service';

export interface TestModuleOptions {
    isDev: boolean;
    isMultiTenant: boolean;
}

export interface TestModuleAsyncOptions extends Pick<ModuleMetadata, 'imports'> {
  useFactory?: (...args: any[]) => Promise<WinstonModuleOptions> | WinstonModuleOptions;
  additionalOptions?: TestModuleOptions;
  inject?: any[];
}
@Module({imports: [], controllers: [], providers: [] })
export class TestModule {

  static forRootAsync(options: TestModuleAsyncOptions): DynamicModule {

    const winstonModule = WinstonModule.forRootAsync({
      imports: options.imports || [],
      inject: options.inject || [],
      useFactory: options.useFactory
    });

    return {
      module: TestModule,
      imports: [winstonModule],
      providers: [TestService],
      exports: [TestService]
    };
  }
}