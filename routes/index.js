const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Hello World! I am Erick Orellana');
});

router.use('/users', require('./users'));

module.exports = router;