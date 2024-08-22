import express from 'express';
import { userRouter } from './controller/usersController.js';
import { productRouter } from './controller/ProductsController.js';
import cookieParser from 'cookie-parser';
import { errorHandling } from './middleware/errorHandler.js';
import path from 'path';
import cors from 'cors';
import { config } from 'dotenv';

config();

const app = express();
const port = +process.env.PORT || 3000;

app.use(cors());
app.use(express.static('./static'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('^/$|/node_app', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, './static/index.html'));
});

app.use('/users', userRouter);
app.use('/products', productRouter);
app.use(errorHandling);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});