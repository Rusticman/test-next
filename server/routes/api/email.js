const MailChimp = require('./../../services/mailchimp');

module.exports = async function submitEmail(req, res) {
  const { email } = req.body;

  // basic email validations
  if (
    !email ||
    email.length < 4 ||
    email.length > 250 ||
    !email.includes('@') ||
    !email.includes('.')
  ) {
    return res.status(400).send({ message: 'Invalid email address.' });
  }

  const [fail] = await A2A(MailChimp.addToList(email));

  if (fail) {
    let { response: { data: { detail: message } } } = fail;

    if (message.includes('is already a list member')) {
      message = `${email} is already subscribed.`;
    }

    return res.status(400).send({ message });
  }

  return res.send({ message: 'ok' });
};
