import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import bcrypt from 'bcrypt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RegisterUserRequest } from './dto/registerUser.dto';
import { User, UserDocument } from './user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  async register(input: RegisterUserRequest) {
    try {
      const exUser = await this.getUserByEmail(input.email);

      if (exUser) {
        throw new BadRequestException(
          `Can not register this email ${input.email}`,
        );
      }

      const hashedPassword = await bcrypt.hash(input.password, 10);

      await this.userModel.create({ ...input, password: hashedPassword });

      return { result: 'success' };
    } catch (err) {
      throw new InternalServerErrorException(err);
    }
  }

  async getUserByEmail(email: string) {
    try {
      return await this.userModel.findOne({ email });
    } catch (err) {
      throw new InternalServerErrorException(err);
    }
  }
}
