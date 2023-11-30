import { Router } from "express";

export class UserRouter{
    public router:Router;

    constructor(){
        this.router = Router();
        this.getRoutes();
        this.postRoutes();
    }
    getRoutes(){
  this.router.get('/login',(req,res)=>{
    res.send('we are here to login')
  })
    }
    postRoutes(){

    }
}

export default new UserRouter().router