// import { TemplateEntity, invoke, Yields, prepare, toBlock, tpl } from 'ember-titan';

  declare const Each: TemplateEntity<<T>(named: { key?: string }, array: T[]) => (blocks: { default(item: T, index: number): unknown }) => void>;

// let x = invoke(prepare(Each), {}, ['a', 'b', 'c'])({
//   *default(item, index) {
//     yield toBlock('item', item, index);
//     yield toBlock('index', index);
//   }
// });
import { TemplateEntity, toBlock, invoke, prepare, tpl } from 'ember-titan';

// let z = __tpl__(function*(__ctx__) {
//   yield "what";
// });

let x = {{#}}
  {{yield 'ok'}}
{{/}};

// let y: TemplateEntity<(named: {}) => (blocks: {}) => void> = tpl(function*(args) {
//   yield 'hello';
// });

console.log(x);

let t = tpl(function*({ args }: { args: { a: string } }) {
  yield toBlock('ok', args.a);
  yield invoke(prepare(Each), {}, [true, false, true])({
    *default(item, index) {
      yield toBlock('ok', item, index);
    }
  }).yields;
});

// invoke(prepare(t), { a: 'ok neat' })({
//   *ok(...params): IterableIterator<unknown> {

//   }
// }).yields

// let r = invoke(prepare(t), { a: 'lets go' })({
//   *ok(...params) {
//     let [value] = params;
//     if (typeof value === 'string') {
//       yield toBlock('string', value);
//     } else if (typeof value === 'boolean') {
//       yield toBlock('boolean', value);
//     }
//   }
// });

// type Assign<T, U> = Omit<T, keyof U> & U;
// declare function invokeCurried<
//   Named,
//   Positional extends any[],
//   Blocks extends Record<string, (...args: any[]) => any>,
//   Result,
//   Curried
// >(
//   signature: (args: Assign<Curried, Named>, ...positional: Positional) => (blocks: Blocks) => Result,
//   args: Named,
//   curried: Curried,
//   ...positional: Positional
// ): <BlockImpls extends Blocks>(blocks?: Partial<BlockImpls>) => { value: Result; yields: Yields<BlockImpls> };

// declare const ManyNamed: TemplateEntity<<T>(args: { items: T[], other: T }) => (blocks: { default(allItems: T[]): unknown }) => void>;

// invokeCurried(prepare(ManyNamed), { other: '4' }, { items: [1, 2, 3] })();

// // declare function helper<Positional extends any[], Named, Ret>(f: (positional: Positional, named: Named) => Ret): (named: Named, ...positional: Positional) => (blocks: {}) => Ret;

// /*
// {{#case foo as |when|}}
//   {{#when 'Bar' as |a b|}}
//     Bar
//   {{else}}
//     Something else
//   {{/when}}
// {{/case}}
// */

// class SumType<T extends Record<string, unknown[]>> {
//   public kind!: keyof T;
//   public data!: unknown[];
// }

// declare const When: TemplateEntity<<T extends Record<string, unknown[]>, K extends keyof T>(named: { item: SumType<T> }, key: K) => (blocks: { default(...params: T[K]): unknown }) => unknown>;
// declare const Case: TemplateEntity<<T extends Record<string, unknown[]>>(named: {}, object: SumType<T>) => (blocks: { default(when: Curry<typeof When, { item: SumType<T> }>): unknown }) => unknown>;

// declare function curry<
//   F,
//   NewNamed
// >(
//   f: F,
//   newArgs: NewNamed
// ): F extends (...params: any[]) => infer Return ?
//   (params: Params) => Return : never;

// let unwrapped = prepare(When);
// let curried = curry(unwrapped, {});
// let unwrapped2 = prepare(curried);

// invoke(unwrapped, { item: new SumType<{ hi: [] }>() }, 'ok');
// invoke(unwrapped2, {}, 'ok');

// invoke(prepare(curry(prepare(When), { item: new SumType<{}>() })), {}, 'wat');

// invoke(prepare(Case), {}, new SumType<{ Some: [number], None: [] }>())({

// })
