import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Biodata } from '../biodata/entities/biodatum.entity';
import { CreateLinkedidentityDto } from './dto/create-linkedidentity.dto';
import { UpdateLinkedidentityDto } from './dto/update-linkedidentity.dto';
import { Linkedidentity } from './entities/linkedidentity.entity';

@Injectable()
export class LinkedidentityService {
  constructor(
    @InjectRepository(Linkedidentity)
    private LinkedidentityRepository: Repository<Linkedidentity>,

    @InjectRepository(Biodata)
    private BiodataRepository: Repository<Biodata>,
  ) { }

  async create(createLinkedidentityDto: CreateLinkedidentityDto) {
    //return 'This action adds a new student';
    const newLinkedidentity = this.LinkedidentityRepository.create(
      createLinkedidentityDto,
    );
    //ideally, below should be wrapped in a transaction so that it can roll back if there is error in any of the stages.
    if (createLinkedidentityDto.biodata) {
      const newBiodata = this.BiodataRepository.create(
        createLinkedidentityDto.biodata,
      );
      const Biodata: Biodata = await this.BiodataRepository.save(newBiodata);
      newLinkedidentity.biodata = Biodata;
    }
    return this.LinkedidentityRepository.save(newLinkedidentity);
  }

  async findAll() {
    return await this.LinkedidentityRepository.find();
    //return `This action returns all linkedIdentity`;
  }

  async findOne(id: number) {
    return await this.LinkedidentityRepository.findOne(id);
    //return `This action returns a #${id} linkedIdentity`;
  }

  async update(id: number, updateLinkedidentityDto: UpdateLinkedidentityDto) {
    return await this.LinkedidentityRepository.update(
      id,
      updateLinkedidentityDto,
    );
    //return `This action updates a #${id} linkedIdentity`;
  }

  async remove(id: number) {
    return await this.LinkedidentityRepository.delete(id);
    //return `This action removes a #${id} linkedIdentity`;
  }
}
