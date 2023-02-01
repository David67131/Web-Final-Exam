import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Head>
      <title>Da Wei Song</title>
    </Head>
    <h1>Da Wei Song</h1>
    <p>
      This is a sample page for Da Wei Song.
    </p>
    <Link href="/about">About</Link>
    </>
  )
}
