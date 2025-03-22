export interface Cat {
  id: number;
  name: string;
  age: number;
  weight: number;
  ownerId: number;
  isAdopted: boolean;
  birthDate: string;
  breed: string;
  color: string;
  description: string | null;
  imageUrl: string | null;
}