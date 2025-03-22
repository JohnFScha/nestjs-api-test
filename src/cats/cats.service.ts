import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat } from './entities/cat.entity';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(createCatDto: CreateCatDto) {
    this.cats.push({
      id: this.cats.length + 1,
      ...createCatDto,
      });
  }

  findAll() {
    return this.cats;
  }

  findOne(id: number) {
    return this.cats.find(cat => cat.id === id);
  }

  update(id: number, updateCatDto: UpdateCatDto) {
    return this.cats.map(cat => {
      if (cat.id === id) {
        return {
          ...cat,
          ...updateCatDto,
          };
      }
      return cat;
    });
  }

  remove(id: number) {
    return this.cats.filter(cat => cat.id !== id);
  }
}
