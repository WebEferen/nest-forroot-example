import { DynamicModule, Module, ModuleMetadata, Provider } from '@nestjs/common';
import { TestService } from './test.service';

export interface TestModuleOptions {
    isDev: boolean;
    isMultiTenant: boolean;
}

export interface TestModuleAsyncOptions extends Pick<ModuleMetadata, 'imports'> {
  useFactory?: (...args: any[]) => Promise<TestModuleOptions> | TestModuleOptions;
  inject?: any[];
}

export const PROVIDER_KEY = 'TEST_PROVIDER';

@Module({imports: [], controllers: [], providers: [] })
export class TestModule {
  static forRootAsync(options: TestModuleAsyncOptions): DynamicModule {

    const provider: Provider = {
      inject: options.inject || [],
      provide: PROVIDER_KEY,
      useFactory: options.useFactory,
    }

    return {
      module: TestModule,
      imports: options.imports,
      providers: [provider, TestService],
      exports: [provider, TestService]
  };
  }
}
