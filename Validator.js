class Validator
{
  //check is string
  isString(str)
  {
    let reg = new RegExp("^([a-z0-9]{5,})$");
    if (reg.test(str))
		return true;
    else
		return false;
  }
  //check is number
  isNumber(num)
  {
    let numberRegExp = /^[+-]?(([0-9])+([.][0-9]*)?|[.][0-9]+)$/;
    if(!numberRegExp.test(num))
		return false;
  }

  //check is integer
  isInt(num)
  {
    let intRegex = /^\d+$/;
    if(!intRegex.test(num))
		return false;
  }

  //check is float number
  isFloat(num)
  {
    let floatRegex = /^-?\d*(\.\d+)?$/;
    if (!floatRegex.test(num))
		return false;

  }
  
  
   //check is date
   isDate(date)
  {

  let dateRegex = /^\d{2}[./-]\d{2}[./-]\d{4}$/;
    if(!dateRegex.test(date));
		return false;
  }

  
  //check is special symbol
  isSpecialSymbol(sym)
  {

    let symbolRegExp = /^[!@#\$%\^\&*\)\(+=~._-]+$/;
    if(!symbolRegExp.test(sym))
		return false;

  }
}
module.exports = Validator;
