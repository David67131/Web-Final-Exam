import Head from 'next/head'
import Link from 'next/link'



export default function Home({ blogs }) {

  

  function deleteBlog(id) {
    fetch(`/api/supplier/supplier/${id}`,
      {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => {
        // alert("Deleting " + id)
        window.location.reload(false);
      })

  }

  return (
    <>
      <Head>
        <title>Supplier</title>
      </Head>
      <h1>Supplier</h1>
      <p style={{ margin: '0.4rem' }}>
        <Link href="/supplier/add">+New Supplier</Link>
      </p>
      <table>
        <thead>
          <tr>
            <th style={{width: '10rem'}}>Supplier Name</th>
            <th style={{width: '10rem'}}>Address</th>
            <th style={{width: '10rem'}}>Phone Number</th>
            <th style={{width: '10rem'}}>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            blogs.map(blog => {
              return (
                <tr key={blog._id}>
                  <td>
                    <Link href={`/blogs/${blog._id}`}>
                      {blog.title}
                    </Link>
                  </td>
                  <td style={{textAlign:'center'}}>{blog.category}</td>
                  <td>
                    
                    
                
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
     
      <p>
      </p>

    </>
  )
}
export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/supplier/supplier/`)
  const blogs = await res.json()
  // console.debug('blog 1', blogs)
  return { props: { blogs } }
}