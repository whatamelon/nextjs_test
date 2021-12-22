import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';
import React from 'react'



function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <Component {...pageProps} />
  )
}

export default MyApp
