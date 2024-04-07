const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Connected to Mongodb Atlas');
    } catch (error) {
        console.error(error);
    }
}
connectToDB()

const usersRouter = require('./routes/user.routes.js');
app.use('/users', usersRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port localhost:${PORT}`);
});
