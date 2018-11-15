const db = require('../db');

exports.update_coffee_time = function updateCoffeeTime(req, res) {
  db.query('insert into coffee_time (time) values ($1)',
    [Date.now()]).catch(() => {
    res.send('Error xD go fix backend pls');
  }).then(() => {
    res.send('Well done yo, it worked');
  });
};

exports.get_coffee_time = function getCoffeeTime(req, res) {
  const rows = db.query('select * from coffee_time order by time desc nulls last');
  res.send(rows);
};
