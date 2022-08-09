import type { NextPage } from "next";
import Head from "next/head";
// import Text from "../text";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import variables from "../../styles/variables.module.scss";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import Router from "next/router";
import Slider from "../../components/Slider";
import Chart from "../../components/Chart";
import PageGation from "../../components/PageGation";
import NavigationBar from "../../components/NavigationBar";
import ProductPublications from "../../components/ProductPublications";
import Toasts from "../../components/Toasts";
import Footer from "../../components/Footer";
import Table from "../../components/Table";
import Button from "../../components/Button";
import News from "../../components/News";
import Live from "../../assets/img/liveImg.svg";
import People from "../../assets/img/people.svg";
import ConventionTraining from "../../components/ConventionTraining";
const imgList = [
  {
    title: "四川试行主动错避峰负荷电价政策",
    subTitle:
      "四川日报消息，近日，四川省发展改革委印发通知，明确在全省试行主动错避峰负荷电价政策。 政策主要实施范围为国网四川省电力公司供区范围。其中，供电电压等级在10千伏及以上，且单个户号主动错避峰响应能力不低于200千瓦的工业用户，在与国网四川电力asdsdsdsdsdsdsdsd3阿三大苏打大苏打",
    url: require("../../assets/arrow.png"),
  },
  {
    title: "箭头白",
    url: require("../../assets/arrowNone.png"),
    subTitle: "",
  },
  {
    title: "钱",
    url: require("../../assets/money.png"),
    subTitle: "",
  },
  {
    title: "人",
    url: require("../../assets/person.png"),
    subTitle: "",
  },
];
const columns = [
  {
    title: "产地",
    key: "place",
  },
  {
    title: "产量/万吨",
    key: "output",
  },
  {
    title: "环比",
    key: "ratio",
    render: (text: any, record: any) => {
      console.log(text, record);
      return (
        <div>
          <span style={{ padding: 3, background: "pink" }}>{text}</span>
        </div>
      );
    },
  },
  {
    title: "时间(日度)",
    key: "time",
    render: (text: any, record: any) => {
      console.log(text, record);
      return <div>{text}</div>;
    },
  },
];
const dataScorus = [
  {
    place: "石家庄",
    output: "33333",
    ratio: "32%",
    time: "2022-22-1",
  },
  {
    place: "保定",
    output: "22222",
    ratio: "33%",
    time: "2022-22-1",
  },
  {
    place: "邯郸",
    output: "11111",
    ratio: "37%",
    time: "2022-22-1",
  },
  {
    place: "唐山国",
    output: "44444",
    ratio: "13%",
    time: "2022-22-1",
  },
];
const newList = [
  {
    time: "1:12 a.m.",
    content:
      "印度煤炭部近日表示，2022-23财年（2022年4月-2023年3月），印度计划将煤炭产量较上一财年提高17%，达到9.11亿吨，以满足不断增长的电较上一财年产量增长12.4%。",
  },
  {
    time: "1:12 a.m.",
    content:
      "6月28日，国内商品期货多数上涨，黑色系商品全线大涨，焦炭主力合约J2209开盘报3134元/吨，最后收于3223元/吨，涨幅5.57%。焦煤主力合约JM2209开盘报2392元/吨力合约JM2209开盘报2392元/吨，最后收于2515.5元/吨，涨幅7.73%。铁矿石合约I2涨幅6.31%。",
  },
  {
    time: "1:12 a.m.",
    content:
      "印度中央电力局（CEA）最新数据显示，2022年5月份，印度电力企业共进口动力煤525.07万吨，同比增加42.58%，环比增长19.36%，连续第四个月增长，创2020年2新高。",
  },
  {
    time: "1:12 a.m.",
    content:
      "6月27日上午，国新办举行新闻发布会，交通运输部副部长赵冲久在回应记者提问时，介绍了当前全国重点公路项目开工建设有关情况。随着国务院扎实力合约JM2209开盘报2392元/吨稳住经济一揽子政策措施的落实落地，全",
  },
  {
    time: "1:12 a.m.",
    content:
      "6月27日上午，国新办举行新闻发布会，交通运输部副部长赵冲久在回应记者提问时，介绍了当前全国重点公路项目开工建设有关情况。随着国务院扎实稳住经济一揽子政策措施的落实落地，全国重点公路建设将持续发力，预计下半年还将稳就业作用。",
  },
];
const Home: NextPage = (props: any) => {
  const { t } = useTranslation("common");
  const onClose: any = () => {
    console.log(1111);
  };
  return (
    <div
      className={styles.container}
      style={{ background: variables.primaryColor }}
    >
      <Head>
        <title>煤炭资源网</title>
        <meta name="description" content="煤炭资源网" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <button
          onClick={() => {
            //              内容                 关闭时间  icon
            Toasts.info(
              "美国持续高温❗️电量消耗打破百年纪录....运营商：已采取措施",
              30000,
              <Image src={People} width="24px" height="24px"></Image>,
              false,
              null
            );
          }}
        >
          Click
        </button>
        <Slider width={"100%"} imgList={imgList} interval={3000000}></Slider>
        {/* 会展培训 */}
        <ConventionTraining />
        {/* 产品刊物 */}
        <ProductPublications />

        {/* 图表 */}
        <Chart />
        {/* <News data={newList} src={Live} /> */}
        {/* 路由跳转方式1 */}
        <Link href="./text">点击这里跳转路由</Link>
        {/* <NavigationBar></NavigationBar> */}
        {/* 路由跳转方式2 */}
        <button
          onClick={() => {
            Router.push({
              pathname: "/text",
              query: { params: "1111111111111" },
            });
          }}
        >
          路由跳转方式2
        </button>
        {/* 加载组件 */}
        {/* <Text/> */}
        <h1 className={styles.title}>
          <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>

        <Table
          data={dataScorus} //数据
          columns={columns} //表头
          isPage={false} //是否展示分页
        ></Table>
        {/* <PageGation
          total={202} //总条数
          currentPage={1} //当前页数
          onPageChange={(e: any) => {
            console.log(`这是回调函数的页数:${e}`);
          }}
          showQuickJumper={true} //是否展示快速跳转输入框
          showTotal //是否展示总条数
        ></PageGation> */}
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
      <Footer></Footer> */}
      
    </div>
  );
};
export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "footer"])),
      // Will be passed to the page component as props
    },
  };
}
export default Home;
