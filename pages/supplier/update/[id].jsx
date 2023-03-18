/*
Update page
It populates the blog data into the form.
*/
import Head from "next/head"
import Link from "next/link"

import { useState } from "react";
import { useForm } from "react-hook-form";



// Step 2: This component is rendered from the server (Server-Side Rendering) SSR
export default function Supply({ supply }) {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");


  const updateSupply = async (data) => {
    const response = await fetch(`/api/supplier/supplier/${supply._id}`, {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      // redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      // serialisation
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    const result = await response.json();   // deserialise
    if (result.error) {
      alert("Error: " + result.error)
    } else {
      alert("Supply updated")
      window.location.href = "/supplier"
    }
    console.log(result)
    setData(JSON.stringify(data))
  }

  console.log('supply 2', supply)
  if (!supply) return (
    <div>
      <p>Supply not found</p>
      <Link href="/supplier">Back</Link>
    </div>
  );

  return (
    <>
      <Head>
        <title>Update {supply.title}</title>
      </Head>

      <div style={{ margin: '1rem' }}>
        <form onSubmit={handleSubmit(updateSupply)}>
          <h1>Update Supplier</h1>
          <label htmlFor="title">supplier name</label><br />
          <input id="title" {...register("title", { required: true })} 
          placeholder="Supply Title" 
          defaultValue={supply.suppliername}
          /><br />

        <label htmlFor="title">address</label><br />
          <input id="title1" {...register("title1", { required: true })} 
          placeholder="Supply Title1" 
          defaultValue={supply.address}
          /><br />
          
          <label htmlFor="title">phone number</label><br />
          <input id="title2" {...register("title2", { required: true })} 
          placeholder="Supply Title2" 
          defaultValue={supply.phonenumber}
          /><br />
          <input type="submit" />
          <p>{data}</p><br />
        </form>
      </div>

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