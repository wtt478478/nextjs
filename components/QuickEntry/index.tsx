import { useState, useEffect } from 'react';
import Image from 'next/image';
import scss from './index.module.scss';
import download2 from '../../assets/img/download2.svg';
import frame from '../../assets/img/frame.svg';
import Slider from '../Slider'
interface SonProps {
  type?: number;//快捷入口类型 
  data?: Object | null//数据
}
const QuickEntry: React.FC<SonProps> = (props: any) => {
  const {
    type = 1,
    data=[],
  } = props;
  useEffect(() => {

  }, [])
  const imgList = [
    {
      title: "四川试行主动错避峰负荷电价政策",
      subTitle:
        "四川日报消息，近日，四川省发展改革委印发通知，明确在全省试行主动错避峰负荷电价政策。 政策主要实施范围为国网四川省电力公司供区范围。其中，供电电压等级在10千伏及以上，且单个户号主动错避峰响应能力不低于200千瓦的工业用户，在与国网四川电力asdsdsdsdsdsdsdsd3阿三大苏打大苏打",
      url: require("../../assets/arrow.png"),
    },
    {
      title: "箭头白",
      url: require("../../assets/arrowNone.png"),
      subTitle: "",
    },
    {
      title: "钱",
      url: require("../../assets/money.png"),
      subTitle: "",
    },
    {
      title: "人",
      url: require("../../assets/person.png"),
      subTitle: "",
    },
  ];
  const data1: any = {
    selectData: [
      { id: '1', label: '炼焦煤' },
      { id: '2', label: '冶金煤' },
      { id: '3', label: '动力煤' },
      // { id: '4', label: '焦炭' },
    ],
    allData: [
      { id: '1', label: '原煤产量' },
      { id: '2', label: '电力行业' },
      { id: '3', label: '进口总量' },
      // { id: '4', label: '煤炭' },
    ],
  }
  const data2: any = {
    selectData: [
      { id: '1', label: '炼焦煤' },
      { id: '2', label: '冶金煤' },
      { id: '3', label: '动力煤' },
      // { id: '4', label: '焦炭' },
    ],
    allData: [
      { id: '1', label: '原煤产量' },
      { id: '2', label: '电力行业' },
      { id: '3', label: '进口总量' },
      // { id: '4', label: '煤炭' },
    ],
    report: {
      title: '【动力煤中长期战略报告】',
      subscribe: 2732,
      imgSrc: download2,
      list: [
        { id: '1', label: '中国煤炭周刊' },
        { id: '2', label: '中国煤炭周刊' },
        { id: '3', label: '政策解读及评述' },
        { id: '4', label: '中国煤炭周刊1' },
        { id: '5', label: '中国煤炭周刊1' },
        { id: '6', label: '政策解读及评述1' },
      ]
    }
  }
  const data3: any = {
    selectData: [
      { id: '1', label: '炼焦煤' },
      { id: '2', label: '冶金煤' },
      { id: '3', label: '动力煤' },
      // { id: '4', label: '焦炭' },
    ],
    allData: [
      { id: '1', label: '原煤产量' },
      { id: '2', label: '电力行业' },
      { id: '3', label: '进口总量' },
      // { id: '4', label: '煤炭' },
    ],
    imgList: [
      {
        title: "四川试行主动错避峰负荷电价政策",
        subTitle:
          "四川日报消息，近日，四川省发展改革委印发通知，明确在全省试行主动错避峰负荷电价政策。 政策主要实施范围为国网四川省电力公司供区范围。其中，供电电压等级在10千伏及以上，且单个户号主动错避峰响应能力不低于200千瓦的工业用户，在与国网四川电力asdsdsdsdsdsdsdsd3阿三大苏打大苏打",
        url: require("../../assets/arrow.png"),
      },
      {
        title: "箭头白",
        url: require("../../assets/arrowNone.png"),
        subTitle: "",
      },
      {
        title: "钱",
        url: require("../../assets/money.png"),
        subTitle: "",
      },
      {
        title: "人",
        url: require("../../assets/person.png"),
        subTitle: "",
      },
    ],
    report: {
      title: '【近期刊物】',
      list: [
        { id: '1', label: '中国煤炭周刊1' },
        { id: '2', label: '中国煤炭周刊111' },
        { id: '3', label: '政策解读及评述1' },
        // { id: '4', label: '中国煤炭周刊1' },
        // { id: '5', label: '中国煤炭周刊1' },
        // { id: '6', label: '政策解读及评述1' },
      ]
    }
  }
  const data4: any = [
    {
      category: '煤种类别',
      data: [
        { id: '1', label: '炼焦煤' },
        { id: '2', label: '冶金煤' },
        { id: '3', label: '动力煤' },
        // { id: '4', label: '焦炭' },
      ]
    },
    {
      category: '煤种类别',
      data: [
        { id: '1', label: '炼焦煤' },
        { id: '2', label: '冶金煤' },
        { id: '3', label: '动力煤' },
        // { id: '4', label: '焦炭' },
      ]
    },
    {
      category: '煤种类别',
      data: [
        { id: '1', label: '炼焦煤' },
        { id: '2', label: '冶金煤' },
        { id: '3', label: '动力煤' },
        { id: '4', label: '焦炭' },
      ]
    },
  ]
  return (
    <div className={scss.quickEntry}>
      {
        type === 1 ? (
          <div className={scss.quickContainer1}>
            <div className={scss.partOne}>
              <div className={scss.content}>
                <div className={scss.partOneTop}>快捷入口</div>
                <div className={scss.partOneCenter}>快捷入口</div>
                <div className={scss.partOneFooter}>自定义自己的快捷入口以便今后迅速触达结果</div>
              </div>
            </div>
            <div className={scss.partTwo}>
              {
                data1 && data1.selectData ? data1.selectData.map((v: any, i: any) => {
                  return (
                    <a key={i}>
                      <span className={scss.cicle}>{v.label}</span>
                    </a>
                  )
                }) : null
              }
              <span className={scss.cicle}>+</span>
            </div>
            <div className={scss.partThree}>
              {
                data1 && data1.allData ? data1.allData.map((v: any, i: any) => {
                  return (
                    <a key={i}>
                      <button>{v.label}</button>
                    </a>
                  )
                }) : null
              }
            </div>
          </div>
        ) : type === 2 ? (
          <div className={scss.quickContainer2}>
            <div className={scss.partOne}>
              <div className={scss.content}>
                <div className={scss.partOneCenter}>快捷入口</div>
              </div>
            </div>
            <div className={scss.partTwo}>
              <div className={scss.top}>
                {
                  data2 && data2.selectData ? data2.selectData.map((v: any, i: any) => {
                    return (
                      <a key={i}>
                        <span>{v.label}</span>
                      </a>
                    )
                  }) : null
                }
                <button>+添加</button>
              </div>
              <div className={scss.bottom}>
                {
                  data2 && data2.allData ? data2.allData.map((v: any, i: any) => {
                    return (
                      <a key={i}>
                        <span>{v.label}</span>
                      </a>
                    )
                  }) : null
                }
              </div>
            </div>
            <div className={scss.partThree}>
              <div className={scss.container}>
                <div className={scss.top2}>
                  <span className={scss.title}>{data2.report && data2.report.title}</span>
                  <span className={scss.person}>{data2.report && data2.report.subscribe}人订阅</span>
                </div>
                <div className={scss.bottom}>
                  <div className={scss.img}><Image src={data2.report.imgSrc} width={128} height={185} alt=''></Image></div>
                  <ul>
                    {
                      data2.report && data2.report.list ? data2.report.list.map((v: any, i: any) => {
                        return (
                          <a key={i}><li>{v.label}</li></a>
                        )
                      }) : null
                    }
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ) : type === 3 ? (
          <div className={scss.quickContainer3}>
            <div className={scss.partOne}>
              <div className={scss.content}>
                <div className={scss.partOneCenter}>快捷入口</div>
              </div>
            </div>
            <div className={scss.partTwo}>
              <div className={scss.top}>
                {
                  data3 && data3.selectData ? data3.selectData.map((v: any, i: any) => {
                    return (
                      <a key={i}>
                        <span>{v.label}</span>
                      </a>
                    )
                  }) : null
                }
                <button>+添加</button>
              </div>
              <div className={scss.bottom}>
                {
                  data3 && data3.allData ? data3.allData.map((v: any, i: any) => {
                    return (
                      <a key={i}>
                        <span>{v.label}</span>
                      </a>
                    )
                  }) : null
                }
              </div>
            </div>
            <div className={scss.partThree}>
              <div className={scss.container3}>
                <div className={scss.left}>
                  <div className={scss.img3}>
                    <Slider
                      imgList={data3.imgList}
                      interval={3000}
                      width={100}
                      height={150}
                    />
                  </div>
                </div>
                <div className={scss.right}>
                  <div className={scss.top}>
                    <span className={scss.title3}>{data3.report && data3.report.title}</span>
                  </div>
                  <div className={scss.bottom3}>
                    <ul>
                      {
                        data3.report && data3.report.list ? data3.report.list.map((v: any, i: any) => {
                          return (
                            <a key={i}><li>{v.label}</li></a>
                          )
                        }) : null
                      }
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </div>
        ) : type === 4 ? (
          <div className={scss.quickContainer4}>
            <div className={scss.partOne}>
              <div className={scss.content}>
                <div className={scss.partOneCenter}>快捷入口</div>
              </div>
            </div>
            <div className={scss.partTwo4}>
              {
                data4 ? data4.map((v: any, i: any) => {
                  return (
                    <div key={i} className={scss.container}>
                      <div className={scss.box}>
                        <div className={scss.title}>
                          {v.category}
                        </div>
                        <div className={scss.content}>
                          {
                            v.data && v.data.map((val:any,ind:any) => {
                              return (
                                <a key={ind}><span>{val.label}</span></a>
                              )
                            })
                          }
                        </div>
                        <div className={scss.more}>
                          <button>更多</button>
                        </div>
                      </div>
                    </div>
                  )
                }):null
              }

            </div>
          </div>
        ) : null
      }
    </div>
  )
}
export default QuickEntry;