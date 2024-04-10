import express from 'express';
import { connect } from './database/connect.js';
import bookrouter from './asm1/router/books.js';

const app = express();
const port = 8000;
app.use(express.json())
app.use('/api', bookrouter);
app.listen(port, async () => {
    await connect();
    console.log(`Endpoint http://localhost:${port}/api/products`);
})