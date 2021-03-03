import { Biodata } from 'src/citizen-register/biodata/entities/biodatum.entity';
import { PrimaryGeneratedColumn, Column, Entity, JoinColumn, OneToOne, } from 'typeorm';

@Entity()
export class Linkedidentity {
      @PrimaryGeneratedColumn()
      id: number;

      @Column()
      NIN: number;

      @Column()
      BVN: number;

      @Column()
      mobileNumbers: number;

      @JoinColumn()
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      @OneToOne((type) => Biodata, (biodata) => biodata.linkedidentity, {
            cascade: true,
      })
      biodata: Biodata;
}

