import { useRef } from 'react'

import isEqual from 'react-fast-compare'

export function isPrimitive(val) {
  return val == null || /^[sbn]/.test(typeof val)
}

export function checkDeps(inputs, name) {
  const reactHookName = `React.${name.replace(/DeepCompare/, '')}`

  if (!inputs || inputs.length === 0) {
    throw new Error(`[${name}] should not be used with no dependencies. Use ${reactHookName} instead.`)
  }

  if (inputs.every(isPrimitive)) {
    throw new Error(
      `[${name}] should not be used with dependencies that are all primitive values. Use ${reactHookName} instead.`
    )
  }
}

/**
 * https://github.com/kentcdodds/use-deep-compare-effect
 */
export function useDeepCompareMemoize(value) {
  const ref = useRef([])

  if (!isEqual(value, ref.current)) {
    ref.current = value
  }

  return ref.current
}
