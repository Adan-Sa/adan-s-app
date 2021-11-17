const express = require('express');
const app = express();
const router = require("./router");
const cors = require('cors');

const PORT = process.env.PORT || 3000;

app.use(cors("cors"));
app.use(express.json());
app.use(router);


app.listen(PORT, () =>
    console.log(`Server listening on http://localhost:${PORT}`))


