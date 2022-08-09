

import { useState } from "react";
import style from "./index.module.scss";
import FoldBar from "../foldBar";
const tabList = [
  '价格',
  '产量',
  '下游商',
  '煤矿分布'
]

const headData = [
  {
    id: '22',
    price: 83,
    YOY: 0.32
  },
  {
    id: '2221',
    price: 83,
    YOY: 0.32
  }
]
export default function MapInfo() {
  const [selectIndex, setSelectIndex] = useState(0)

  return (
    <section className={style.infoWrap}>
      <nav>
        {tabList.map((ele, i) => {
          return <ul onClick={() => setSelectIndex(i)} className={i === selectIndex ? style.selected : ''} key={i}>{ele}</ul>
        })}
      </nav>
      <div className={style.infoContent}>
        <FoldBar title={"最新价格：JY-进口蒙煤"}>
          {headData.map(ele => {
            return <div key={ele.id} className={style.barInfo}>
              <div className={style.block}>
                <span className={style.subtitle}> <strong>{ele.price}</strong> 元/吨 </span>
                <p>最新价格(截至今日)</p>
              </div>
              <div className={style.block}>
                <span className={style.subtitle}> <strong className={style.up}>{ele.YOY * 100}%</strong>  </span>
                <p>去年同比</p>
              </div>
            </div>
          })}

        </FoldBar>
        <FoldBar title={"统计图"}>
          {headData.map(ele => {
            return <div key={ele.id} className={style.barInfo}>
              <div className={style.block}>
                <span className={style.subtitle}> <strong>{ele.price}</strong> 元/吨 </span>
                <p>最新价格(截至今日)</p>
              </div>
              <div className={style.block}>
                <span className={style.subtitle}> <strong className={style.up}>{ele.YOY * 100}%</strong>  </span>
                <p>去年同比</p>
              </div>
            </div>
          })}

        </FoldBar>
      </div>


    </section>
  )
}