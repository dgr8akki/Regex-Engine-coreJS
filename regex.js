function isEquals (pattern, text) {
  if (!pattern) {
    return true;  //Any text matches with empty pattern
  }

  if (!text) {
    return false; //If pattern is defined, Text can't be empty
  }

  if (pattern === ".") {
    return true; //Any text will satisfy (.) as pattern
  }

  return pattern === text;
}

function match(pattern, text) {
  if (pattern === "") {
    return true // Our base case - if the pattern is empty, any inputted text is a match
  }

  return isEquals(pattern[0], text[0])
  && match(pattern.slice(1), text.slice(1))
}
