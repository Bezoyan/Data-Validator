const Validator = require ('./Validator');
module.exports = class URLValidator extends Validator
{
  isURL(url)
  {
    if(!url)
      return false;

      let urlRegExp = /^((http[s]?|ftp):\/)?\/?([^:\/\s]+)((\/\w+)*\/)([\w\-\.]+[^#?\s]+)(.*)?(#[\w\-]+)?$/;
      
	  if(urlRegExp.test(url))
        return true;
      else
		return false;


  }
}
