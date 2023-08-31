// Endpoint for querying the fibonacci numbers
import fibonacci from "./fib";
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

export default (req, res) => {
  const { num } = req.params;

  const fibN = fibonacci(parseInt(num));
  let result = `fibonacci(${num}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  }

  res.send(result);
};
