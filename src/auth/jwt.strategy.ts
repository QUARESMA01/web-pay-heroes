import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt,Strategy} from 'passport-jwt';
import { AuthService } from "./auth.service";

const JWT_SECRET = 'jwt-senac';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){

    constructor(private readonly authService: AuthService){
        super({
            jwtFromRequest: ExtractJwt.FromAuthHeaderAsBearerToken(),
            secretOrKey:JWT_SECRET,
        })
    }
}