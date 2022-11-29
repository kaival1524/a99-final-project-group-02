import express from 'express';
import Database from 'better-sqlite3';

// Create database
const db = new Database('user-data.db');
db.pragma('journal_mode = WAL');

// Initialize database
const sqlInit = 'CREATE TABLE entry_log (date INTEGER PRIMARY KEY, intensity TEXT NOT NULL, feeling TEXT NOT NULL)'
try {
    db.exec(sqlInit);
} catch (error) {
    console.log(error);
}

// Initialize app
const app = express()

// Default endpoint
app.get('/app', (req, res) => {
    res.status(200).send('200 OK')
})

// Post 404 if no endpoint found
app.get('*', (req, res) => {
    res.status(404).send('404 NOT FOUND')
})

app.listen(2000, () => {
    console.log('Server listening on port 2000');
});