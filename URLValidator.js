const Validator = require ('./Validator');
module.exports = class URLValidator extends Validator
{
  isURL(url)
  {
    if(!url)
      {
        console.log("NOT URL");
      }

      let urlRegExp = /^((http[s]?|ftp):\/)?\/?([^:\/\s]+)((\/\w+)*\/)([\w\-\.]+[^#?\s]+)(.*)?(#[\w\-]+)?$/;
      if(urlRegExp.test(url))
        return true;
      else
      {
        console.log('invalid URL');
      }




  }
}
