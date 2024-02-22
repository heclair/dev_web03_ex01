import { Request,Response } from "express";
import { User } from "../models";

class SpentController {
    async create(req:Request,res:Response){
        const {_id, description, value} = req.body;

        try{
            const response = await User.updateOne(
                {_id},
                {
                    $push: {
                        spents: {description,value}
                    }
                }
            );
            return res.send(response);
        }
        
        catch(e:any){
            return res.send(e.message);
        }
    }

}

export default new SpentController();