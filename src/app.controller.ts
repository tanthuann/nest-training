// libs
import { Controller, Get } from '@nestjs/common';
// services
import { AppService } from './app.service';
// decorators
import { Public } from './app.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Public()
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
