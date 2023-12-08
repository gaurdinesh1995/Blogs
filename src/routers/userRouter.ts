import { Router } from "express";
import { UserController } from "../controllers/UserController";
import { UserValidators } from "../validators/userValidator";

export class UserRouter{
    public router:Router;

    constructor(){
        this.router = Router();
        this.getRoutes();
        this.postRoutes();
    }
    getRoutes(){
 
    }
    postRoutes(){
      this.router.post('/login',UserValidators.login(), UserController.login)
    }
}

export default new UserRouter().router