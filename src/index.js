/**
 * Створює функцію-логер із заданим префіксом.
 * @param {string} prefix - Префікс, який додається перед кожним повідомленням.
 * @returns {function(string): string} Функція, яка приймає повідомлення і повертає його з префіксом.
 */
function createLogger(prefix) {
  const PREFIX = prefix;

  /**
   * Логує повідомлення з префіксом.
   * @param {string} message - Повідомлення для логування.
   * @returns {string} Повідомлення з доданим префіксом.
   */
  return function (message) {
    const MESSAGE = message;
    return PREFIX + MESSAGE;
  };
}

const authLogger = createLogger("AUTH: ");

console.log(authLogger(`User logged in`));

/**
 * Створює функцію-лімітер, яку можна викликати обмежену кількість разів.
 * @param {number} limit - Максимальна кількість викликів поверненої функції. Має бути числом і не NaN.
 * @returns {function(): string|number} Функція, що повертає "Ok" поки ліміт не вичерпано, "Error" після перевищення, або 0 якщо ліміт невалідний.
 */
function createLimiter(limit) {
  const LIMIT = limit;
  let step = 0;

  /**
   * Викликає функцію-лімітер.
   * @returns {"Ok"|"Error"|0} "Ok" якщо ліміт не вичерпано, "Error" якщо ліміт перевищено, 0 якщо ліміт невалідний.
   */
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
