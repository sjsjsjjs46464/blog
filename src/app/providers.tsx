'use client'

import React, { createContext, useRef } from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { type ThemeProviderProps } from 'next-themes/dist/types'

// 1. 定义 AppContext
export const AppContext = createContext<{ previousPathname?: string }>({});

// 2. Providers 组件包裹 context
export function Providers({ children, ...props }: ThemeProviderProps) {
  // 用 useRef 维护 previousPathname（你可以扩展为 useState 等更复杂的逻辑）
  const previousPathnameRef = useRef<string | undefined>(undefined);

  return (
    <AppContext.Provider value={{ previousPathname: previousPathnameRef.current }}>
      <NextThemesProvider {...props}>
        {children}
      </NextThemesProvider>
    </AppContext.Provider>
  )
}