const router = require('express').Router();

router.use('/', require('./swagger'));

router.get('/', (req, res) => {
    //#swagger.tags = ['Hello World']
    res.send('Hello World! I am Erick Orellana');
});

router.use('/users', require('./users'));

module.exports = router;