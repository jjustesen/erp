import { useCallback } from 'react'

import { useReducer } from './useReducer'

const stateReducerTypes = {
  open: 'OPEN',
  close: 'CLOSE',
  toggle: 'TOGGLE'
}

function disclosureReducer(state, { type, payload = {} }) {
  switch (type) {
    case stateReducerTypes.toggle: {
      return { ...payload, isOpen: !state.isOpen }
    }

    case stateReducerTypes.open: {
      return { ...payload, isOpen: true }
    }

    case stateReducerTypes.close: {
      return { ...payload, isOpen: false }
    }

    default: {
      return state
    }
  }
}

const defaultIsOpen = false

const defaultReducer = (_, __, c) => c

export function useDisclosure({ isOpen = defaultIsOpen, reducer = defaultReducer, ...defaultParams } = {}) {
  const [state, dispatch] = useReducer(
    (s, action) => {
      const changes = disclosureReducer(s, action)
      return reducer(s, action, changes)
    },
    { isOpen, ...defaultParams }
  )

  const handleOpen = useCallback(
    (params = {}) => {
      dispatch(stateReducerTypes.open, { ...defaultParams, ...params })
    },
    [dispatch, defaultParams]
  )

  const handleClose = useCallback(
    (params = {}) => {
      dispatch(stateReducerTypes.close, { ...defaultParams, ...params })
    },
    [dispatch, defaultParams]
  )

  const handleToggle = useCallback(
    (params = {}) => {
      dispatch(stateReducerTypes.toggle, { ...defaultParams, ...params })
    },
    [dispatch, defaultParams]
  )

  return {
    ...state,
    onOpen: handleOpen,
    onClose: handleClose,
    onToggle: handleToggle
  }
}

useDisclosure.types = stateReducerTypes
