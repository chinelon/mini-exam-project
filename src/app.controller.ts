import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('register')
  @Render('citizenregistration.html')
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  createForm() { }

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  @Render('home.html')
  // eslint-disable-next-line @typescript-eslint/ban-types
  getHome(): {} {
    return this.appService.getHome();
  }
}
