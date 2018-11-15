const coffeeController = require('../controllers/coffeeController');

module.exports = function coffeeRoute(app) {
  app.route('/api/coffee').post(coffeeController.update_coffee_time);

  app.route('/api/coffee').get(coffeeController.get_coffee_time);
};
