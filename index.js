
import express from 'express';
import bodyParser  from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';

/*ROUTES*/
import clientRoutes from "./routes/client.js";
import generalRoutes from "./routes/general.js";
import managementRoutes from "./routes/management.js";
import salesRoutes from "./routes/sales.js";


/* CONFIGURATION */
dotenv.config();  /* so we can set our env variables */
const app = express(); 
app.use(express.json()) /*to envoke it */
app.use(helmet()); 
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin"})); /* allows us to do cross origin sharing requests*/ 
app.use(morgan("common")) /* to make api calls from another server */
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(cors());

/* ROUTES */
app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("/sales", salesRoutes);