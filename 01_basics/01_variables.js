const accountId = 123456
let accountEmail = "Shivam@google.com"
var accountPassword = "2006"
accountCity = "Samastipur"
let accountState;

// accountId = 7
/* Prefer not to use var
because of issue in block scope and functional scope
*/
accountEmail = "shivam@git.com"
accountPassword = "749296"
accountCity = "Patna"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
