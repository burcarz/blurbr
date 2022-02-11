const express = require('express');
const mongoose = require('mongoose');

// create app and PORT vars
const app = express();
const PORT = process.env.PORT || 3001;

// establish data formats
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// establish connection to routes folder
app.use(require('./routes'))

// establish connection to mongo db
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/blurbr', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.set('debug', true);

// establish server connection
app.listen(PORT, () => console.log(`connected to local host: ${PORT}`));