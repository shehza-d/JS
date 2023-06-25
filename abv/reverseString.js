/* Without using Built-In-Function*/

function reverseString(string) {
  var reversedString = "";
  var stringLength = string.length - 1;
  for (var i = stringLength; i >= 0; i--) {
    reversedString += string[i];
  }
  return reversedString;
}

Out: reverseString("MyNameisdileep");
("peelidsiemaNyM");

/*Using Built-In-Function*/
function reverseString(s) {
  return s.split("").reverse().join("");
}

Out: reverseString("hello world");
("dlrow olleh");

function reverseEachWord(s) {
  return s.split(" ").map(reverseString).join(" ");
}

Out: reverseEachWord("hello world");
("olleh dlrow");
