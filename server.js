const express = require('express');

const apiRoutes = require('./routes/apiroutes.js');
const htmlRoutes = require('./routes/htmlroutes.js');
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static('public'));

// GET Route for homepage
app.use('/', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
