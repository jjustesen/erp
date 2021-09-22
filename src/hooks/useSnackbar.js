import { useContext } from 'react'

import { SnackbarContext } from 'react-snackbar-alert'

export function useSnackbar() {
  const context = useContext(SnackbarContext)

  if (context === undefined) {
    throw new Error('Must be used within a SnackbarProvider')
  }

  const createSnackbar = (theme, message) => {
    const config = typeof theme === 'string' ? { theme, message } : theme

    return context.createSnackbar(config)
  }

  return {
    createSnackbar
  }
}
