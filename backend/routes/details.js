const router = require('express').Router();
let Details =  require('../models/details.model');
const nodemailer = require('nodemailer');
const date = new Date();
const message = date.getTime().toString().substring(3,7);

router.route('/').get((req, res) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'vickymusiri6@gmail.com',
          pass: 'vignesh456'
        }
      });
      var mailOptions = {
        from: 'vickymusiri6@gmail.com',
        to: 'ervignesh456@gmail.com',
        subject: 'One Time Password',
        text: message
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
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