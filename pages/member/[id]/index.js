import Layout from "@/components/Layout"
import Image from "next/image"
import Link from "next/link"

const Content = ({blogContent}) => {

    return(
    <Layout>
      <main className="contentMain">
        <h1>{blogContent.name}</h1>
        <figure>
          <Image 
          src={`/images/${blogContent.img}`} 
          alt={blogContent.name} 
          width = {500}
          height = {300}
          />
          <figcaption>
            <dl>
              <dt>설명</dt>
              <dd>{blogContent.text}</dd>
              <dt>성격</dt>
              <dd>{blogContent.character}</dd>
            </dl>
          </figcaption>
        </figure>
        <p><Link href="/">Home으로 돌아가기</Link></p>  

      </main>
    </Layout>
  )
}


export const getServerSideProps = async(context) => {
  const res = await fetch('https://hye-json.s3.ap-northeast-2.amazonaws.com/data.json');
  const data = await res.json();

  const blogContent = data.filter(item => item.id == context.params.id);
  
  return{
    props:{
      blogContent:blogContent[0]
    }
  }
}

export default Content;