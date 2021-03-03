import { Controller, Get, Post, Body, Put, Param, Delete, Render } from '@nestjs/common';
import { BiodataService } from './biodata.service';
import { CreateBiodatumDto } from './dto/create-biodatum.dto';
import { UpdateBiodatumDto } from './dto/update-biodatum.dto';

@Controller('biodata')
export class BiodataController {
  constructor(private readonly bioDataService: BiodataService) { }



  @Post()
  create(@Body() createBiodatumDto: CreateBiodatumDto) {
    return this.bioDataService.create(createBiodatumDto);
  }

  @Get()
  findAll() {
    return this.bioDataService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bioDataService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateBiodatumDto: UpdateBiodatumDto,
  ) {
    return this.bioDataService.update(+id, updateBiodatumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bioDataService.remove(+id);
  }
}
