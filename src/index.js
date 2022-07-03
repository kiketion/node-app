import express from 'express';

const app = express();

app.get('/', (req, res) => res.send('Hello Jack!'));

app.listen(3000);
console.log('On port:', 3000);
