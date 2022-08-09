import { useState, useEffect } from 'react';
import TabContent from '../TabContent'
import Image from 'next/image';
import scss from './index.module.scss';
import tab1 from '../assets/img/tab1.svg';
import tab2 from '../assets/img/tab2.svg';
import tab3 from '../assets/img/tab3.svg';
import tab4 from '../assets/img/tab4.svg';
import tab5 from '../assets/img/tab5.svg';
import tab6 from '../assets/img/tab6.svg';
import tab7 from '../assets/img/tab7.svg';
import tab8 from '../assets/img/tab8.svg';
import tab9 from '../assets/img/tab9.svg';
import tab10 from '../assets/img/tab10.svg';
import tab11 from '../assets/img/tab11.svg';
import tab12 from '../assets/img/tab12.svg';
interface SonProps {
  data?: object | null; //标题及内容（数据格式如下defaultData）
  bgColor?: any;//主题背景色
  color?: any////tab 标题字体题色
  deepBgcolorMode?: any//主题色  true--深色模式  false--浅色模式
  spanBgColor?: any//除active 背景色
  activeBgColor?: any,
}
const Tab: React.FC<SonProps> = (props: any) => {
  const {
    data = [],
    bgColor = '#ffffff',
    activeBgColor = 'rgba(0, 0, 0, 0.04)',
    color = '#3D4A73',
    spanBgColor = 'transparent',
    deepBgcolorMode = false,
  } = props;
  // tab 默认标题及内容
  const defaultData: any = [
    { id: '1', icon: tab1, name: '产量', component: <TabContent colorType={1} />, active: true },
    { id: '2', icon: tab2, name: '国内供应量', component: <TabContent /> },
    { id: '3', icon: tab3, name: '需求', component: <TabContent /> },
    { id: '4', icon: tab4, name: '进出口数据', component: <TabContent /> },
    { id: '5', icon: tab5, name: '库存', component: <TabContent /> },
    { id: '6', icon: tab6, name: '销售', component: <TabContent /> },
    { id: '7', icon: tab7, name: '供需对比', component: <TabContent /> },
    { id: '8', icon: tab8, name: '库存', component: <TabContent /> },
    { id: '9', icon: tab9, name: '销售', component: <TabContent /> },
    { id: '10', icon: tab10, name: '运量', component: <TabContent /> },
    { id: '11', icon: tab11, name: '港口数据', component: <TabContent /> },
    { id: '12', icon: tab12, name: '国际数据', component: <TabContent /> },
  ]
  const [tabData, setTabData]: any = useState([]);
  const [content, setcontent]: any = useState(defaultData[0].component);//默认展示第一个tab的内容
  useEffect(() => {
    if (data && data.length && data.length > 0) {
      setTabData(data);
    } else {
      setTabData(defaultData);
    }
  }, [data])
  return (
    <div className={scss.tabContainer} style={{}}>
      <div className={scss.tabTitles}>
        {tabData && tabData.map((v: any, i: any) => {
          return (
            <span
              key={i}
              className={v.active ? scss.active : scss.defaultSpan}
              style={{
                color: color,
                backgroundColor: v.active ? activeBgColor : spanBgColor,
                paddingRight: deepBgcolorMode ? 28 : 10
              }}
              onClick={() => {
                const data: any = tabData && tabData.map((value: any, index: any) => {
                  value.active = false;
                  if (v.id === value.id) {
                    value.active = true;
                    setcontent(value.component);
                  }
                  return value;
                })
                console.log(data)
                setTabData(data);
              }}
            >
              {
                v.icon.src ? (<Image src={v.icon.src} width={32} height={32}  alt=''/>) : null
              }
              <span className={scss.titles} style={{ color: color }}>{v.name}</span>
            </span>
          )
        })
        }
      </div>
      <div className={scss.liner} style={deepBgcolorMode ? { display: 'none' } : { display: 'inline-block', margin: '0 30px' }}></div>
      <div className={scss.tabContent} style={{
        color: color,
        backgroundColor: bgColor === '#ffffff' ? 'none' : bgColor,
        padding: deepBgcolorMode ? '0 24px' : '0',
      }}>
        {content}
      </div>
    </div>
  )
}
export default Tab;