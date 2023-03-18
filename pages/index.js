import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="center">
      <Head>
        <title>Web-Final-Exam</title>
      </Head>
      <h1>Web-Final-Exam</h1>
      <div>
        
      </div>
      <p>This is a main interface connected to the web final exam. You can click the "About" button to enter the final exam program introduction page, or click the "Suppliers" button to enter the main program.</p>

      <Link href="/about">About</Link> |
      <Link href="/supplier">Suppliers</Link>
    </div>
  );
}
