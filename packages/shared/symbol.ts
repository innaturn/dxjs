export type SymbolType = symbol | string;
/**
 * 获取 model name 的唯一标识
 * model name 会放在 model 构造器中的 matedata 中
 * 以 model name 来关联对应的 Model 构造器
 *
 * Model Name 通常是构造器的名称，但是也可以设置别名
 */
export let MODEL_NAME: SymbolType = '__model_name';

/**
 * 用于获取作为 reducer 的 key,
 * 只有使用装饰器 @Reducer 表明的，才算一个有效 key
 */
export let RECORD_REDUCER_KEYS: SymbolType = '__record_reducer_keys';

/**
 * 用来标明 类 或者 方法
 * 可用于决定某个增强器是否适用于此类/方法
 */
export let LABEL: SymbolType = '__label';

/**
 * reducer 方法
 *
 * 用于获取类中的 reducer 方法，如
 *
 * (Reflect.getMetadata(Model, REDUCER_METHODS_KEY) as Map<Symbol.for, string>).get(action.type)
 */
export let REDUCER_METHODS_KEY: SymbolType = '__reducer_method';

/**
 * reducer 增强器，
 * 用于获取某个 reducer 的增强器
 */
export let REDUCER_ENHANCER_KEY: SymbolType = '__reducer_enhancer';

/**
 * effect 的 helper 别名
 */
export let TAKE_LATEST: SymbolType = '__take_latest';
export let TAKE_EVERY: SymbolType = '__take_every';
export let TAKE_LEADING: SymbolType = '__take_leading';
export let THROTTLE: SymbolType = '__throttle';

/**
 * effect 方法
 *
 * 用于获取类中的 effect 方法，如
 *
 * (Reflect.getMetadata(Model, EFFECT_METHODS_KEY) as Map<Symbol.for, string>)
 */

export let EFFECT_METHODS_KEY: SymbolType = '__effect_method_key';

export let EFFECT_METHODS_META: SymbolType = '__effect_method_meta';

export let GUARD_KEY: SymbolType = '__guard_key';
export let SENTINEL_KEY: SymbolType = '__sentinel_key';
export let DISGUISER_KEY: SymbolType = '__disguiser_key';

if (typeof Symbol === 'function' && Symbol.for) {
  MODEL_NAME = Symbol.for('__model_name');
  RECORD_REDUCER_KEYS = Symbol.for('__record_reducer_keys');
  LABEL = Symbol.for('__label');
  REDUCER_METHODS_KEY = Symbol.for('__reducer_method');
  REDUCER_ENHANCER_KEY = Symbol.for('__reducer_enhancer');
  TAKE_LATEST = Symbol.for('__take_latest');
  TAKE_EVERY = Symbol.for('__take_every');
  TAKE_LEADING = Symbol.for('__take_leading');
  THROTTLE = Symbol.for('throttle');
  EFFECT_METHODS_KEY = Symbol.for('__effect_method_key');
  EFFECT_METHODS_META = Symbol.for('__effect_method_meta');
  GUARD_KEY = Symbol.for('__guard_key');
  SENTINEL_KEY = Symbol.for('__sentinel_key');
  DISGUISER_KEY = Symbol.for('__disguiser_key');
}

export const EFFECT_HELPERS: SymbolType[] = [TAKE_LATEST, TAKE_EVERY, TAKE_LEADING, THROTTLE];

export const DISGUISER_IO = '@dxjs/IO';
export const DISGUISER_NEXT = 'NEXT';
export const DISGUISER_ABORT = 'ABORT';
