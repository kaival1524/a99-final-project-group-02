import express from 'express';
import Database from 'better-sqlite3';

// Create database
const db = new Database('user-data.db');
db.pragma('journal_mode = WAL');

const sqlInit = 'CREATE TABLE entry_log (date INTEGER PRIMARY KEY, intensity TEXT NOT NULL, feeling TEXT NOT NULL)'
try {
    db.exec(sqlInit);
} catch (error) {
    console.log(error);
}

// Initialize app
const app = express()


app.listen(2000, () => {
    console.log('Server listening on port 2000');
});