if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express');
const cors = require('cors');

const ToDoRouter = require('./routes/task.routes');

const Connect = require('./connections/mongoose');

const app = express();

app.use(express.json());
app.use(cors());

const db_url = process.env.DB_URL;
const db_user = process.env.DB_USER;
const db_pass = process.env.DB_PASS;
const db_data = process.env.DB_DATA;

Connect(db_url, db_user, db_pass, db_data);

app.use('/', ToDoRouter);

const port = 3002;

app.listen(process.env.PORT || port, () => {
  console.log(`Server running at http://localhost:${port}`);
});