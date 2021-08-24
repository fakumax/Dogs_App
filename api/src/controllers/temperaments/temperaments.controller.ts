import { Controller, Get} from '@nestjs/common';

@Controller('temperaments')
export class TemperamentsController {
  @Get()
  getTemperaments(){
    return 'q onda vieja temperaments';
  }

}
