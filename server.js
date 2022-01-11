require('dotenv').config();
const express = require('express');
const cors = require('cors');
const rootRouter = require('./routes');
const db = require('./db/db');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api', rootRouter);

app.listen(PORT, async () => {
  try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
    console.log(`Server started on port ${PORT}`);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});
