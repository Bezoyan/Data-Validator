const Validator = require('./Validator');

module.exports = class EmailValidator extends Validator
{

  isEmail(email)
  {

    if(!email)
    return false;
    
	let EmailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(EmailRegExp.test(email))
      return true;
      else
		return false;

    }
}
