import { Controller, Get, Param, Query, Post, Body } from '@nestjs/common';

@Controller('dogs')
export class DogsController {

  @Get()
  getName(
    @Query('name') name: string) {
    return `${name}`;
  }

  @Get()
  getDogs() {
    return `perros`;

  }

  @Get(':idRace')
  getDogsId(@Param('idRace') idRace: number) {
    return { message: `perros id ${idRace}` };
  }

 @Post()
 createDog(@Body() payload:any){
   return {
     message:'Dog Create',
     payload
   };
 }
}
