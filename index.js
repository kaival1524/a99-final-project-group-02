import express from 'express';
import minimist from 'minimist';
import Database from 'better-sqlite3';
import path from 'path';
import {fileURLToPath} from 'url';

// Args
const args = minimist(process.argv.slice(2));

// Set port
const port = args.port || 5000;

// Create database
const db = new Database('data.db');
db.pragma('journal_mode = WAL');

// Initialize app
const app = express();
 
// link stylesheet to the right folder
app.use(express.static("public"))
app.set('view engine', 'ejs');
app.set('views', path.join(path.dirname(fileURLToPath(import.meta.url)), 'views'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Initialize database
try {
    db.exec(`CREATE TABLE users (id INTEGER PRIMARY KEY AUTOINCREMENT, user VARCHAR, pass VARCHAR);`);
} catch (error) {}

try {
    db.exec(`CREATE TABLE fitness (id INTEGER PRIMARY KEY AUTOINCREMENT, user VARCHAR, time VARCHAR, type VARCHAR, date VARCHAR);`);
} catch (error) {}

try {
    db.exec(`CREATE TABLE log (id INTEGER PRIMARY KEY AUTOINCREMENT, user VARCHAR, type VARCHAR, date VARCHAR);`);
} catch (error) {}


// Endpoints For Rendering Pages and Buttons
app.get('/', (req, res) => {
    res.render('login');
});

app.post('/login', (req, res) => {
    res.render('login')
});

app.get('/home', (req, res) => {
    res.render('home')
});

app.post('/enterLogin', (req, res) => {
    const userName = req.body.username;
    const passWord = req.body.password; 
    const prepData = db.prepare(`SELECT * FROM users WHERE user = '${userName}' and pass = '${passWord}'`);
    let temp = prepData.get();

    /*const stmt = db.prepare(`SELECT * FROM users`);
    let all = stmt.all();
    res.render('fitness-logs', {user: all});*/

    const time = new Date(Date.now());
    db.exec(`INSERT INTO log (user, type, date) VALUES ('${userName}', 'Login', '${time.toISOString()}');`);

    if (temp === undefined) {
        res.render('userName-incorrect2');
    }
    else {
        req.app.set('user', userName);
        res.render('home');
    };
});

app.post('/createAccount', (req, res) => {
    const userName = req.body.username;
    const passWord = req.body.password; 
    const prepData = db.prepare(`SELECT * FROM users WHERE user = '${userName}'`);
    let temp = prepData.get();

    if (temp === undefined) {
        db.exec(`INSERT INTO users (user, pass) VALUES ('${userName}', '${passWord}')`)
        res.render('create-account');
    }
    else {res.render('userName-exists')};
 });

app.post('/returnLogin', (req, res) => {
    res.render('login');
});

app.post('/NewFitnessInfo', (req, res) => {
    res.render('new-fitness-info');
});

app.post('/enterWorkout', (req, res) => {
    res.render('entry-success');
});

app.post('/returnHome', (req, res) => {
    res.render('home');
});

app.post('/DeleteAcntPg', (req, res) => {
    res.render('delete-account');
});

app.post('/logout', (req, res) => {
    res.render('login');
});

app.post('/viewLogs', (req, res) => {
    const stmt = db.prepare(`SELECT * FROM log`);
    let all = stmt.all();
    res.render('user-logs', {log: all});
});

// Function to display data
    

// app.post('/createaccount', (req, res) => {
//     const userName = req.body.username;
//     const passWord = req.body.password;
//     const accountCreationTime = new Date(Date.now());

//     // SQL query to add to database

//     // if username exists, render 'username exists, try another username' button for returning to login
//     // if valid username, render 'success, account is created' button for returning to login
// });

// app.get('/deleteaccount', (req, res) => {
//     const accountDeletionTime = new Date(Date.now());
    
//     // SQL query to remove from database

//     // render delete account page, button for returning to login
// });

// app.post('/login', (req, res) => {
//     const userName = req.body.username;
//     const passWord = req.body.password;
//     const logInTime = new Date(Date.now());

//     // SQL query to store login times

//     // if unsuccessful login, render 'incorrect username or password', button for returning to login
//     // else render homepage (uncomment line below)
//     // res.render('homepage');

// });

// app.get('/logout', (req, res) => {
//     const logOutTime = new Date(Date.now());

//     // SQL query to store logout times
    
//     // render login page (uncomment line below)
//     // res.render('login')

// });

// app.post('/fitnesslog', (req, res) => {
//     const time = req.body.exercisetime;
//     const type = req.body.workoutype;
//     const exerciseLogTime = new Date(Date.now());
    
//     // SQL query to store fitness information
// });

// app.get('/pastfitness', (req, res) => {

// });

// Post 404 if no endpoint found
app.get('*', (req, res) => {
    res.status(404).send('404 NOT FOUND')
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});