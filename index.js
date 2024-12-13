import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from "./Routes/index.js"


dotenv.config();

const app = express();
const PORT = 3100 
app.use(cors());
app.use(express.json());


app.get("/" , (req,res)=>{
     res.send({message : 'welcome to backend part'})
})

app.use(routes)

app.listen(PORT, async()=>{
    console.log(`Started server on ${PORT}`);
})