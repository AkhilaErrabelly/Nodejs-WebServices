// In Express, routes are wrapped in a function, which
//takes the Express instance and a database as arguments.
//step1
module.exports = function(app, db) {
    const collection = 
    app.post('/notes', (req, res) => {
      const note = { text: req.body.body, title: req.body.title };
      db.collection('notes').insert(note, (err, result) => {
        if (err) { 
          res.send({ 'error': 'An error has occurred' }); 
        } else {
          res.send(result.ops[0]);
        }
      });
    });
  };
//You can then export this function through your index.js: