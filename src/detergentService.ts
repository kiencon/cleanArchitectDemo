import IDetergent from './IDetergent';
import { Injectable } from '@nestjs/common';

@Injectable()
export default class DetergentService implements IDetergent {
  create(): string {
    return 'create';
  }
  delete(): string {
    return 'delete';
  }
}
