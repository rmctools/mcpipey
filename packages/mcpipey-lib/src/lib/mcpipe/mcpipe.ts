/**
 * Type definition of a pipe function.
 */
export type McPipeFn<T = any> = (data: T) => T;

/**
 * Easy pipeline runner that allows modification of an input with multiple
 * filter-like functions to produce and end result through steps.
 */
export function mcPipe<T = any>(...pipeline: Array<McPipeFn<T>>) {
  if (arguments.length === 0) {
    pipeline = [(val: T) => val];
  }

  return pipeline.reduce(function pipeReducer(f, g) {
    return function (arg: T) {
      return g(f(arg));
    }
  })
}
