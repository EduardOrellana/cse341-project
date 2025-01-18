const express = require('express');
const mongodb = require('./data/database');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/', require('./routes/index'));

mongodb.initDb((err) => {
    if (err) {
        console.log(err);
        //process.exit(1);
    } else {
        app.listen(port, () => {
            console.log(`Dabase and Server is running on http://localhost:${port}`);
        });
    }
});

// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });