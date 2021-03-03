import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CitizenRegisterModule } from './citizen-register/citizen-register.module';
import { BiodataModule } from './citizen-register/biodata/biodata.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(), CitizenRegisterModule, BiodataModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
