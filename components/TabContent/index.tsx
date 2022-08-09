import { useState, useEffect } from 'react';
import Image from 'next/image';
import scss from './index.module.scss';
import tab2 from '../assets/img/tab2.svg';
import tab3 from '../assets/img/tab3.svg';
import tab4 from '../assets/img/tab4.svg';
import tab5 from '../assets/img/tab5.svg';
interface SonProps {
  subscribeData?: object | null;//订阅数据
  data?: object | null;//数据
  mode?: string;//模式 'pithy'--简洁'complex'--复杂
  colorType?: number;//类型 1--浅色系 2-深色系
}
const TabContent: React.FC<SonProps> = (props: any) => {
  const {
    data = [],
    mode = 'complex',
    colorType = 2,
  } = props;
  const subscribedata: any = [
    { label: '焦炭/CR焦炭价格指数', value: '1', alwaysSee: true },
    { label: '冶金煤/辽宁', value: '2', alwaysSee: false },
    { label: '动力煤/电厂', value: '3', alwaysSee: false },
  ]
  const allData: any = [
    { label: 'CCI价格指数', id: '1', icon: tab2, content: '自2008年完成了中国煤炭指数体系的设计以来，汾渭能源曾与美国普氏能源进行了多年的...', options: ['最新', '统计', '预测'] },
    { label: '澳大利亚海波因特炼焦煤', id: '2', icon: tab3, content: '自2008年完成了中国煤炭指数体...', options: ['数据推演', '统计', '预测'] },
    { label: '无烟块煤供应量', id: '3', icon: tab4, content: '自2008年完成了中国煤炭指数体系的设计以来，汾渭能源曾与美国普氏能源进行了多年的自2008年完成了中国煤炭指数体系的设计以来，汾渭能源曾与美国普氏能源进行了多年的...', options: ['数据推演', '统计', '预测'] },
    { label: '无烟块煤供应量', id: '4', icon: tab5, content: '自2008年完成了中国煤炭指数体系的设计以来，汾渭能源曾与美国普氏能源进行了多年的...', options: ['数据推演', '统计', '预测'] },
    { label: 'CCI价格指数', id: '5', icon: tab2, content: '自2008年完成了中国煤炭指数体系的设计以来，汾渭能源曾与美国普氏能源进行了多年的...', options: ['最新', '统计', '预测'] },
    { label: '澳大利亚海波因特炼焦煤', id: '6', icon: tab3, content: '自2008年完成了源进行了多年的...', options: ['数据推演', '统计', '预测'] },
  ]
  useEffect(() => {

  }, [])
  return (
    <div className={scss.contentContainer}>
      <div className={scss.subscribe} style={mode === 'pithy' ? { marginBottom: 37.5 } : {}}>
        {
          mode === 'complex' ? (
            <>
              <div className={scss.title}>已订阅</div>
            </>
          ) : null
        }
        {
          subscribedata.length && subscribedata.length > 0 ? subscribedata.map((v: any, i: any) => {
            return (
              <a key={i}>
                <span style={{}}>
                  {v.label}
                  {v.alwaysSee ? <button>常看</button> : null}
                </span>
              </a>
            )
          }) : null
        }
      </div>
      <div className={scss.allData}>
        {
          mode === 'complex' ? (
            <>
              <div className={scss.title}>全部</div>
            </>
          ) : null
        }
        <div className={scss.container}>
          {allData.length && allData.length > 0 ? allData.map((v: any, i: any) => {
            return (
              <div className={scss.box} key={i}>
                <div className={scss.top}>
                  <Image src={v.icon.src} width={36} height={36}  alt=''/>
                  <span className={scss.titlespan}>{v.label}</span>
                </div>
                <div className={scss.content} style={colorType === 1 ? { color: 'rgb(61, 74, 115)' } : { color: 'rgba(255, 255, 255, 0.6)' }}>{v.content}</div>
                <div className={scss.options}>
                  {v.options && v.options.length && v.options.length > 0 ? v.options.map((val: any, ind: any) => {
                    return (
                      <button key={ind} style={colorType === 1 ? { color: 'rgb(61, 74, 115)',border: '1px solid rgb(61, 74, 115)' } : { color: '#FFFFFF' ,border: '1px solid rgba(255, 255, 255, 0.3)'}}>{val}</button>
                    )
                  }) : null
                  }
                </div>
              </div>

            )
          }) : null
          }
        </div>
      </div>
    </div>
  )
}
export default TabContent;