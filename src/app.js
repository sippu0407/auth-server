const express=require('express');
const bodyParser=require('body-parser');
const morgan=require('morgan');
const helmet=require('helmet');
const cors=require('cors');

const {PORT}=require('./config/serverConfig');
const connect=require('./config/dbConfig');

const userRouter=require('./routes/user-routes')

const app=express();

const corsOptions = {
   origin: 'http://localhost:3000',
   credentials: true, 
 };

const startServer=()=>{
     app.use(morgan('dev'));
     app.use(cors(corsOptions));
     app.options('*', cors(corsOptions));
     app.use(helmet());
     app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}));
     app.use(bodyParser.json());
     app.use(bodyParser.urlencoded({extended:true}));
     app.use('/api/user',userRouter);

     app.listen(PORT,()=>{
        console.log(`server started at ${PORT}`);
        connect().then(()=>{console.log("successfully connect")});
     })
}

startServer();