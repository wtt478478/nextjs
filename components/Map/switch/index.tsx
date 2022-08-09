import style from "./index.module.scss";
import { useState, useEffect } from "react";

interface SwitchProps {
  defalutCheck?: boolean,
  check?: boolean,
  onCheck?: (select: boolean) => void;
}

export default function Switch(props: SwitchProps) {
  const { defalutCheck = false, check, onCheck } = props;
  const [select, setselect] = useState(check == undefined ? defalutCheck : check);
  useEffect(() => {
    setselect(!!check)
  }, [check])
  
  
  return (
    <div onClick={() => check == undefined ? setselect(!select) : (onCheck && onCheck(!check))} className={`${style.switchWrap} ${select ? style.checked : ''}`}>
      <span className={`${style.switchHandle} ${select ? style.checked : ''}`} ></span>
    </div>
  )
}