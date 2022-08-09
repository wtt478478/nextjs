import React, {  useState, } from "react"
import style from "./index.module.scss";
interface FoldBarProps {
  title: string,
  children?: React.ReactElement | string | React.ReactElement[]
}


export default function FoldBar(props: FoldBarProps) {
  const { title,children } = props
  //折叠状态默认打开
  const [isFold, setIsFold] = useState<boolean>(false)
  return (
    <div className={style.barWrap}>
      <header>
        <h3>{title}</h3>
        <span onClick={() => setIsFold(!isFold)}>{isFold?'展开':'收起'}</span>
      </header>
      <section className={style.content} style={{ display: isFold ?'none':'inline-block'}}>
        {children}
      </section>
    </div>
  )
}