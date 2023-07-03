import { Injectable } from '@nestjs/common';
import { Host } from './enums/host.enum';

@Injectable()
export class AppService {
  getHandler(): string {
    return Host.FIRST_MESSAGE;
  }
}
