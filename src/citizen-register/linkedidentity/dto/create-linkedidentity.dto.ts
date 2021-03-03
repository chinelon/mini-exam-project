import { CreateBiodatumDto } from 'src/citizen-register/biodata/dto/create-biodatum.dto';

export class CreateLinkedidentityDto {
      readonly NIN: number;
      readonly BVN: number;
      readonly mobilenumbers: number;
      readonly biodata: CreateBiodatumDto;
}

