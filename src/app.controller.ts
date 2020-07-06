import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import IDetergent from './IDetergent';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, @Inject('IDetergent') private readonly detergentService: IDetergent) {}

  @Get()
  getHello(): string {
    return this.detergentService.create();
  }

  @Get('/delete')
  delete(): string {
    return this.detergentService.delete();
  }
}
