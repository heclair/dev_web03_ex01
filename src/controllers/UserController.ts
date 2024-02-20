import { Request, Response } from "express";
import { User } from "../models";

class UserController {

    async create(req: Request, res: Response){
        const{mail,password} = req.body;

        const document = new User({mail,password});

        const r = await document.save();

        res.json(r);

    }
}

export default new UserController();