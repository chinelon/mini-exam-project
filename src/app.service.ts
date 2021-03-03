import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  getHome(): {} {
    return { title: 'Home Page' };
  }
}
