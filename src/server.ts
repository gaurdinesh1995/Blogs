import * as express from 'express'
import { getEnvironmentVariables } from './Environments/Env';
import mongoose from 'mongoose';

export class Server{
    public app:express.Application = express();
    constructor(){
        this.setConfiguration()
        this.setRoutes()
        this.Error404Handler()
        this.ErrorHandler()
    }
    setConfiguration(){
        this.connectDB()
        //this.confirmBodyParser()
    }
    connectDB(){
        let datbseUrl = getEnvironmentVariables().db_url
        mongoose.connect(datbseUrl).then(()=>{
            console.log('Database connected')
        })
    }


    setRoutes(){
        this.app.use('/user/api',)    
    }
    Error404Handler(){

    }
    ErrorHandler(){}
}