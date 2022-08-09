
import { useEffect, useRef, useState } from 'react';
import styles from './index.module.scss';
import Image from "next/image";

import * as echarts from 'echarts/core';
import type {
  TitleComponentOption,
  ToolboxComponentOption,
  TooltipComponentOption,
  GridComponentOption,
  LegendComponentOption,
} from 'echarts/components';
import {
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  DataZoomComponent
} from 'echarts/components';
import type { LineSeriesOption } from 'echarts/charts';
import { BarChart, LineChart, PieChart } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

// import MySelect from '../../Select';
import dynamic from 'next/dynamic'
import Button from '../../Button';
import Datepicker from '../../Datepicker';
import memberPng from '../../../assets/member.png'
import sliderSvg from '../../../assets/img/slider.svg'


const MySelect = dynamic(() => import('../../Select'), {
  ssr: false,
})

echarts.use([
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  DataZoomComponent,
  LineChart,
  PieChart,
  BarChart,
  CanvasRenderer,
  UniversalTransition,
]);
type EChartsOption = echarts.ComposeOption<
  | TitleComponentOption
  | ToolboxComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | LegendComponentOption
  | LineSeriesOption
>;

interface SonProps {
  title?: string; // 标题
  seriesData?: { name: string; type: string; data: (string | number)[] }[] | {}; //图表数据
  /** 横坐标轴数据 */
  xAxis?: (number | string)[];
  /** 图例 */
  legend?: object | null;
  /**默认选中图例 */
  selectedLegend?: object | null;
  isOpenMember?: boolean;//是否开通会员
}

const makerIconLines = `path://M15.0975 5.052C15.0975 4.49971 14.6498 4.052 14.0975 4.052C13.5452 4.052 13.0975 4.49971 13.0975 5.052H15.0975ZM2.90234 5.052C2.90234 3.94369 3.22514 3.24767 3.59708 2.84474C3.96929 2.44151 4.4546 2.25859 4.94413 2.27327C5.87747 2.30128 7.0459 3.10147 7.0459 5.052H9.0459C9.0459 2.14914 7.14255 0.338329 5.00411 0.274174C3.95775 0.242783 2.90718 0.643498 2.12747 1.48817C1.34749 2.33315 0.902344 3.5493 0.902344 5.052H2.90234ZM7.0459 5.052C7.0459 7.96 8.93627 9.71036 11.0641 9.72656C12.0934 9.7344 13.1211 9.32375 13.8847 8.50134C14.6517 7.67532 15.0975 6.49653 15.0975 5.052H13.0975C13.0975 6.08023 12.7868 6.7445 12.4191 7.14046C12.0481 7.54004 11.5629 7.7303 11.0793 7.72662C10.1813 7.71979 9.0459 6.99738 9.0459 5.052H7.0459Z`

const makerIconBar = `path://M4.49976 5.18408V8.18408H7.49976V5.18408H4.49976ZM0.999756 0.684082C0.447471 0.684082 -0.000244141 1.1318 -0.000244141 1.68408V11.6841C-0.000244141 12.2364 0.447471 12.6841 0.999756 12.6841H10.9998C11.552 12.6841 11.9998 12.2364 11.9998 11.6841V1.68408C11.9998 1.1318 11.552 0.684082 10.9998 0.684082H0.999756Z`
// `image://${rectmakerSvg.src}`
const makerIconline = `path://M10 15a3 3 0 0 1 3 -3h20a3 3 0 0 1 3 3v0a3 3 0 0 1 -3 3h-20a3 3 0 0 1 -3 -3z`

//图例翻页按钮left
const makerPageLeft = `path://M0.272269 5.2937C0.070539 5.13355 0.0705391 4.82727 0.272269 4.66713L5.22893 0.73225C5.49107 0.524146 5.87763 0.710831 5.87763 1.04553L5.87763 8.91529C5.87763 9.24999 5.49107 9.43668 5.22893 9.22858L0.272269 5.2937Z`
const makerPageRight = `path://M5.72663 4.66712C5.92836 4.82726 5.92836 5.13354 5.72663 5.29369L0.76997 9.22856C0.507826 9.43667 0.121268 9.24998 0.121268 8.91528L0.121268 1.04552C0.121268 0.71082 0.507827 0.524135 0.769971 0.732239L5.72663 4.66712Z`

const ChartComponent: React.FC<SonProps> = (props: any) => {

  const {
    seriesData,
    xAxis,
    isOpenMember,
    selectedLegend,
    legend
  } = props;
  const echartsRef: any = useRef(null);

  const defaultSeries: any = [
    {
      type: 'lines',
      data: [],
      label: {
        show: false
      },
      emphasis: {
        label: { show: false }
      }
    }
  ];
  const colors = ['#1D1D1D', '#A4351D', '#F69A45', '#F6CD45', '#FFFCBB', '#33DC6D', '#8338EC', '#E05353',
    '#FFE3AE',
    '#A18FEF',
    '#FFB084',
    '#F9C920',
    '#4318FF',
    '#FF6F1E',
    '#8C3AEA',
    '#F1426D',
    '#FFBB38',
    '#8C3AEA',
    '#F1426D',
    '#FFBB38',
    '#01F1E3',
    '#FF708B',
    '#20D489',
    '#FFBB38',
  ];

  // 时间段
  const timeData = [
    { label: '近1日', value: 1 },
    { label: '近3日', value: 2 },
    { label: '近7日', value: 3 },
    { label: '近15日', value: 4 },
    { label: '近1月', value: 5 },
  ]

  // 图表类型
  const chartType = [
    { label: '折线图表', value: 1 },
    { label: '饼图', value: 2 },
    { label: '柱状图', value: 3 },
    { label: '面积图', value: 4 },
  ]
  //图类型
  const chartTypesTab = [
    { label: '趋势图', value: 0 },
    { label: '四季图', value: 1 },
  ]
  const [typesTab, settypesTab] = useState(0);

  //开通VIP
  const [openMember, setOpenMember] = useState(isOpenMember)

  //默认选中图例
  const [selectlegends, setSelectlegends]: any = useState({})

  let myChart: any;


  const createEcharts = () => {

    let series: any = [];
    let legend: any = [];

    console.log(selectlegends);

    if (seriesData.length > 0) {
      series = seriesData.map((item: any, index: any) => {
        if (item.type === 'line') {
          legend.push({ name: item.name, icon: makerIconline });
          return {
            type: 'line',
            name: item.name,
            data: item.data,
            smooth: true,
            connectNulls: true,
            lineStyle: {
              color: colors[index],
              width: 4,
            },
            itemStyle: {
              color: colors[index],
            },
            showSymbol: false,
            emphasis: {
              focus: 'series'
            },
          }
        } if (item.type === 'lines') {
          legend.push({ name: item.name, icon: makerIconLines });
          return {
            type: 'line',
            name: item.name,
            data: item.data,
            label: {
              show: false
            },
            smooth: true,
            lineStyle: {
              width: 0,
              // color: colors[index],
            },
            showSymbol: false,
            areaStyle: {
              color: colors[index],
              opacity: 0.9
            },
            itemStyle: {
              color: colors[index],
            },
            emphasis: {
              focus: 'series'
            },
          }
        } if (item.type === 'bar') {
          legend.push({ name: item.name, icon: "roundRect" });
          // legend.push({ name: item.name, icon: makerIconBar ,itemStyle:{borderColor:'#ffffff',borderWidth:2}});
          return {
            type: 'bar',
            name: item.name,
            data: item.data,
            barMaxWidth: 30,
            barGap: 0,
            showBackground: true,
            itemStyle: {
              color: colors[index],
              opacity: 0.9
            },
            backgroundStyle: {
              opacity: 0
            },
            label: {
              show: false
            },
            emphasis: {
              focus: 'series'
            },
          }
        }
        return {}
      })
    }


    myChart = echarts.init(echartsRef.current);
    const option: EChartsOption | any = {
      color: colors,
      tooltip: {
        trigger: 'axis',
        // axisPointer: {
        //   type: 'cross'
        // },
        confine: true,
      },
      dataZoom: [
        {
          type: 'slider',
          filterMode: 'filter', // 设定为 'filter' 从而 X 的窗口变化会影响 Y 的范围。
          bottom: 0,
          height: 26,
          start: 0,
          end: 100,
          fillerColor: '#F6CD45',
          brushSelect: false,
          handleIcon: `image://${sliderSvg.src}`,
          backgroundColor: 'rgba(0, 0, 0, 0.04)',
          borderColor: 'rgba(0,0,0,0)',
          dataBackground: {
            lineStyle: {
              color: 'rgba(0, 0, 0, 0.3)',
              width: 1,
            }
          },
          selectedDataBackground: {
            lineStyle: {
              color: '#000000)',
              width: 1,
            }
          }
        },
      ],
      legend: {
        type: 'scroll',
        pageIcons: {
          horizontal:[makerPageLeft,makerPageRight],
        },
        pageTextStyle: {
          color: '#000000' ,
          fontWeight: '400' ,
          fontSize: 14 ,
        },
        pageIconSize:9,
        itemWidth: 16,
        itemHeight: 16,
        itemGap: 18,
        left: 0,
        selected: selectlegends,
        data: legend,
        textStyle: {
          color: '#000000',
          fontSize: 14,
        },
      },
      grid: {
        left: 20,
        bottom: 40,
        top: 80,
        right: 35,
        containLabel: true,
      },
      yAxis: {
        name: '万吨',
        nameTextStyle: {
          padding: [0, 0, 0, -50]
        },
        type: 'value',
        splitLine: {
          show: false,
          // lineStyle: {
          //   color: 'rgba(0, 0, 0, 0.16)',
          //   type: 'dashed',
          // },
        },
        axisLabel: {
          margin: 12,
          textStyle: {
            color: 'rgba(0,0,0,0.6)',
            fontSize: 12
          },
        },
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        axisLine: {
          lineStyle: {
            color: 'rgba(0, 0, 0, 0.16)',
            type: 'solid'
          },
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: 'rgba(0, 0, 0, 0.16)',
            type: 'dashed',
          },
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          margin: 16,
          textStyle: {
            color: 'rgba(0,0,0,0.6)',
            fontSize: 12
          },
        },
      },
      series: series.length > 0 ? series : defaultSeries,
      // series: series,
    };
    myChart.setOption(option);
    window.addEventListener('resize', listenEvent);
  };

  // 销毁事件
  function listenEvent() {
    myChart.resize();
  }

  useEffect(() => {
    return () => {
      window.removeEventListener('resize', listenEvent);
    };
  }, []);
  let flag = true;
  useEffect(() => {
    console.log(selectlegends);

    if (seriesData && seriesData.length > 0) {
      createEcharts()
      if (myChart && flag) {
        myChart.resize();
        flag = false;
      }
    }

  }, [seriesData, selectlegends]);

  useEffect(() => {
    // if (selectedLegend && selectedLegend.length > 0) {
    let selected: any = {};
    legend.map((item: any) => {
      if (selectedLegend && selectedLegend.length > 0 && selectedLegend.some((ele: any) => ele.label === item)) {
        selected[item] = true
      } else {
        selected[item] = false
      }
    })
    setSelectlegends(selected)

  }, [selectedLegend]);

  return (
    <div className={styles.chartContent}>
      {/* 顶部筛选条件 */}
      <form className={styles.chartTop}>
        {/* 顶部筛选条件 */}
        <div className={styles.chartTopLeft}>
          <Button icon="prevPage"></Button>
          <Button icon="nextPage" disable></Button>
          <MySelect options={timeData} />
          <Datepicker styles={{ marginLeft: 8 }} />
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
          <Button icon="download">导出</Button>
          <MySelect options={chartType} size="mediu" />
          {/* tab切换 */}
          <ul className={styles.chartTab}>
            {
              chartTypesTab.map((item: any, index: any) => {
                return (
                  <li className={index === typesTab ? styles.active : ''}
                    key={index}
                    onClick={() => {
                      settypesTab(item.value);
                    }}
                  >{item.label}</li>
                )
              })
            }
          </ul>
        </div>


      </form>
      <div className={styles.chartBox}>
        {/* 开通会员页面 */}
        {/* 图表 */}
        <div ref={echartsRef} style={{ height: '100%' }}></div>
        {
          !openMember ?
            <div className={styles.member}>
              <Image width={103} height={109} src={memberPng}></Image>
              <p className={styles.memberTitle}>开通VIP</p>
              <p className={styles.memberText}>开通数据VIP/订阅单品即可解锁当前数据</p>
              <p>
                <Button onClick={() => setOpenMember(true)}>立即开通</Button>
                <Button styles={{ width: 'auto', marginLeft: 8 }} onClick={() => setOpenMember(true)}>试看本条 (16)</Button>
              </p>
            </div>
            : null
        }
      </div>


    </div>
  );
};
export default ChartComponent;
