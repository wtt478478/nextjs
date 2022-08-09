import Image from 'next/image'
import styles from "./index.module.scss";
import { useEffect, useState } from "react";

interface SliderProps {
  /** 组件宽度 */
  width?: string | number;
  /** 组件高度 */
  height?: string | number;
  /** 图片列表 */
  imgList: { title: string, url: string, subTitle: string }[];
  /** 轮播间隔*/
  interval: number;
}
// 定时器
function useInterval(callback: (arg0: number) => void, inretval: any) {
  useEffect(() => {
    const start = new Date().getTime()
    const timer = setInterval(() => {
      callback(new Date().getTime() - start)
      console.log(1111)
    }, inretval)
    return () => {
      clearInterval(timer)
    }
  }, [])
}
// 当前选项钩子
function useSilder(N: number, speed = 3000) {
  const [slider, setSlider] = useState(0)
  useInterval(() => {
    setSlider(prev => (prev + 1) % N)
  }, speed)
  return [slider, setSlider]
}
//点击跳转指定项
// function jumpSlider(i: number) {
//   setSlider(i)
// }

/**
 * 轮播组件
 * 支持缩略图模式和点列模式
 */
export default function Slider(props: SliderProps) {
  const { width = 500, height = 250, imgList, interval } = props
  const [silder, setSlider]: any = useSilder(imgList.length, interval)
  // console.log(silder);

  return (
    <div className={styles.scroller} style={{ width, height }} >
      {/* 点列模式 */}
      {/* <nav className={styles.dots}>
        {imgList.map((ele, i) => {
          return <span onClick={() => setSlider(i)} key={ele.title} className={`${i === silder ? styles.dotselected : ''}`}></span>
        })}
      </nav> */}
      {/* 缩略图模式 */}
      <nav className={styles.abridge}>
        {imgList.map((ele, i) => {
          return <Image onClick={() => setSlider(i)} key={ele.title} width={width} height={height} src={ele.url} alt={ele.title} />
        })}
      </nav>

      <div className={styles.inner} style={{
        width: `${imgList.length * 100}%`,
        height,
        transform: `translateX(-${Number(silder) * 100 / imgList.length}%)`
      }}>

        {imgList.map(ele => {
          return (
            <figure key={ele.title} className={styles.figure} style={{ width, height }}>
              <figcaption className={styles.figcaption}>
                <h2>{ele.title}</h2>
                <p>{ele.subTitle}</p>
              </figcaption>
              <Image width={width} height={height} src={ele.url} alt={ele.title} />
            </figure>
          )
        })}
      </div>
    </div>
  )
}

// const styles = {
//   a: {
//     marginRight: 10,
//   },
// }