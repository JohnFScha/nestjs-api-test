import { PartialType } from '@nestjs/mapped-types';
import { CreateCatDto } from './create-cat.dto';

export class UpdateCatDto extends PartialType(CreateCatDto) {
  // No additional properties are needed here
  // The PartialType utility will automatically make all properties optional
  // from the CreateCatDto class, so you can update any subset of the properties.
}
