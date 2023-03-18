import Head from "next/head"
import Link from "next/link"

// Step 2: This component is rendered from the server (Server-Side Rendering) SSR
export default function Supply({ supply }) {
  console.log('supply 2', supply)
  if (!supply) return (
    <div>
      <p>Supplier not found</p>
      <Link href="/supplys">Back</Link>
      </div>
  );

  return (
    <>
      <Head>
        <title>{supply.title}</title>
      </Head>
      <h1>{supply.suppliername}</h1>
      <p>{supply.address}</p>
      <p>{blog.phonenumber}</p>
      <Link href="/supplys">Back</Link>
    </>
  )
}

// STEP 1: This function will be executed at the server before loading the page.
export async function getServerSideProps({ params }) {
  console.debug('params', params)
  const res = await fetch(`http://localhost:3000/api/supplier/supplier/${params.id}`)
  const supply = await res.json()
  console.debug('supply 1', supply)
  return { props: { supply } }
}