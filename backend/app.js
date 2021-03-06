const express = require('express');
const cors = require('cors');
const adminRoute = require('./routes/admin');

const app = express();
app.use(cors());

app.use(express.urlencoded({ extended: false }));

app.use('/', adminRoute);

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server running on port ${port}, http://localhost:${port}`));