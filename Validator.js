class Validator
{

  isString(str)
  {
    let reg = new RegExp("^([a-z0-9]{5,})$");
    if (reg.test(str))
    {
    console.log("Valid");
    }
    else
    {
    console.log("Invalid");
    }
  }

  isNumber(num)
  {
    let numberRegExp = /^[+-]?(([0-9])+([.][0-9]*)?|[.][0-9]+)$/;
    if(!numberRegExp.test(num))
    {
    console.log('it is not number');
    }
  }


  isInt(num)
  {
    let intRegex = /^\d+$/;
    if(!intRegex.test(num))
    {
      console.log('must be an integer:');
    }
  }

  isFloat(num)
  {
    let floatRegex = /^-?\d*(\.\d+)?$/;
    if (!floatRegex.test(num))
    {
     console.log('must be an float Number');
    }

  }

   isDate(date)
  {

  let dateRegex = /^\d{2}[./-]\d{2}[./-]\d{4}$/;
    if(!dateRegex.test(date));
    {
      console.log("date error");
    }
  }

  isSpecialSymbol(sym)
  {

    let symbolRegExp = /^[!@#\$%\^\&*\)\(+=~._-]+$/;
    if(!symbolRegExp.test(sym))
    {
      console.log ('symbol error');
    }

  }
}
module.exports = Validator;
