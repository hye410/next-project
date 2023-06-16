import Layout from "@/components/Layout"
import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"

const Content = ({blogContent}) => {
  
  const Selection_KEY =  'selection';
  
  function selection(id){
    const list = JSON.parse(localStorage.getItem(Selection_KEY) || '{}');
    list[id] = id;
    localStorage.setItem(Selection_KEY,JSON.stringify(list));
  }

  useEffect(()=>{
  },[])


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

// serversideprops는 서버에 뭔가 요청해서 그걸 받아 -> context(매게변수)
// 그리고 받아서 받은 애의 id값이랑 내가 원래 갖고있던 id값이랑 비교해서 랜더링한거지,,


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