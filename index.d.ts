import type TupleConsistentType  from 'fup-tuple-consistent-type';
import type TupleGainType        from 'fup-tuple-gain-type';
import type CurryLimitResultType from 'fup-curry-limit-result-type';

export type CurryLimitCore <
    ExpectedParameters extends readonly unknown[] = unknown[],
    ExpectedResult     extends unknown = unknown
> = <
    Limit       extends number,
    Parameters  extends ExpectedParameters,
    Result      extends ExpectedResult,
    Arguments   extends TupleConsistentType<TupleGainType<Limit, Parameters>>
> (limit: Limit, executor: (...parameters: Parameters) => Result, ...args: Arguments) => CurryLimitResultType<
    Limit,
    Arguments,
    Parameters,
    Result
>;

/**
 * @example
 * const only2Curry = curryLimit(2);         // ((...arguments) => result) => (y, x) => result | (y) => (x) => result
 * const add        = (y, x) => x + y;       // (y, x) => x + y
 * const result     = only2Curry(add, 1, 2); // 3
 * const add1       = only2Curry(add, 1);    // (x) => x + 1
 * const resultAdd1 = add1(3);               // 4
 * const addC       = only2Curry(add);       // (y, x) => x + y | (y) => (x) => x + y
 * const add4       = addC(4);               // (x) => x + 4
 * const resultAdd4 = add4(5);               // 9
 */
declare const curryLimitCore: CurryLimitCore;
export default curryLimitCore;