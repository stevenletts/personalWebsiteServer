const nodemailer = require("nodemailer");

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.SECRET,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

const sendMail = (req, res) => {
  const subject = req.body.subject;
  const email = req.body.email;
  const message = req.body.message;
  const mail = {
    from: email,
    to: process.env.EMAIL,
    subject: subject,
    html: `<
                 <p>Email: ${email}</p>
                 <p>Message: ${message}</p>`,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
};

module.exports = sendMail;
