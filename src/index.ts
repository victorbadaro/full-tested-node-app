import express from 'express';
import { router } from './routes';

const app = express();

app.use(router);

app.listen(3333, () => console.log('Server is now running at port number 3333 🚀'));
