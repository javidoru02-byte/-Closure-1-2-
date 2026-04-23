/**
 * Створює функцію-логер із заданим префіксом.
 * @param {string} prefix - Префікс, який додається перед кожним повідомленням.
 * @returns {function(string): string} Функція, яка приймає повідомлення і повертає його з префіксом.
 */
function createLogger(prefix) {
  /**
   * Логує повідомлення з префіксом.
   * @param {string} message - Повідомлення для логування.
   * @returns {string} Повідомлення з доданим префіксом.
   */
  return function (message) {
    return prefix + message;
  };
}

const authLogger = createLogger("AUTH: ");

console.log(authLogger(`User logged in`));

/**
 * Створює функцію-лімітер, яку можна викликати обмежену кількість разів.
 * @param {number} limit - Максимальна кількість викликів поверненої функції. Має бути числом і не NaN.
 * @returns {function(): string} Функція, що повертає "Ok" поки ліміт не вичерпано, "Error" після перевищення або якщо ліміт невалідний.
 */
function createLimiter(limit) {
  let step = 0;

  /**
   * Викликає функцію-лімітер.
   * @returns {"Ok"|"Error"} "Ok" якщо ліміт не вичерпано, "Error" якщо ліміт перевищено або введено не праильне значення.
   */
  return function () {
    if (Number.isNaN(limit)) {
      return "Error";
    }

    if (typeof limit === "number" && limit >= 0) {
      if (step < limit) {
        ++step;
        return "Ok";
      }
      return "Error";
    }
    return "Error";
  };
}

const limited = createLimiter(3);

console.log(limited());
console.log(limited());
console.log(limited());
console.log(limited());
