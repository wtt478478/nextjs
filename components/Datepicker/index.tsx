import page from './index.module.scss'
import React, { useState } from 'react'
import DatePicker, { registerLocale } from "react-datepicker"
import zhCN from "date-fns/locale/zh-CN";
// import 'react-datepicker/dist/react-datepicker-cssmodules.css'
import "react-datepicker/dist/react-datepicker.css";
registerLocale('zh-CN', zhCN)


interface SelectProps {
  isClearable?: boolean; /*是否可清除*/
  disabled?: boolean;/*是否多选*/
  size?: 'large' | 'mediu' | 'small' | 'mini'; //尺寸
  date?: Date;//时间值
  dateFormat?: string | string[]//时间格式
  styles?:Record<string, unknown>; //样式
}

const Datepicker = (props: SelectProps) => {
  const { isClearable, disabled, dateFormat, size = "small",styles } = props
  const [startDate, setStartDate] = useState(new Date())

  return (
    <div className={page.datepickerContainer} style={styles}>
      <DatePicker
        locale="zh-CN"
        isClearable={isClearable}
        selected={startDate}
        disabled={disabled}
        dateFormat={dateFormat}
        onChange={(date: Date) =>{
          console.log(date);
          
          setStartDate(date)}}
        className={`${page.datepicker} ${page[size + 'Date']}`}
      >
      </DatePicker>
    </div>
  )
}

export default Datepicker