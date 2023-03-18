import Head from 'next/head'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <>
    <Head>
      <title>About Page</title>
    </Head>
    <h1>About Page</h1>
    <p>
      About Web-Final-Exam, this project can display and edit supplier information (such as adding a supplier, which includes supplier name, address, and phone number), and use css and React Framework and js to write and beautify Web pages and UI. The specific effect is shown in the following figure.
    </p>
    <Link href="/">Home</Link>
    </>
  )
}
