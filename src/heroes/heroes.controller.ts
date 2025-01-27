// src/heroes/heroes.controller.ts
import { Controller, Get, Post, Body, Param, Patch, Delete, Options, UseInterceptors } from '@nestjs/common';
import { HeroesService } from './heroes.service';
import { Hero } from './interfaces/heroes.interface';
import { CorsInterceptor } from 'src/interceptors/cors.interceptor';

@Controller('heroes')
@UseInterceptors(CorsInterceptor)
export class HeroesController {
  constructor(private readonly heroesService: HeroesService) {}

  @Get()
  findAll(): Promise<Hero[]> {
    
    return this.heroesService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string): Promise<Hero> {
    return this.heroesService.findById(id);
  }

  @Post()
  create(@Body() hero: Hero): Promise<Hero> {
    return this.heroesService.create(hero);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() hero: Hero): Promise<Hero> {
    return this.heroesService.update(id, hero);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<any> {
    return this.heroesService.delete(id);
  }
  @Options()
  options() {
    return {};  
  }
  @Options(":id")
  options1() {
    return {};  
  }
}
