import express from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));
console.log(join(__dirname, 'pages'));

app.set('views', join(__dirname, 'pages'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('index'));

app.get('/about', (req, res) => res.render('about'));

app.get('/contact', (req, res) => res.render('contact'));

app.listen(3000);
console.log('On port:', 3000);
