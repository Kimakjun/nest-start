import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { feedModule } from './feed/feed.module';

const PROD = process.env.NODE_ENV === 'production';

@Module({
  imports: [
    UserModule,
    AuthModule,
    feedModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GraphQLModule.forRoot({
      playground: true,
      autoSchemaFile: true,
      cors: {
        origin: PROD ? /domain\.$/ : true,
        credentials: true,
      },
      context: (ctx) => ({ ...ctx }),
    }),
    MongooseModule.forRoot(process.env.DB_CONFIG, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    }),
  ],
})
export class AppModule {}
