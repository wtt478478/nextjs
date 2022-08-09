import { useState } from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import pro from "../../assets/img/pro.svg";
import tab1 from "../../assets/img/tab1.svg";
import down from "../../assets/img/down.svg";
export default function NavigationBar(props: any) {
  const [defaultList, setdefaultList]: any = useState([
    {
      id: "0",
      title: "数据产品",
      src: "",
    },
    {
      id: "1",
      title: "首页",
      src: "",
    },
    {
      id: "2",
      title: "咨询",
      src: "",
    },
    {
      id: "3",
      title: "行业问答",
      src: "",
    },
    {
      id: "4",
      title: "数据服务",
      src: "",
    },
    {
      id: "5",
      title: "会展",
      src: "",
    },
    {
      id: "6",
      title: "会员",
      src: "",
    },
  ]);
  return (
    <div className={styles.nav}>
      <ul className={styles.tablef}>
        {defaultList.map((item: any, index: any) => {
          return (
            <li
              className={
                item.title == "数据产品" ? styles.navtabpro : styles.navtab
              }
              key={index}
              onClick={() => {
                let datas: any = defaultList.map((v: any, i: any) => {
                  v.check = false;
                  if (v.id == item.id) {
                    v.check = true;
                  }
                  return v;
                });
                setdefaultList(datas);
              }}
            >
              <span>
                {item.title == "数据产品" ? (
                  <Image src={pro} width="" height="16"></Image>
                ) : null}
                {item.title}
                <div
                  className={
                    item.check == true &&
                    (item.title == "行业问答" || item.title == "数据服务")
                      ? styles.checks
                      : item.check == true &&
                        (item.title != "行业问答" || item.title != "数据服务")
                      ? styles.check
                      : ""
                  }
                ></div>
              </span>
            </li>
          );
        })}
      </ul>
      <div className={styles.tabcen}>
        <span className={styles.cenre}>
          中国煤炭资源网
          <span className={styles.cenImg}></span>
          <span className={styles.cenImgs}></span>
        </span>
      </div>
      <div className={styles.tabrig}>
        <div className={styles.namelef}>
          <span className={styles.now}>#实时快讯:</span>
          <span className={styles.tu}>
            🚨⚠突发！！️澳大利亚港口区遭遇暴雨袭击
          </span>
        </div>
        <div className={styles.namerig}>
          <div className={styles.name}>
            <span className={styles.username}>
              秦伟翔
              <span></span>
            </span>
            <span className={styles.icon}>
              <Image src={down}></Image>
            </span>
          </div>
          <div>
            <Image src={tab1}></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
