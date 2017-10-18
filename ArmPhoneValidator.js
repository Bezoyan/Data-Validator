const Validator = require('./Validator');
module.exports = class ArmPhoneValidator extends Validator
{
  isArmPhoneNumber(Phone_N)
{

    if(!Phone_N)
      {
        console.log('please input phone number');
      }

    let Phone_RegExp = /^(099\d{6}|091\d{6}|098\d{6}|094\d{6}|093\d{6}|077\d{6}|055\d{6}|095\d{6}|044\d{6}|043\d{6}|041\d{6}|010\d{6}|[+]374\d{8}|[+]37410\d{6})$/;
    if(Phone_RegExp.test(Phone_N) && this.isNumber(Phone_N))
      return true;

    else
    {
      console.log('phone number not exist');
    }

  }
}
