
import { Column, Model, Table, } from 'sequelize-typescript';

@Table
export class Cat extends Model {
  @Column
  name: string;
  @Column
  age: number;
  @Column
  breed: string;
  @Column
  color: string;
  @Column
  owner: string;
  @Column
  description: string;
  @Column
  image: string;
  @Column
  location: string;
  @Column
  price: number;
}
