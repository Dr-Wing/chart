const express = require('express');
const app = express();
const config = require('../env.config.js');
const PORT = config.PORT;
const controller = require('../controller/index.js');
const cors = require('cors');

app.use(cors());
app.use(express.static('client/dist'));
app.use(express.static('client/public'));

app.get('/price/:ticker', controller.getTicker);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));