'use client'

import { Provider } from 'jotai'
import { DevTools } from 'jotai-devtools'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider>
      <DevTools />
      {children}
    </Provider>
  )
}
