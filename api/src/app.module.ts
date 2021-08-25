import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DogsController } from './controllers/dogs/dogs.controller';
import { TemperamentsController } from './controllers/temperaments/temperaments.controller';
import { DogsService } from './services/dogs/dogs.service';
import { TemperamentsService } from './services/temperaments/temperaments.service';

@Module({
  imports: [],
  controllers: [AppController, DogsController, TemperamentsController],
  providers: [AppService, DogsService, TemperamentsService],
})
export class AppModule {}
