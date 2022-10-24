const app = require('./config/express');
const { port } = require('./config/vars');
const mongoose = require('mongoose');
const config = require('./db');
const authroutes = require('./api/routes/auth');
const v1routes = require('./api/routes/v1')
    // listen to requests
if (!module.parent) {
    mongoose.connect(config.DB, { useNewUrlParser: true }).then(
        () => { console.log('Database is connected') },
        err => { console.log('Can not connect to the database' + err) }
    );
    app.use('/auth', authroutes);
    app.use('/v1', v1routes);
    app.listen(port, () => console.info(`Server started on port ${port }`));
}

module.exports = app;