import express from 'express';
import minimist from 'minimist';
import Database from 'better-sqlite3';

// Args
const args = minimist(process.argv.slice(2));

// Get port from args or set to default 2000
const port = args.port || 2000;

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

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});