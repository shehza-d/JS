let regx;
regx = /hello/;
regx = /hello/i;

// console.log(regx);
// console.log(regx.source);
// console.log(regx.source);

//exec() = return result in arr or null
const result = regx.exec("shehzad hello world");

//replace - return new string with some or all matches of a pattern
const str = "Hello there";
const newStr = str.replace(regx, "Assalam o alaikum");
// console.log(newStr);

//vidoe//
let re;
// Literal Characters
re = /hello/;
re = /hello/i;

// Metacharacter Symbols
re = /^h/i; // Must start with
re = / world$/i; // Must ends with
re = /^hello$/i; // Must begin and end with
re = /h.llo/i; // Matches any ONE character
re = /h*llo/i; // Matches any character 0 or more times
re = /gre?a?y/i; // Optional character
re = /gre?a?y\?/i; // Escape character

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
//vidoe//
