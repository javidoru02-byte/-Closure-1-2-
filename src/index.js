function createLogger(prefix) {
  const PREFIX = prefix;

  return function (massage) {
    const MASSAGE = massage;
    return PREFIX + MASSAGE;
  };
}

const authLogger = createLogger("AUTH: ");

console.log(authLogger(`User logged in`));

function createLimiter(limit) {
  const LIMIT = limit;
  let step = 0;

  return function () {
    if (Number.isNaN(LIMIT)) {
      return 0;
    }

    if (typeof LIMIT === "number" && LIMIT >= 0) {
      if (step < LIMIT) {
        ++step;
        return "Ok";
      }
      return "Error";
    } else {
      return 0;
    }
  };
}

const limited = createLimiter(3);

console.log(limited());
console.log(limited());
console.log(limited());
console.log(limited());

