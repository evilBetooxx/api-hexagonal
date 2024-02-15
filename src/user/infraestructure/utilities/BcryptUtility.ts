import { IBcryptRepository } from "../../application/services/IBcryptRepository";
import bcrypt from 'bcrypt';

export class BcryptUtility implements IBcryptRepository {
    async hashPassword(password: string): Promise<string> {
        const saltRounds = 10;
        return bcrypt.hash(password, saltRounds);
    }

    async comparePasswords(plainPassword: string, hashedPassword: string): Promise<boolean> {
        return bcrypt.compare(plainPassword, hashedPassword);
    }
}