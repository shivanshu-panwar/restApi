var express = require('express');
var app = express();
var bodyparser=require('body-parser');
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
var student = require('./routes/student');

app.use('/student',student);
app.get('/', function(req,res) {
    res.send('Welcome to nodejs api express server');
});

// app.listen(process.env.port || 3000, function(error) {
//     if(error)
//     console.log(error);

//     console.log('Running server on port 3000');
// });

//second way
// app.listen(process.env.port || 3000, async (error) => {
//     if(error) {
//         console.log(error);
//     }

//     console.log('Running server on port 3000');
// });

const port = process.env.PORT || 3000;

app.listen(port, async () => {
    try {
        console.log('Running server on port 3000');
    } catch (error) {
        console.log(error);
    }
});