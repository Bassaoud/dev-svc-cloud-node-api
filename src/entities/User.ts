import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  username: string;

  private _password: string;

  @Column('varchar')
  get password(): string {
    return this._password;
  }

  set password(rawPassword: string) {
    this._password = rawPassword;
  }

  @BeforeInsert()
  async hashPasswordBeforeInsert() {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this._password, salt);
    this._password = hashedPassword;
  }
}
