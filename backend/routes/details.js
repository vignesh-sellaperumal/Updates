const router = require('express').Router();
let Details =  require('../models/details.model');

router.route('/').get((req, res) => {
    Details.find()
        .then(details => res.json(details))
        .catch(err => res.status(400).json('Error: '+err));
});

router.route('/add').post((req,res) => {
    const email = req.body.email;
    const username = req.body.username;
    const about = req.body.about;
    const password = req.body.password;

    const newUser = new Details({email, username, about, password});

    newUser.save() 
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: '+err));
});

module.exports = router;