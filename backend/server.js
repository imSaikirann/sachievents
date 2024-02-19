const express = require('express');
const crypto = require('crypto');
const bodyParser = require('body-parser');
const nodeMailer = require('nodemailer');
const app = express();

app.use(bodyParser.json());

/* Function to send email
const sendEmail = (to, subject, text) => {
  const transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
      user: "neelakantamsaikiran1@gmai.com",
      pass: "fvdj jyuc nlqr gwsw",
    },
  });

  const mailOptions = {
    from: "neelakantamsaikiran1@gmai.com",
    to: to,
    subject: subject,
    text: text,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};
*/

app.post('/generateUniqueNumber', (req, res) => {
  const data = req.body;
  const uniqueNumber = crypto.randomBytes(3).toString('hex').toUpperCase();
  console.log(`Received Email: ${data.email}`);

  //sendEmail(data.email, 'Hi', `Hello, this is your unique number: ${uniqueNumber}`);

  res.json({ uniqueNumber, email: data.email });
});

app.listen(4000, () => {
  console.log('Server started at http://localhost:3000');
  console.log('Server Started!');
}); 
