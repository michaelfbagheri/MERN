const express = require('express');
const router = express.Router();
const mongoControllers = require('./../controllers');

router.get('/posts', mongoControllers.read)


//router.route('/create').post(mongoControllers.create);

//router.route('/update').put(mongoControllers.update);


//router.route('/update').delete(mongoControllers.delete);


module.exports = router;


