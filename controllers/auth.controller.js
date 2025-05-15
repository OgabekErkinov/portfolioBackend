const userModel = require("../models/user.model");
const authService = require("../services/auth.service");

class AuthController {
    async register(req, res, next) {
        try {
            const { username, password } = req.body;
            const data = await authService.register(username, password );
            res.cookie('refreshToken', data.refreshToken, { httpOnly: true, maxAge : 15*24*60*60*1000 })
            return res.status(201).json(data);
        } catch (error) {
            console.error("Xatolik:", {
                message: error.message,
                stack: error.stack,
                cause: error.cause
            });
            return res.status(500).json({ message: "Server xatosi" });
        }
    }

    async activation(req, res, next) {}

    async login(req, res, next){
        try {
            const { username, password } = req.body
            const data = await authService.login(username, password) 
            res.cookie('refreshToken', data.refreshToken, { httpOnly: true, maxAge : 15*24*60*60*1000 })
            return res.status(201).json(data);
            
        } catch (error) {
            throw new Error(error)
            
        }

    }

    async logout(req, res, next){
        try {
            const { refreshToken } = req.cookies
            await authService.logout(refreshToken)
            res.clearCookie('refreshToken')
            res.json({status : 200})
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new AuthController();
