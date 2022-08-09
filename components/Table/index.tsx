import styles from "./index.module.scss";
import PageGation from "../PageGation";
import { useState } from "react";
export default function Table(props: any) {
  const { data, columns, isPage } = props;
  const [flag,setflag]:any=useState(false)
  const title = () => {
    return <div style={{position:'absolute',width:'200px',background:'#ffff'}}>11111</div>;
  };
  return (
    <div className={styles.tab}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr className={styles.headtr}>
            {columns &&
              columns.map((item: any, indexs: any) => {
                return (
                  <th
                  style={{position:'relative'}}
                    onMouseOver={() => {
                      setflag(true)
                    }}
                    onMouseOut={() => {
                        setflag(false)
                      }}
                    className={styles.headth}
                    key={indexs}
                  >
                    {item.title}
                    {/* {flag==true?title():null} */}
                  </th>
                );
              })}
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {data &&
            data.map((v: any, index: any) => {
              return (
                <tr key={index}>
                  {columns &&
                    columns.map((item: any, indexs: any) => {
                      return item.render ? (
                        <td key={indexs}>
                          {item.render(v[item?.key], data[index])}
                        </td>
                      ) : (
                        <td key={indexs}>{v[item?.key]}</td>
                        );
                    })}
                </tr>
              );
            })}
        </tbody>
      </table>
      {isPage ? (
        <PageGation
          total={202} //总条数
          currentPage={1} //当前页数
          onPageChange={(e: any) => {
            console.log(`这是回调函数的页数:${e}`);
          }}
          showQuickJumper={true} //是否展示快速跳转输入框
          showTotal //是否展示总条数
        ></PageGation>
      ) : null}
    </div>
  );
}
