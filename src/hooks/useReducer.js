import { useReducer as useReducerBase, useCallback } from 'react'

import { useDeepCompareMemo } from './useDeepCompareMemo'

export function useReducer(reducerBase, initialState) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const reducer = useCallback(reducerBase, [])

  const [state, dispatch] = useReducerBase(reducer, initialState)

  const customDispatch = useCallback((type, payload) => dispatch({ type, payload }), [dispatch])

  const values = useDeepCompareMemo(() => [state, customDispatch, dispatch], [state, customDispatch])

  return values
}
