// Endpoint for querying the fibonacci numbers
import fibonacci from "./fib";

export default (req: any, res: any) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { num } = req.params;

  const fibN = fibonacci(parseInt(num));
  let result: string = `fibonacci(${num}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  }

  res.send(result);
};
