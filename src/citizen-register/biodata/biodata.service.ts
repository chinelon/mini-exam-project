import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBiodatumDto } from './dto/create-biodatum.dto';
import { UpdateBiodatumDto } from './dto/update-biodatum.dto';
import { Biodata } from './entities/biodatum.entity';

@Injectable()
export class BiodataService {
  constructor(
    @InjectRepository(Biodata)
    private BiodataRepository: Repository<Biodata>,
  ) { }

  async create(createBiodatumDto: CreateBiodatumDto) {
    const newBiodata: Biodata = this.BiodataRepository.create(
      createBiodatumDto,
    );
    return await this.BiodataRepository.save(newBiodata);
    //return 'This action adds a new bioDatum';
  }

  async findAll() {
    return await this.BiodataRepository.find();
    //return `This action returns all bioData`;
  }

  async findOne(id: number) {
    return await this.BiodataRepository.findOne(id);
    //return `This action returns a #${id} bioDatum`;
  }

  async update(id: number, updateBiodatumDto: UpdateBiodatumDto) {
    return await this.BiodataRepository.update(id, updateBiodatumDto);
    //return `This action updates a #${id} bioDatum`;
  }

  async remove(id: number) {
    return await this.BiodataRepository.delete(id);
    //return `This action removes a #${id} bioDatum`;
  }
}
