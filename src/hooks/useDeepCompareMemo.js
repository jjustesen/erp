import { useMemo } from 'react'

import { checkDeps, useDeepCompareMemoize } from './useDeepCompareMemoize'

export function useDeepCompareMemo(factory, inputs) {
  if (process.env.NODE_ENV !== 'production') {
    checkDeps(inputs, 'useDeepCompareMemo')
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(factory, useDeepCompareMemoize(inputs))
}
