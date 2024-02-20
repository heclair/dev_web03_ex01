import { Request, Response, request } from "express";
import { User } from "../models";

class UserController {

    async create(req: Request, res: Response) {
        const { mail, password } = req.body;

        const document = new User({ mail, password });

        const r = await document.save();

        res.json(r);

    }

    async list(_: Request, res: Response) {
        const documents = await User.find();
        res.json(document);
    }

    async delete(req:Request,res:Response){
        const {id} = req.body;
        const document = await User.findByIdAndDelete(id);
        res.json(document);
    }

    async update(req:Request, res:Response){
        const{id, mail, password} = req.body;
        const document = await User.findById(id);
        if (document){
            document.mail = mail;
            document.password = password;
            const r = await document.save();
        }
        res.json(document);
    }
}

export default new UserController();