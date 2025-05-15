const bcrypt = require("bcrypt");
const User = require("../models/user.model");
const UserDto = require("../dtos/user.dto");
const tokenService = require("./token.service");

class AuthService {
    async register(username, password) {
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            throw new Error("User allaqachon mavjud");
        }

        const hashPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({ username, hashPassword : hashPassword });

        const userDto = new UserDto(newUser)
        const tokens = tokenService.generateToken({
            id: userDto.id,
            username: userDto.username,
            isOnline: userDto.isOnline
          });

        await tokenService.saveToken( userDto.id, tokens.refreshToken )
        return { user: userDto, ...tokens };
    };

    async login(username, password) {
        const existingUser = await User.findOne({ username });
    
        if (!existingUser) {
            throw new Error('Ushbu foydalanuvchi hali ro‘yxatdan o‘tmagan');
        }
    
        const isMatch = await bcrypt.compare(password, existingUser.hashPassword);
        if (!isMatch) {
            throw new Error('Parol noto‘g‘ri');
        }
    
        const userDto = new UserDto(existingUser);
        const tokens = tokenService.generateToken(userDto);
    
        await tokenService.saveToken(userDto.id, tokens.refreshToken);
    
        return { user: userDto, ...tokens };
    }

    async logout(refreshToken) {
        return await tokenService.removeToken(refreshToken);
    }
}

module.exports = new AuthService();
