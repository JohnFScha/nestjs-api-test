export class CreateCatDto {
  name: string;
  age: number;
  breed: string;
  color: string;
  weight: number;
  ownerId: number;
  isAdopted: boolean;
  birthDate: string;
  description: string | null;
  imageUrl: string | null;
}
