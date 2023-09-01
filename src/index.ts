import * as express from 'express';

let app:express.Application = express()

app.listen(6000,()=>{
    console.log('server is listning on port 600')
})