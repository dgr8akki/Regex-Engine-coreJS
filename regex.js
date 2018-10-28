function isEquals (pattern, text) {
  if (!pattern) {
    return true;  // Any text matches with empty pattern
  }

  if (!text) {
    return false; // If pattern is defined, text can't be empty
  }

  if (pattern === ".") {
    return true; //Any text will satisfy (.) as pattern
  }

  return pattern === text;
}

function match(pattern, text) {
  if (pattern === "") {
    return true
  } else if (pattern === "$" && text === "") {
    return true
  } else if (pattern[1] === "?") {
    return matchQuestion(pattern, text)
  } else if (pattern[1] === "*") {
    return matchStar(pattern, text)
  }

  return isEquals(pattern[0], text[0])
  && match(pattern.slice(1), text.slice(1))
}

function search(pattern, text) {
  if (pattern[0] === "^") {
    return match(pattern.slice(1), text)
  }

  return match(".*" + pattern, text)
}

function matchQuestion(pattern, text) {
  return (
    (isEquals(pattern[0], text[0]) && match(pattern.slice(2), text.slice(1))) ||
    match(pattern.slice(2), text)
  );
}

function matchStar(pattern, text) {
  return (isEquals(pattern[0], text[0]) && match(pattern, text.slice(1))) || match(pattern.slice(2), text);
}
