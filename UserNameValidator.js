const Validator = require('./Validator');
module.exports = class UserNameValidator extends Validator
{
  isUserName(username)
  {

   if(!username)
     {
       console.log('please input Username');
     }

   let UserName_RegExp = /^[\w+_-]{4,24}$/;
   if(UserName_RegExp.test(username) &&  this.isString(username))
     return true;

     else { console.log('Username not exist')}

 }
}
