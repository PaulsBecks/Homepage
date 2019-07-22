import dotenv from 'dotenv';
import path from 'path';

const { NODE_ENV } = process.env;

const envPath = path.join(__dirname, `/${NODE_ENV || 'development'}.env`)
dotenv.config({path: envPath});

console.log(envPath, process.env, __dirname);