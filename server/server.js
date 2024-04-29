const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: ['http://localhost:4343'], // Allowing requests from this origin
    methods: ['POST', 'GET'], // Specifying allowed HTTP methods
    credentials: true, // Enabling credentials (such as cookies)
    allowedHeaders: 'Authorization,Content-Type', // Allowing specific headers
}));


app.get('/api/test', (req, res) => {
    console.log("Test123");
    res.json("success")
});

app.listen(3000, () => {
    console.log(`Server is running on http://localhost:3000`);
});
