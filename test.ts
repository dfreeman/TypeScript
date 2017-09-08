/* tslint:disable */
/// <reference path="./built/local/lib.esnext.d.ts" />

class Wrapped<T> {
  constructor(private value: T) {

  }

  private unwrap(): T {
    return this.value;
  }

  static async go(f: () => Iterator<any> & YieldSignature<(<T>(wrapped: Wrapped<T>) => T)>) {
    for (
      let stepResult: IteratorResult<Wrapped<any>>, unwrapped, iterator = f();
      stepResult = await iterator.next(unwrapped), !stepResult.done;
      unwrapped = stepResult.value.unwrap()
    );
  }
}

Wrapped.go(function*() {
  // let unwrapped = yield* (async function* () { yield new Wrapped(5); })();
  let unwrapped = yield* [new Wrapped(5)];
  console.log(unwrapped.indexOf('hello'));
});

