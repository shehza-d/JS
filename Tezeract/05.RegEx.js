let regx;
regx = /hello/;
regx = /hello/i;

console.log(regx);
console.log(regx.source);
// console.log(regx.source);

//exec() = return result in arr or null
const result = regx.exec("shehzad hello world");

//replace - return new string with some or all matches of a pattern
const str = "Hello there";
const newStr = str.replace(regx, "Assalam o alaikum");
console.log(newStr);

//video//
let re;
// Literal Characters
re = /hello/;
re = /hello/i;

// Match character Symbols
re = /^h/i; // Must start with
re = / world$/i; // Must ends with
re = /^hello$/i; // Must begin and end with
re = /h.llo/i; // Matches any ONE character
re = /h*llo/i; // Matches any character 0 or more times
re = /gre?a?y/i; // Optional character
re = /gre?a?y\?/i; // Escape character

// Brackets [] - Character Sets
re = /gr[ae]y/i; // Must be an a or e
re = /[GF]ray/i; // Must be a G or F
re = /[^GF]ray/i; // Match anything except a G or F
re = /[A-Z]ray/; // Match any uppercase letter
re = /[a-z]ray/; // Match any lowercase letter
re = /[A-Za-z]ray/; // Match any  letter
re = /[0-9][0-9]ray/; // Match any digit

// Braces {} - Quantifiers
re = /Hel{2}o/i; // Must occur exactly {m} amount of times
re = /Hel{2,4}o/i; // Must occur exactly {m} amount of times
re = /Hel{2,}o/i; // Must occur at least {m} times

// Parentheses () - Grouping
re = /^([0-9]x){3}$/;

// Shorthand Character Classes
re = /\w/; // Word character - alphanumeric or _
re = /\w+/; // + = one or more
re = /\W/; // Non-Word character
re = /\d/; // Match any digit
re = /\d+/; // Match any digit 0 or more times
re = /\D/; // Match any Non-digit
re = /\s/; // Match whitespace char
re = /\S/; // Match non-whitespace char
re = /Hell\b/i; // Word boundary
re = /Hell/i; // Word boundary

// Assertions
re = /x(?=y)/; // Match x only if followed by y
re = /x(?!y)/; // Match x only if NOT followed by y

// String to match
const str = "Gray?";

// Log Results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does NOT match ${re.source}`);
  }
}

reTest(re, str);
//video//

// regx for name = /^[a-zA-Z]{2,10}$/;
const regex_for_email =
  /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
