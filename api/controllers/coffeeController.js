const db = require('../db');

exports.update_coffee_time = function updateCoffeeTime(req, res) {
  db.query('insert into coffee_time (time) values (to_timestamp($1::double precision / 1000))',
    [Date.now()])
    .catch(() => {
    //   res.send('Error xD go fix backend pls');
    }).then(() => {
      res.send('Well done yo, it worked');
    });
};

exports.get_coffee_time = async function getCoffeeTime(req, res) {
  const { rows } = await db.query('select * from coffee_time order by time desc nulls last');
  console.log(rows[0]);
  res.json(rows[0].time);
};
