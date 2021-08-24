import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DogsController } from './controllers/dogs/dogs.controller';
import { TemperamentsController } from './controllers/temperaments/temperaments.controller';

@Module({
  imports: [],
  controllers: [AppController, DogsController, TemperamentsController],
  providers: [AppService],
})
export class AppModule {}
