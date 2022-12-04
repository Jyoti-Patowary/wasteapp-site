const sgMail = require("@sendgrid/mail");

const sendWelcomeEmail = async (email, name) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  try {
    await sgMail.send({
      to: email,
      from: "jpatowary8@gmail.com",
      subject: "Thanks for joining in!",
      text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
      html: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
    });
  } catch (error) {
    console.log(error.message);
  }
};

const sendCancelationEmail = async (email, name) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  try {
    await sgMail.send({
      to: email,
      from: "jpatowary8@gmail.com",
      subject: "Sorry to see you go!",
      text: `Goodbye, ${name}. I hope to see you back sometime soon.`,
    });
  } catch (error) {
    console.log(error.message);
  }
};

const sendAcceptedEmail = async (email, name) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  try {
    await sgMail.send({
      to: email,
      from: "jpatowary8@gmail.com",
      subject: "Request accepted",
      text: `Hi ! ${name}, your request for waste collection from your door-step is make. Please wait till our representator will contact you.`,
    });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail,
  sendAcceptedEmail,
};
