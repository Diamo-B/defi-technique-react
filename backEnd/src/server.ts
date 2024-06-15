import express, { Express, Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import GenRouter from "./routes/genRoutes";

export const app:Express = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(helmet());

app.use(`/api`, GenRouter);

app.listen(3000, ()=>{
    console.log("Running on port 3000");
})