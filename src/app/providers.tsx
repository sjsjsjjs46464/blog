'use client'

import React, { createContext, useRef } from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { type ThemeProviderProps } from 'next-themes/dist/types'
import { LanguageContext } from '@/contexts/LanguageContext';

// 1. 定义 AppContext
export const AppContext = createContext<{ previousPathname?: string }>({});

// 2. Providers 组件包裹 context
export function Providers({ children, ...props }: ThemeProviderProps & { lang?: 'en' | 'zh' }) {
  // 用 useRef 维护 previousPathname（你可以扩展为 useState 等更复杂的逻辑）
  const previousPathnameRef = useRef<string | undefined>(undefined);
  const lang = props.lang || 'en';

  return (
    <AppContext.Provider value={{ previousPathname: previousPathnameRef.current }}>
      <LanguageContext.Provider value={{ language: lang }}>
        <NextThemesProvider {...props}>
          {children}
        </NextThemesProvider>
      </LanguageContext.Provider>
    </AppContext.Provider>
  )
}