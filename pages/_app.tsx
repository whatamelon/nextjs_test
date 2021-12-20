import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { KeepAliveProvider } from 'react-next-keep-alive';
import { useRouter } from 'next/router';
import React, { useRef, useEffect, memo } from 'react'



function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <KeepAliveProvider router={router}>
      <Component {...pageProps} />
    </KeepAliveProvider>
  )
}

export default MyApp
