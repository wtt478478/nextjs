import style from "./index.module.scss";
import { useState, useEffect, useCallback } from "react";
import Switch from "../switch";
const navList = [
  { name: '原煤', id: 1 },
  { name: '动力煤', id: 2 },
  { name: '无烟煤', id: 3 },
  { name: '冶金煤', id: 4 },
  { name: '焦炭', id: 5 }
]

const ranges = [
  { name: '>100万吨', id: 1, range: [1000000, Infinity], selected: true },
  { name: '70-100万吨', id: 2, range: [700000, 1000000], selected: true },
  { name: '50-70万吨', id: 3, range: [500000, 700000], selected: true },
  { name: '20-50万吨', id: 4, range: [200000, 500000], selected: true },
  { name: '<20万吨', id: 5, range: [0, 200000], selected: true }
]

interface MapOptionProps {
  onClick?: (data: { name: string, value: number }[]) => void;
  data: { name: string, value: number }[];
}
type T = { name: string, value: number };

/**
 * @Author: donghe
 * @description: 过滤出在选择区间内的数据
 * @param {any[]} mapData
 * @param {any[]} rangeNum
 * @Date: 2022-08-08 16:53:54
 */
function filterData(mapData: any[], rangeNum: any[]): Array<T> {
  return mapData.filter((ele) => {
    const findRange= rangeNum.some((rangele)=>{
      if (ele.value >= rangele.range[0] && ele.value < rangele.range[1]) {
        return true
      }
      return false
    })
 
    return findRange
   
  })
}

export default function MapOption(props: MapOptionProps) {
  const [select, setselect] = useState(1);
  const { onClick, data } = props;
  const [rangeList, setRangeList] = useState(ranges);

  //计算地图数据
  const calcMapData = useCallback(
    () => {
      const FRange = rangeList.filter(ele => {
        return ele.selected
      })
      onClick && onClick(filterData(data, FRange))
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )

  return (
    <div className={style.optionWrap}>
      <nav className={style.nav}>
        {navList.map(ele => {
          return (<ul key={ele.id}
            onClick={() => {
              setselect(ele.id);
              calcMapData()
            }}
            className={`${select === ele.id ? style.selected : ''}`}>
            {ele.name}
          </ul>)
        })}
      </nav>

      <div className={style.details}>
        {rangeList.map((ele, i) => {
          return <li key={ele.id}>
            <span className={style.name}>{ele.name}</span><Switch check={ele.selected} onCheck={(status) => {
              rangeList[i].selected = status
              setRangeList([...rangeList])
              calcMapData()

            }} />
          </li>
        })}
      </div>
    </div>
  )
}
