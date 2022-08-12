import { useState } from "react";
import Image from "next/image";
import styles from "./index.module.scss";
import VideoPng from "../../assets/video.png";
import AddressSvg from "../../assets/img/address.svg";
import VideoSvg from "../../assets/img/video.svg";
import ClockSvg from "../../assets/img/clock.svg";
import CommenSvg from "../../assets/img/commen.svg";
import LogoconventionSvg from '../../assets/img/logoconvention.svg'
import CheckAllSvg from "../../assets/img/checkAll.svg";
import RedRightSvg from "../../assets/img/redRight.svg";
import RedClockSvg from "../../assets/img/redClock.svg";
import AdPng from "../../assets/ad.png";
import Link from "next/link";
import Button from "../Button";

export default function ConventionTraining() {
  const [data, setdata]: any = useState([
    {
      name: '主题：山西省焦化行业协会月度市场分析会',
      provinceName: '湖南',
      cityName: '长沙',
      videoVolume: 1145,
      startTime: '2022-04-16',
      finishTime: '2022-04-19',
      duration: '19:40',
      img: VideoPng,
      content: '山西省焦化行业协会月度市场分析会由山西省焦化行业协会主办，中国煤炭资源网承办。会议为月度例会，定向组织山西各主要焦化企业围绕近期企业销售，库存（钢厂、港口、焦化厂），生产成本，盈亏等情况进行沟通和交流。深度解读当期市场产运销情况和价格走势预判。并结合市场研究成果，邀请国内知名金融机构分享期现操作策略。',
      commenNum: 312,
      tags: [{
        name: '行业前瞻',
        value: 1,
        isActive: true,
      }, {
        name: '升维思考',
        isActive: false,
        value: 2,
      }, {
        name: '新技术',
        isActive: false,
        value: 3,
      }]
    },
    {
      name: '主题：钢铁行业2020年发展研究报告',
      provinceName: '湖南',
      cityName: '长沙',
      videoVolume: 1945,
      startTime: '2022-08-05',
      finishTime: '2022-08-06',
      duration: '19:30',
      img: VideoPng,
      content: '山西省焦化行业协会月度市场分析会由山西省焦化行业协会主办，中国煤炭资源网承办。会议为月度例会，定向组织山西各主要焦化企业围绕近期企业销售，库存（钢厂、港口、焦化厂），生产成本，盈亏等情况进行沟通和交流。深度解读当期市场产运销情况和价格走势预判。并结合市场研究成果，邀请国内知名金融机构分享期现操作策略。',
      commenNum: 122,
      tags: [{
        name: '实用技术',
        value: 1,
        isActive: true,
      }]
    },
    {
      name: '主题：疫情下的国内外经济现状与趋势',
      provinceName: '湖南',
      cityName: '长沙',
      videoVolume: 1145,
      startTime: '2022-08-05',
      finishTime: '2022-08-10',
      duration: '19:30',
      img: VideoPng,
      content: '山西省焦化行业协会月度市场分析会由山西省焦化行业协会主办，中国煤炭资源网承办。会议为月度例会，定向组织山西各主要焦化企业围绕近期企业销售，库存（钢厂、港口、焦化厂），生产成本，盈亏等情况进行沟通和交流。深度解读当期市场产运销情况和价格走势预判。并结合市场研究成果，邀请国内知名金融机构分享期现操作策略。',
      commenNum: 134,
      tags: [{
        name: '市场模型',
        value: 1,
        isActive: false,
      }]
    },
    {
      name: '主题：煤炭数字化后的金融性与行业发展趋势',
      provinceName: '湖南',
      cityName: '长沙',
      videoVolume: 1145,
      startTime: '2022-04-16',
      finishTime: '2022-04-19',
      duration: '19:40',
      img: VideoPng,
      content: '山西省焦化行业协会月度市场分析会由山西省焦化行业协会主办，中国煤炭资源网承办。会议为月度例会，定向组织山西各主要焦化企业围绕近期企业销售，库存（钢厂、港口、焦化厂），生产成本，盈亏等情况进行沟通和交流。深度解读当期市场产运销情况和价格走势预判。并结合市场研究成果，邀请国内知名金融机构分享期现操作策略。',
      commenNum: 312,
      tags: [{
        name: '产业剖析',
        isActive: false,
        value: 1,
      }]
    },
    {
      name: '主题：能源革命-中国能源发展趋势与路径分析',
      provinceName: '湖南',
      cityName: '长沙',
      videoVolume: 1145,
      startTime: '2022-04-16',
      finishTime: '2022-04-19',
      duration: '19:40',
      img: VideoPng,
      content: '山西省焦化行业协会月度市场分析会由山西省焦化行业协会主办，中国煤炭资源网承办。会议为月度例会，定向组织山西各主要焦化企业围绕近期企业销售，库存（钢厂、港口、焦化厂），生产成本，盈亏等情况进行沟通和交流。深度解读当期市场产运销情况和价格走势预判。并结合市场研究成果，邀请国内知名金融机构分享期现操作策略。',
      commenNum: 312,
      tags: [{
        name: '电力',
        isActive: false,
        value: 1,
      }]
    },
    {
      name: '主题：双循环对煤炭布局与结构的影响',
      provinceName: '湖南',
      cityName: '长沙',
      videoVolume: 1145,
      startTime: '2022-04-16',
      finishTime: '2022-04-19',
      duration: '19:40',
      img: VideoPng,
      content: '山西省焦化行业协会月度市场分析会由山西省焦化行业协会主办，中国煤炭资源网承办。会议为月度例会，定向组织山西各主要焦化企业围绕近期企业销售，库存（钢厂、港口、焦化厂），生产成本，盈亏等情况进行沟通和交流。深度解读当期市场产运销情况和价格走势预判。并结合市场研究成果，邀请国内知名金融机构分享期现操作策略。',
      commenNum: 312,
      tags: [{
        name: '趋势',
        isActive: false,
        value: 1,
      }]
    },
    {
      name: '主题：煤炭数字革命与中国数字煤炭市场',
      provinceName: '湖南',
      cityName: '长沙',
      videoVolume: 1145,
      startTime: '2022-04-16',
      finishTime: '2022-04-19',
      duration: '19:40',
      img: VideoPng,
      content: '山西省焦化行业协会月度市场分析会由山西省焦化行业协会主办，中国煤炭资源网承办。会议为月度例会，定向组织山西各主要焦化企业围绕近期企业销售，库存（钢厂、港口、焦化厂），生产成本，盈亏等情况进行沟通和交流。深度解读当期市场产运销情况和价格走势预判。并结合市场研究成果，邀请国内知名金融机构分享期现操作策略。',
      commenNum: 312,
      tags: [{
        name: '行业前瞻',
        value: 1,
        isActive: false,
      }]
    },
    {
      name: '主题：能源革命-中国能源发展趋势与路径分析',
      provinceName: '湖南',
      cityName: '长沙',
      videoVolume: 1145,
      startTime: '2022-04-16',
      finishTime: '2022-04-19',
      duration: '19:40',
      img: VideoPng,
      content: '山西省焦化行业协会月度市场分析会由山西省焦化行业协会主办，中国煤炭资源网承办。会议为月度例会，定向组织山西各主要焦化企业围绕近期企业销售，库存（钢厂、港口、焦化厂），生产成本，盈亏等情况进行沟通和交流。深度解读当期市场产运销情况和价格走势预判。并结合市场研究成果，邀请国内知名金融机构分享期现操作策略。',
      commenNum: 312,
      tags: [{
        name: '电力',
        isActive: false,
        value: 1,
      }]
    },
    {
      name: '主题：双循环对煤炭布局与结构的影响',
      provinceName: '湖南',
      cityName: '长沙',
      videoVolume: 1145,
      startTime: '2022-04-16',
      finishTime: '2022-04-19',
      duration: '19:40',
      img: VideoPng,
      content: '山西省焦化行业协会月度市场分析会由山西省焦化行业协会主办，中国煤炭资源网承办。会议为月度例会，定向组织山西各主要焦化企业围绕近期企业销售，库存（钢厂、港口、焦化厂），生产成本，盈亏等情况进行沟通和交流。深度解读当期市场产运销情况和价格走势预判。并结合市场研究成果，邀请国内知名金融机构分享期现操作策略。',
      commenNum: 312,
      tags: [{
        name: '趋势',
        isActive: false,
        value: 1,
      }]
    },
    {
      name: '主题：煤炭数字革命与中国数字煤炭市场',
      provinceName: '湖南',
      cityName: '长沙',
      videoVolume: 1145,
      startTime: '2022-04-16',
      finishTime: '2022-04-19',
      duration: '19:40',
      img: VideoPng,
      content: '山西省焦化行业协会月度市场分析会由山西省焦化行业协会主办，中国煤炭资源网承办。会议为月度例会，定向组织山西各主要焦化企业围绕近期企业销售，库存（钢厂、港口、焦化厂），生产成本，盈亏等情况进行沟通和交流。深度解读当期市场产运销情况和价格走势预判。并结合市场研究成果，邀请国内知名金融机构分享期现操作策略。',
      commenNum: 312,
      tags: [{
        name: '行业前瞻',
        value: 1,
        isActive: false,
      }]
    },
  ]);
  const [selectData, setSelectData]: any = useState({
    name: '主题：山西省焦化行业协会月度市场分析会',
    provinceName: '湖南',
    cityName: '长沙',
    videoVolume: 1145,
    startTime: '2022-04-16',
    finishTime: '2022-04-19',
    duration: '19:40',
    img: VideoPng,
    content: '山西省焦化行业协会月度市场分析会由山西省焦化行业协会主办，中国煤炭资源网承办。会议为月度例会，定向组织山西各主要焦化企业围绕近期企业销售，库存（钢厂、港口、焦化厂），生产成本，盈亏等情况进行沟通和交流。深度解读当期市场产运销情况和价格走势预判。并结合市场研究成果，邀请国内知名金融机构分享期现操作策略。',
    commenNum: 312,
    tags: [{
      name: '行业前瞻',
      value: 1,
      isActive: true,
    }, {
      name: '升维思考',
      isActive: false,
      value: 2,
    }, {
      name: '新技术',
      isActive: false,
      value: 3,
    }]
  })
  const [selectKey, setSelectKey] = useState(0);
  //是否展示广告
  const [isShowAd, setIsShowAd] = useState(true);

  return (
    <div className={styles.conventionContianer}>
      {/* 产品刊物 */}
      {/* 顶部 */}
      <div className={styles.conventionNav}>
        {/* 标题 */}
        <div className={styles.conventionTitle}>
          <Image src={LogoconventionSvg}></Image>
        </div>
        <Link href="/componentspage/all">
          <a className={styles.conventionLink}><span>查看所有</span> <Image src={CheckAllSvg}></Image></a>
        </Link>
      </div>
      {/* 内容 */}
      <div className={styles.conventionContent}>
        {/*会议详情 */}
        <div className={styles.conventionDetail}>
          <div>
            {/* 会议图片 */}
            <div className={styles.conventionDetailImg}>
              <div>
                <Image src={selectData && selectData.img} layout="responsive"></Image>

                {/* 标签 */}
                <ul className={styles.conventionDetailTags}>
                  {
                    selectData.tags && selectData.tags.length > 0 && selectData.tags.map((item: any, index: any) => {
                      return (
                        <li key={index} className={item.isActive ? styles.active : undefined}>
                          {item.name}
                        </li>
                      )
                    })}
                </ul>
              </div>
            </div>
            {/* 会议内容 */}
            <div className={styles.conventionDetailBox}>
              <div>
                {/* 会议标题 */}
                <h1>{selectData && selectData.name}</h1>
                {/* 会议概要 */}
                <p className={styles.conventionDetailSummery}>{selectData && selectData.content}</p>
                {/* 活动 */}
                <div className={styles.conventionDetailActivity}>
                  <div>
                    <Image src={RedClockSvg}></Image>
                    <span>本次优惠报名 <span>03:29:38</span> 后结束</span>
                  </div>
                  <div>
                    <span className={styles.small}>限时满1000减800</span>
                    <span>去领券</span>
                    <Image src={RedRightSvg}></Image>
                  </div>
                </div>
              </div>
              {/* 功能列表 */}
              <div className={styles.conventionDetailSetting}>
                <Button border={false} radius={false} type="warning">领券围观</Button>

                <ul className={styles.conventionDetailCommen}>
                  <li>
                    <Image src={AddressSvg}></Image>
                    <span>{selectData && selectData.provinceName}·{selectData && selectData.cityName}</span>
                  </li>
                  <li>
                    <Image src={VideoSvg}></Image>
                    <span> {selectData && selectData.videoVolume + '播放量'}</span>
                  </li>
                  <li>
                    <Image width={16} height={16} src={CommenSvg}></Image>
                    <span>评论 {selectData && selectData.commenNum && `(${selectData.commenNum})`}</span>
                  </li>
                  <li>
                    <Image src={ClockSvg}></Image>
                    <span>{selectData && selectData.startTime}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* 广告 */}
          {
            isShowAd ?
              <div className={styles.conventionDetailAd}>
                <Image src={AdPng} layout="responsive"></Image>
                <div className={styles.close} onClick={() => setIsShowAd(false)}>X</div>
              </div>
              : null
          }

        </div>
        {/* 视频列表 */}
        <ul className={styles.conventionList}>
          {
            data.map((item: any, index: any) => {
              return (
                <li key={index} className={styles.conventionItem}
                >
                  {/* 会议图片 */}
                  <div className={styles.conventionItemImg}>
                    <div>
                      <Image src={item.img}></Image>
                    </div>
                    {/* 标签 */}
                    <ul className={styles.conventionTags}>
                      {
                        item.tags && item.tags.length > 0 ? item.tags.map((ele: any, i: any) => {
                          return (
                            <li key={i} className={ele.isActive ? styles.active : undefined}>
                              {ele.name}
                            </li>
                          )
                        }) : null
                      }
                    </ul>
                  </div>
                  {/* 会议标题 */}
                  <p className={styles.conventionItemName}>{item.name}</p>
                  {/* 会议信息 */}
                  <p className={styles.conventionItemInfo}>
                    <span>时间：{item.startTime} (周一)</span>
                    <span></span>
                  </p>
                </li>
              )
            })
          }

        </ul>
      </div>
    </div>
  );
}
