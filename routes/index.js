const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Hello World! I am a Node.js app running on a Docker container!');
});

module.exports = router;