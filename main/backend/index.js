const app = require('./config/express');
const { port } = require('./config/vars');
const mongoose = require('mongoose');
const config = require('./db');
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
    () => { console.log('Database is connected') },
    err => { console.log('Can not connect to the database' + err) }
);
// listen to requests
if (!module.parent) {
    app.listen(port, () => console.info(`Server started on port ${port }`));
}

module.exports = app;