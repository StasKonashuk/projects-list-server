const express = require('express');
const cors = require('cors');
const rootRouter = require('./routes');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api', rootRouter);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
