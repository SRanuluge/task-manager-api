const { CourierClient } = require("@trycourier/courier");
const courier = CourierClient({
  authorizationToken: process.env.SENDGRID_API_KEY,
});

const sendWelcomeEmail = async (email, name) => {
  const { requestId } = await courier.send({
    message: {
      to: {
        email: email,
      },
      content: {
        title: "Welcome!",
        body: `Thanks for signing up, ${name}`,
      },
      data: {
        name: name,
      },
      routing: {
        method: "single",
        channels: ["email"],
      },
    },
  });
};

const sendCancelEmail = async (email, name) => {
  const { requestId } = await courier.send({
    message: {
      to: {
        email: email,
      },
      content: {
        title: "Sorry to see you go!",
        body: `Goodbye, ${name}. I hope to see you back sometime soon.`,
      },
      data: {
        name: name,
      },
      routing: {
        method: "single",
        channels: ["email"],
      },
    },
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelEmail,
};
