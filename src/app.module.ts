import { Module } from '@nestjs/common';
import { ApisModule } from './apis/apis.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';

@Module({
  imports: [ApisModule],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule {}
