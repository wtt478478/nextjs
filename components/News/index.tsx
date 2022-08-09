import styles from "./index.module.scss";
import Image from "next/image";
import { useState } from "react";

export default function News(props: any) {
  const { data, src } = props;
  const [hoverKey, sethoverKey]: any = useState(0);
  return (
    <div className={styles.news}>
      <header>
        <big>
          LIVE <span></span>
        </big>
        <span>
          查看全部 <span></span>
        </span>
      </header>
      <div className={styles.body}>
        {data &&
          data.map((v: any, index: any) => {
            return (
              <div
                onMouseEnter={() => {
                  sethoverKey(index);
                }}
                key={index}
                className={`${styles.item} ${
                  index == hoverKey ? styles.hovers : ""
                }`}
              >
                <p className={styles.time}>{v.time}</p>
                <div className={styles.bodycontent}>{v.content}</div>
              </div>
            );
          })}
      </div>
      <footer>
        <Image src={src}></Image>
      </footer>
    </div>
  );
}
