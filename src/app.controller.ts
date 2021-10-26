import { Controller, Get } from '@nestjs/common';
import { TestService } from './modules/test/test.service';

@Controller()
export class AppController {
  constructor(private readonly testService: TestService) {}

  @Get()
  getTest() {
    return this.testService.getValues();
  }
}
