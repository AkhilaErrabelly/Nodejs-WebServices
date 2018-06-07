//u can then export this function through your index.js:
//step2
const noteRoutes = require('./note_routes');

module.exports = function (app, db) {
    noteRoutes(app, db);
    //0therroute groups could go here, in the future
};

