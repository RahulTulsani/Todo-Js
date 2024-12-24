import { NextFunction, Response, Request } from "express";

const signup = (req:Request, res: Response, next: NextFunction) =>{
    res.json({
        status: 'success',
        message: "signup route are working"
    })
}

export default signup;