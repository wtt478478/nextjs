import styles from "./index.module.scss";
import Image from "next/image";
import qrcode from "../../assets/img/qrcode.svg";
import Link from "next/link";
import { useState } from "react";
export default function Footer() {
  const [data, setdata]: any = useState([
    {
      name: "咨询查询",
      list: [
        { title: "快讯" },
        { title: "新闻" },
        { title: "分析" },
        { title: "日评" },
        { title: "周评" },
        { title: "月评" },
      ],
    },
    {
      name: "数据产品",
      list: [{ title: "价格指数" }, { title: "视频" }, { title: "报刊" }],
    },
    {
      name: "行业",
      list: [
        { title: "电力" },
        { title: "冶金" },
        { title: "钢铁" },
        { title: "炼焦" },
        { title: "物流" },
        { title: "天然气" },
      ],
    },
    {
      name: "公司",
      list: [
        { title: "隐私政策" },
        { title: "网站声明" },
        { title: "网站地图" },
        { title: "关于我们" },
        { title: "加盟合作" },
      ],
    },
    {
      name: "帮助",
      list: [{ title: "常见问题" }, { title: "付费相关" }],
    },
    {
      name: "联系",
      list: [
        { title: "中国煤炭资源网邮箱" },
        { title: "zgmtzyw@xx.net" },
        { title: "问题反馈" },
      ],
    },
  ]);
  return (
    <div className={styles.footer}>
      <div className={styles.body}>
        <div className={styles.fooTop}>
          <div className={styles.topLef}>
            {data.map((v: any, index: any) => {
              return (
                <ul key={index}>
                  <div className={styles.ulTop}>{v.name}</div>
                  {v.list.map((item: any, i: any) => {
                    return (
                      <Link href="" key={i}>
                        <li className={styles.ultit}>{item.title}</li>
                      </Link>
                    );
                  })}
                </ul>
              );
            })}
          </div>
          <div className={styles.topRig}>
            <div>
              咨询顾问
              <span></span>
            </div>
            <Image src={qrcode}></Image>
            <p className={styles.topfo}>扫一扫添加企业微信</p>
          </div>
        </div>
      </div>
      <div className={styles.fooBom}>
        <span>许可证编号：晋B2-20150015 网站备案号： 晋ICP备14006379号-4</span>
      </div>
    </div>
  );
}
