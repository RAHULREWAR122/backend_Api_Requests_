import { data } from "./dummyData.js"

export const usersList = (req,res)=>{       
    return res.status(200).send(data)
}