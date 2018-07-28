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