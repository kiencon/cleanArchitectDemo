import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import DetergentService from './detergentService';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'IDetergent',
      useClass: DetergentService
    }
  ]
})
export class AppModule {}
