import dotenv from "dotenv"
import path from "path"
dotenv.config({
    path:'./.env'
})

import { app } from "./app.js";
//import mongoose from "mongoose";
import connectDB from "./db/index.js";
// import { Rule } from "./model/rule.model.js";
// import { createRule } from "./utils/rulelogic.js";
// async function createSampleRule(ruleString) {
//     try {
//         const ast=createRule(ruleString)
//     const newRule = new Rule({
//         name: ruleString,
//         ast:ast
//     });

   
//         await newRule.save();
//         console.log("Rule created successfully:", newRule);
//     } catch (error) {
//         console.error("Error creating rule:", error);
//     }
// }

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        //createSampleRule("age>25");
        console.log(`Server is running at port : ${process.env.PORT}`);
    })
})

.catch((err)=>{
    console.log("MONGODB connection failed !!",err);
})

