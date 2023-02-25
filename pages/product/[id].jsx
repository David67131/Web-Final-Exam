import Head from "next/head"
import Link from "next/link"

// Step 2: This component is rendered from the server (Server-Side Rendering) SSR
export default function Product({ product }) {
  console.log('product 2', product)
  if (!product) return (
    <div>
      <p>Product not found</p>
      <Link href="/product">Back</Link>
      </div>
  );

  return (
    <>
      <Head>
        <title>Products</title>
      </Head>
      <h1>{product.code}</h1>
      <div>
        <p>${product.name}</p>
        <p>${product.price}</p>
      </div>
      <Link href="/product">Back to Product List</Link>
    </>
  )
}

// STEP 1: This function will be executed at the server before loading the page.
export async function getServerSideProps({ params }) {
  console.debug('params', params)
  const res = await fetch(`http://localhost:3000/api/stock/products/${params.id}`)
  const product = await res.json()
  console.debug('product 1', product)
  return { props: { product } }
}