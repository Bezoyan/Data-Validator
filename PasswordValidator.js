const Validator = require ('./Validator');
module.exports = class PasswordValidator extends Validator
{
  isPassword(pas)
  {
    if(!pas)
      {
        console.log('please input password');
      }

    let Pass_RegExp = /^[\w+_-]{6,20}$/;
    let Not_PassRegExp = /^(\w+)?(password)(\w+)?$/i;
    if(Pass_RegExp.test(pas) && !Not_PassRegExp.test(pas))
      return true;
    else
    {
      console.log('The password not exist');
    }
  }
}
