import { Module } from '@nestjs/common';
import { BiodataService } from './biodata.service';
import { BiodataController } from './biodata.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Biodata } from './entities/biodatum.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Biodata])],
  controllers: [BiodataController],
  providers: [BiodataService]
})
export class BiodataModule { }
