import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import variables from "../styles/variables.module.scss";
import dynamic from 'next/dynamic'
import QuickEntry from "@/components/QuickEntry";


const Map = dynamic(() => import('@/components/Map'), {
  ssr: false,
})
const Editer = dynamic(() => import('@/components/Editer'), {
  ssr: false,
})
const Home: NextPage = (props: any) => {

  return (
    <>
      <Head>
        <title>煤炭资源网</title>
        <meta name="description" content="煤炭资源网" />
        <link rel="icon" href="/favicon.ico" />
        <script  dangerouslySetInnerHTML={{__html: `
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?7f01618ccdf1f6b6e31ed92b4af1d7c4";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();
        `}}></script>
      </Head>

      <main >
        <h1 className={variables.title}>acscascascascascsasc</h1>
        <Map></Map>
        <div style={{marginBottom:20}}>快捷入口1<QuickEntry data={[]} type={1}/></div>
        <div style={{marginBottom:20}}>快捷入口2<QuickEntry data={[]} type={2}/></div>
        <div style={{marginBottom:20}}>快捷入口3<QuickEntry data={[]} type={3}/></div>
        <div style={{marginBottom:20}}>快捷入口4<QuickEntry data={[]} type={4}/></div>
        {/* <Editer></Editer> */}
      </main>
      
    </>
  );
};

export default Home;

