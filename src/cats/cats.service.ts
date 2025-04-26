import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Cat } from './Models/cat.model';

@Injectable()
export class CatsService {
  constructor(
    @InjectModel(Cat)
    private cat: typeof Cat,
  ) {}

  async create(createCatDto: CreateCatDto): Promise<Cat> {
    return this.cat.create({
      ...createCatDto,
    });
  }

  async findAll(): Promise<Cat[]> {
    return this.cat.findAll();
  }

  async findOne(id: number): Promise<Cat | null> {
    return this.cat.findOne({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateCatDto: UpdateCatDto): Promise<Cat | null> {
    return this.cat
      .update(updateCatDto, {
        where: {
          id,
        },
      })
      .then(() => this.findOne(id));
  }

  async remove(id: number): Promise<void> {
    const cat = await this.cat.findOne({
      where: {
        id,
      },
    });
    if (cat) {
      await cat.destroy();
    } else {
      throw new Error(`Cat with id ${id} not found`);
    }
  }
}
