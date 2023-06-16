import Layout from "@/components/Layout"
import MyList from "@/components/MyList"
import Head from "next/head"

export default function Home({blog}) {

  return (
    <>
    <Layout>
    <Head>
      <title>About Dogs</title>
    </Head>
    <main>
      <h1>All About Dogs</h1>
      <MyList 
      blog={blog}
      />
    </main>
    </Layout>
    </>
  )
}

export async function getStaticProps(){
  const res = await fetch('https://hye-json.s3.ap-northeast-2.amazonaws.com/data.json');
  const data = await res.json();
  
  return{
    props:{
      blog : data
    }
  }
}