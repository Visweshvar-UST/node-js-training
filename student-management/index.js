const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const studentRoutes = require('./routes/studentRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/studentManagement',{
    userNewUrlParser: true,
    userUnifiedTopology: true,
})
.then(() => console.log('mongoDB connected'))
.catch(err => console.log(err));

app.use('/api/v1/students',studentRoutes);

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});