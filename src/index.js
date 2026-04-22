function createLogger(prefix) {
  const PREFIX = prefix;

  return function (massage) {
    const MASSAGE = massage;
    return PREFIX + MASSAGE;
  };
}

const authLogger = createLogger("AUTH: ");

console.log(authLogger(`User logged in`));
