import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router';

const Home: NextPage = () => {

  const router = useRouter();

  const goDetail = () => {
      router.push({ pathname:'/character' });
  };
  
  return (
    <div className='px-8'>
      <Head>
        <title>Next.js Test</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='flex flex-1 flex-col justify-center items-center py-4 min-h-min'>
        <h1 className='m-0 leading-5 text-7xl'>
          Welcome to <a className='text-blue-500 hover:underline' href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className='my-16 leading-6 text-2xl text-center'>
          Get started by editing{' '}
          <code className='code'>pages/index.tsx</code>
        </p>

        <div className='flex justify-center items-center flex-wrap'>
          <div onClick={() => goDetail()} className='m-4 p-6 text-left border-2 rounded-md cursor-pointer hover:text-blue-500 border-blue-500'>
            <h2 className='mb-4 text-2xl'>Character &rarr;</h2>
            <p className='m-0 text-xl leading-6'>GET rickandmortyapi. Characterlist Go!</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
