import { ConflictException, Injectable } from '@nestjs/common';
import { db } from '../config/database.config';
import { User } from './schema';
import { UserDto } from './dto/user.dto'
import { eq, lt, gte, ne } from 'drizzle-orm';

@Injectable()
export class UserService {
  async createUser(createUserDto: UserDto) {
    const existingUser = await db.select().from(User).where(eq(User.email,createUserDto.email)).execute();

  if (existingUser.length > 0) {
    throw new ConflictException('Email already in use');
  }

  const result = await db.insert(User).values({
    username: createUserDto.username,
    email: createUserDto.email,
    password: createUserDto.password,
  }).execute();

  return result;
  }

  async findAllUsers() {
    const users = await db.select().from(User).execute();
    return users;
  }

  async findUserById(id: number) {
    const user = await db.select().from(User).where(eq(User.id, id))
    return user;
  }

  async updateUser(id: number, updateUserDto: UserDto) {
    const result = await db.update(User).set(
      {
      username:updateUserDto.username,
      email:updateUserDto.email,
      password:updateUserDto.password,
    }
    ).where(eq(User.id, id));
    return result;
  }

  async deleteUser(id: number) {
    const result = await db.delete(User).where(eq(User.id, id)).execute();
    return result;
  }
}
