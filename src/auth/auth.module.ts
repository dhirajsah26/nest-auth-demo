import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.startegy';
import { SessionSerializer } from './session.serializers';


@Module({
  imports: [UsersModule,PassportModule.register({session: true})],
  providers: [AuthService,LocalStrategy, SessionSerializer]
})
export class AuthModule {}
