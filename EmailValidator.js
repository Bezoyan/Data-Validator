const Validator = require('./Validator');

module.exports = class EmailValidator extends Validator
{

  isEmail(email)
  {

    if(!email)
    {
      console.log('Please input email address');
    }
    let EmailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(EmailRegExp.test(email))
      {
        console.log('Email addres is true');
      }
      else
      {
        console.log('This email is invalid');
      }

    }
}
