
declare const SignatureKey: unique symbol;
export type TemplateEntity<Sig> = { [SignatureKey]: Sig };

type IteratorType<T> = T extends IterableIterator<infer U> ? U : never;
type Yields<Blocks extends Record<string, (...args: any[]) => any>> = IteratorType<ReturnType<Blocks[keyof Blocks]>>;

type Tuple = [unknown?, unknown?, unknown?, unknown?, unknown?, unknown?, unknown?, unknown?, unknown?, unknown?];
type ToBlock<K extends string, V extends Tuple> = { to: K, values: V };

// Ugh need to account for component instance/`this` type for templates

export declare function toBlock<K extends string, V extends Tuple>(to: K, ...values: V): ToBlock<K, V>;
export declare function prepare<T>(entity: TemplateEntity<T>): T;
export declare function invoke<
  Named,
  Positional extends any[],
  Blocks extends Record<string, (...args: any[]) => any>,
  Result
>(
  signature: (named: Named, ...positional: Positional) => (blocks: Blocks) => Result,
  named: Named,
  ...positional: Positional
): <BlockImpls extends Blocks>(blocks?: Partial<BlockImpls>) => { value: Result; yields: Yields<BlockImpls> };

type BlocksFromYields<Y extends ToBlock<string, Tuple>> = {
  [K in Y['to']]: (...params: Extract<Y, { to: K }>['values']) => any;
};

declare function tpl<Named, Yields extends ToBlock<string, Tuple>>(
  f: (context: { args: Named }) => IterableIterator<Yields>
): TemplateEntity<
  (named: Named) => <B extends BlocksFromYields<Yields>>(blocks: B) => void
>;

declare global {
  const __tpl__: typeof tpl;
}
