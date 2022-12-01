import express from 'express';
import minimist from 'minimist';
import Database from 'better-sqlite3';
import path from 'path';
import {fileURLToPath} from 'url';

// Args
const args = minimist(process.argv.slice(2));

// Set port
const port = args.port || 2000;

/* Create database
const db = new Database('data.db');
db.pragma('journal_mode = WAL');

// Initialize database
const sqlInit = `CREATE TABLE users ( id INTEGER PRIMARY KEY AUTOINCREMENT, user VARCHAR, pass VARCHAR );`
try {
    db.exec(sqlInit);
} catch (error) {
    console.log(error);
}

const sqlInit2 = 'CREATE TABLE entry_log (date INTEGER PRIMARY KEY, intensity TEXT NOT NULL, feeling TEXT NOT NULL)'
try {
    db.exec(sqlInit);
} catch (error) {
    console.log(error);
}*/

// Initialize app
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Link with html/css
app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.render('homepage')
})

app.get('/login', (req, res) => {
    res.render('login')
})

// Post 404 if no endpoint found
app.get('*', (req, res) => {
    res.status(404).send('404 NOT FOUND')
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});