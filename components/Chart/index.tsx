// import MySelect from '../Select'
import styles from './index.module.scss'
// import { Area, DualAxes, Mix } from '@antv/g2plot';
import { useEffect, useRef, useState } from "react";
// import ChartComponent from './echarts';

import dynamic from 'next/dynamic'
import Button from '../Button';
import { use } from 'echarts/core';

const ChartComponent = dynamic(
  () => import('./echarts'),
  { ssr: false }
)
const MySelect = dynamic(() => import('../Select'), {
  ssr: false,
})
export default function Slider(props: any) {
  // 预设
  const settingData = [
    { label: '炼焦煤（自定义-未保存1）', value: 1 },
    { label: '动力煤（自定义-未保存1）', value: 2 },
    { label: '焦炭（自定义-未保存1）', value: 3 },
  ]
  // 指数
  const indexData = [
    { label: 'CCI进口4700', value: 1 },
    { label: 'CCI进口3800', value: 2 },
    { label: 'CCI5800', value: 3 },
    { label: 'CCI进口2500', value: 4 },
    { label: 'CCI进口470', value: 5 },
    { label: 'CCI进口550', value: 6 },
  ]
  // 指标
  const targetData = [
    { label: '按指数名称拆分', value: 1 },
  ]

  const [setting, setSetting] = useState(null);
  const [index, setIndex] = useState([{ label: 'CCI进口4700', value: 1 },
  { label: 'CCI进口3800', value: 2 },
  { label: 'CCI5800', value: 3 },
  { label: 'CCI进口2500', value: 4 }]);
  const [target, setTarget] = useState(null);

  //图表数据
  const chartData = {
    seriesData: [
      {
        name: 'CCI进口4700',
        type: 'bar',
        data: [
          ['2022-07-10', 1340],
          ['2022-07-11', 1144],
          ['2022-07-12', 1790],
          ['2022-07-13', 1000],
          ['2022-07-14', 907],
          ['2022-07-15', 563],
          ['2022-07-16', 1970],
          ['2022-07-17', 1380],
          ['2022-07-18', 1430],
        ],
      },
      {
        name: 'CCI进口3800',
        type: 'line',
        data: [
          ['2022-07-10', 1900],
          ['2022-07-11', 1144],
          ['2022-07-12', 1730],
          ['2022-07-13', 180],
          ['2022-07-14', 1207],
          ['2022-07-15', 980],
          ['2022-07-16', 1190],
          ['2022-07-17', 1380],
          ['2022-07-18', 1600],
        ],
      },
      {
        name: 'CCI5800',
        type: 'lines',
        data: [
          ['2022-07-10', 1340],
          ['2022-07-11', 1204],
          ['2022-07-12', 1300],
          ['2022-07-13', 1000],
          ['2022-07-14', 1230],
          ['2022-07-15', 1563],
          ['2022-07-16', 652],
          ['2022-07-17', 800],
          ['2022-07-18', 900],
        ],
      },
      {
        name: 'CCI进口2500',
        type: 'lines',
        data: [
          ['2022-07-10', 1140],
          ['2022-07-11', 1244],
          ['2022-07-12', 1390],
          ['2022-07-13', 1080],
          ['2022-07-14', 987],
          ['2022-07-15', 763],
          ['2022-07-16', 1470],
          ['2022-07-17', 1300],
          ['2022-07-18', 1530],
        ],
      },
      {
        name: 'CCI进口470',
        type: 'lines',
        data: [
          ['2022-07-10', 1130],
          ['2022-07-11', 1004],
          ['2022-07-12', 1190],
          ['2022-07-13', 1010],
          ['2022-07-14', 1307],
          ['2022-07-15', 963],
          ['2022-07-16', 1270],
          ['2022-07-17', 1180],
          ['2022-07-18', 1130],
        ],
      },
      {
        name: 'CCI进口550',
        type: 'lines',
        data: [
          ['2022-07-10', 940],
          ['2022-07-11', 1244],
          ['2022-07-12', 1700],
          ['2022-07-13', 1050],
          ['2022-07-14', 607],
          ['2022-07-15', 663],
          ['2022-07-16', 1070],
          ['2022-07-17', 1000],
          ['2022-07-18', 1230],
        ],
      },
    ],
    xAxis:
      ['2022-07-10',
        '2022-07-11',
        '2022-07-12',
        '2022-07-13',
        '2022-07-14',
        '2022-07-15',
        '2022-07-16',
        '2022-07-17',
        '2022-07-18',
      ],
    legend: ['CCI进口4700', 'CCI进口3800', 'CCI5800', 'CCI进口2500', 'CCI进口470', 'CCI进口550']
  };

  return (
    <div className={styles.chartContainer}>
      {/* 左侧自定义图表属性区 */}
      <aside className={styles.chartProps}>
        {/* 标题 */}
        <div className={styles.chartPropsHeader}>
          <h1 className={styles.title}>自定义预设</h1>
          <p className={styles.tip}>可直接使用既定预设/调整参数轻松生成自定义预设并保存它，以便今后快速切换～</p>
        </div>
        {/* 设置属性 */}
        <div className={styles.chartPropsBody}>
          <form className={styles.chartPropsForm}>
            <div className={styles.chartPropsFormItem}>
              <label className={styles.label}>使用预设</label>
              <MySelect options={settingData} placeholder="使用预设" onChange={(newValue: any, actionMeta: any)=>{
                console.log(newValue,actionMeta,'使用预设');
              }} />
            </div>
            <div className={styles.chartPropsFormItem}>
              <label className={styles.label}>选择指数</label>
              <MySelect options={indexData} isMulti placeholder="选择指数" onChange={(newValue: any, actionMeta: any)=>{
                console.log(newValue,actionMeta,'选择指数');
                setIndex(newValue)
              }}
              defaultValue={index} 
              />
            </div>
            <div className={styles.chartPropsFormItem}>
              <label className={styles.label}>指标信息</label>
              <MySelect options={targetData} placeholder="指标信息" onChange={(newValue: any, actionMeta: any)=>{
                console.log(newValue,actionMeta,'指标信息');
              }} />
            </div>
            <div className={styles.chartPropsFormBtns}>
              <Button icon="reset">重置</Button>
              <Button styles={{width:'auto'}} icon="save" type="warning">保存预设</Button>
            </div>
          </form>
        </div>
      </aside>
      {/* 图表内容区 */}
      {/* <div className={styles.chartContent}>
        <form className={styles.chartTop}>
          <div className={styles.chartTopLeft}>
            <button>{'<'}</button>
            <button>{'>'}</button>
            <MySelect options={timeData} />
          </div>
          <div className={styles.chartTopRight}>
            <p>
              <label>
                <input type="radio" name='timeType' /> 日度
              </label>
              <label>
                <input type="radio" name='timeType' /> 旬度
              </label>
              <label>
                <input type="radio" name='timeType' /> 月度
              </label>
              <label>
                <input type="radio" name='timeType' /> 年度
              </label>
            </p>
            <button>导出</button>
            <MySelect options={chartType} />
            <ul className={styles.chartTab}>
              <li className={styles.active}>趋势图</li>
              <li>四季图</li>
            </ul>
          </div>

        </form>
        <div ref={container} style={{ height: 200 }}></div>
        <div ref={container1} style={{ flex: 1 }}></div>
      </div> */}
      <ChartComponent seriesData={chartData.seriesData} xAxis={chartData.xAxis} legend={chartData.legend} isOpenMember={false} selectedLegend={index} />
    </div>
  )
}
