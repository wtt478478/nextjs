import { useState } from "react";
import Image from "next/image";
import styles from "./index.module.scss";
import BookPng from "../../assets/book.png";
import CommenSvg from "../../assets/img/commen.svg";
import UnlikeSvg from "../../assets/img/unlike.svg";
import CheckAllSvg from "../../assets/img/checkAll.svg";
import LogopublicationSvg from '../../assets/img/logopublication.svg'

import Link from "next/link";
import Button from "../Button";

const colors = ['rgba(100, 133, 184, 0.4)', 'rgba(39, 39, 37, 0.4)', 'rgba(1, 94, 197, 0.4)', 'rgba(186, 9, 25, 0.3)', '#9FABAB', 'rgba(205, 212, 214, 0.4)', 'rgba(130, 165, 156, 0.4)', 'rgba(0, 114, 191, 0.4)']
export default function ProductPublications() {
  const [data, setdata]: any = useState([
    {
      name: '“三西”地区煤炭运输格局未来变化趋势研究',
      publicaitonType: '日刊',
      publicaitonCycle: '周度',
      publicaitonNum: 12,
      fileNum: 40,
      finishTime: '每周一',
      img: BookPng,
      content: '新冠疫情仍在全球蔓延。图为3月12日，中国与世界卫生组织在北京以视频连线方式举办新冠肺炎防治中国经验国际通报会。以色列内盖夫本-古里安大学公共卫生系主任纳达夫·戴也不现实。',
      price: 0.0,
      type: '电力',
      commenNum: 312,
      subscribeNum: 1551,
      readType: '必看系列',
      isRead: false,
    },
    {
      name: '山西焦炭',
      publicaitonType: '周刊',
      publicaitonCycle: '周度',
      publicaitonNum: 12,
      fileNum: 40,
      finishTime: '每周一',
      img: BookPng,
      content: '新冠疫情仍在全球蔓延。图为3月12日，中国与世界卫生组织在北京以视频连线方式举办新冠肺炎防治中国经验国际通报会。以色列内盖夫本-古里安大学公共卫生系主任纳达夫·戴也不现实。',
      price: 0.0,
      type: '电力',
      commenNum: 312,
      subscribeNum: 1551,
      readType: '必看系列',
      isRead: false,
    },
    {
      name: '山西煤层气资源评价及开发利用',
      publicaitonType: '周刊',
      publicaitonCycle: '周度',
      publicaitonNum: 12,
      fileNum: 40,
      finishTime: '每周一',
      img: BookPng,
      content: '新冠疫情仍在全球蔓延。图为3月12日，中国与世界卫生组织在北京以视频连线方式举办新冠肺炎防治中国经验国际通报会。以色列内盖夫本-古里安大学公共卫生系主任纳达夫·戴也不现实。',
      price: 0.0,
      type: '电力',
      commenNum: 312,
      subscribeNum: 1551,
      readType: '必看系列',
      isRead: false,
    },
    {
      name: '2017-2026中国煤炭市场分析及预测',
      publicaitonType: '月刊',
      publicaitonCycle: '月度',
      publicaitonNum: 12,
      fileNum: 40,
      finishTime: '每周一',
      img: BookPng,
      content: '新冠疫情仍在全球蔓延。图为3月12日，中国与世界卫生组织在北京以视频连线方式举办新冠肺炎防治中国经验国际通报会。以色列内盖夫本-古里安大学公共卫生系主任纳达夫·戴也不现实。',
      price: 0.0,
      type: '电力',
      commenNum: 312,
      subscribeNum: 1551,
      readType: '必看系列',
      isRead: false,
    },
    {
      name: '山西出口煤炭资源评介',
      publicaitonType: '周刊',
      publicaitonCycle: '周度',
      publicaitonNum: 12,
      fileNum: 40,
      finishTime: '每周一',
      img: BookPng,
      content: '新冠疫情仍在全球蔓延。图为3月12日，中国与世界卫生组织在北京以视频连线方式举办新冠肺炎防治中国经验国际通报会。以色列内盖夫本-古里安大学公共卫生系主任纳达夫·戴也不现实。',
      price: 0.0,
      type: '电力',
      commenNum: 312,
      subscribeNum: 1551,
      readType: '必看系列',
      isRead: false,
    },
    {
      name: '中国进口煤限制政策背景下的进口煤源替代性研究',
      publicaitonType: '日刊',
      publicaitonCycle: '周度',
      publicaitonNum: 12,
      fileNum: 40,
      finishTime: '每周一',
      img: BookPng,
      content: '新冠疫情仍在全球蔓延。图为3月12日，中国与世界卫生组织在北京以视频连线方式举办新冠肺炎防治中国经验国际通报会。以色列内盖夫本-古里安大学公共卫生系主任纳达夫·戴也不现实。',
      price: 0.0,
      type: '电力',
      commenNum: 312,
      subscribeNum: 1551,
      readType: '必看系列',
      isRead: false,
    },
    {
      name: '2020中国煤炭成本变动分析及2021-2025年成本预测',
      publicaitonType: '月刊',
      publicaitonCycle: '月度',
      publicaitonNum: 12,
      fileNum: 40,
      finishTime: '每周一',
      img: BookPng,
      content: '新冠疫情仍在全球蔓延。图为3月12日，中国与世界卫生组织在北京以视频连线方式举办新冠肺炎防治中国经验国际通报会。以色列内盖夫本-古里安大学公共卫生系主任纳达夫·戴也不现实。',
      price: 0.0,
      type: '电力',
      commenNum: 312,
      subscribeNum: 1551,
      readType: '必看系列',
      isRead: false,
    },
    {
      name: '2021年中国煤炭产能分析及2022-2016年煤炭产能预测',
      publicaitonType: '周刊',
      publicaitonCycle: '周度',
      publicaitonNum: 12,
      fileNum: 40,
      finishTime: '每周一',
      img: BookPng,
      content: '新冠疫情仍在全球蔓延。图为3月12日，中国与世界卫生组织在北京以视频连线方式举办新冠肺炎防治中国经验国际通报会。以色列内盖夫本-古里安大学公共卫生系主任纳达夫·戴也不现实。',
      price: 0.0,
      type: '电力',
      commenNum: 312,
      subscribeNum: 1551,
      readType: '必看系列',
      isRead: false,
    },
  ]);
  const [selectData, setSelectData]: any = useState({
    name: '“三西”地区煤炭运输格局未来变化趋势研究',
    publicaitonType: '日刊',
    publicaitonCycle: '周度',
    publicaitonNum: 12,
    fileNum: 40,
    finishTime: '每周一',
    img: BookPng,
    content: '新冠疫情仍在全球蔓延。图为3月12日，中国与世界卫生组织在北京以视频连线方式举办新冠肺炎防治中国经验国际通报会。以色列内盖夫本-古里安大学公共卫生系主任纳达夫·戴也不现实。',
    price: 0.0,
    type: '电力',
    commenNum: 312,
    subscribeNum: 1551,
    readType: '必看系列',
    isRead: false,
  })
  const [selectKey, setSelectKey] = useState(0)

  return (
    <div className={styles.productContianer}>
      {/* 产品刊物 */}
      {/* 顶部 */}
      <div className={styles.productNav}>
        {/* 标题 */}
        <div className={styles.productTitle}>
          <Image src={LogopublicationSvg}></Image>
        </div>
        <Link href="/">
          <a className={styles.productLink}><span>查看所有刊物</span> <Image src={CheckAllSvg}></Image></a>
        </Link>
      </div>
      {/* 内容 */}
      <div className={styles.productContent}>
        {/* 左侧刊物详情 */}
        <div className={styles.productDetail}>
          {/* 刊物图片 */}
          <div className={styles.productDetailImg}>
            <div>
              <Image src={selectData && selectData.img}></Image>
            </div>
            
          </div>
          {/* 刊物内容 */}
          <div className={styles.productDetailBox}>
            {/* 刊物标题 */}
            <h1>{selectData && selectData.name}</h1>
            {/* 标签 */}
            <ul className={styles.productDetailTag}>
              <li className={styles.tagBlack}>{selectData && selectData.readType}</li>
              <li className={styles.tagYellow}>{selectData && selectData.type}</li>
              <li className={styles.tagGrey}>{selectData && selectData.subscribeNum}人订阅</li>
            </ul>
            <ul className={styles.productDetailInfo}>
              <li>发行周期：{selectData && selectData.publicaitonCycle}</li>
              <li>报告页数：{selectData && selectData.publicaitonNum}页左右</li>
              <li>附图/表数量：{selectData && selectData.fileNum}个左右</li>
              <li>完成时间：{selectData && selectData.finishTime}</li>
            </ul>
            {/* 刊物概要 */}
            <p className={styles.productDetailSummery}>{selectData && selectData.content}</p>
            {/* 价格 */}
            <p className={styles.productDetailPrice}><span>￥</span><span>{selectData && selectData.price}</span></p>
            <ul className={styles.productDetailCommen}>
              <li>
                <Image width={13} height={13} src={CommenSvg}></Image>
                <span>评论 {selectData && selectData.commenNum && `(${selectData.commenNum})`}</span>
              </li>
              <li>
                {
                  selectData && selectData.isRead ?
                    <> <Image width={13} height={13} src={UnlikeSvg}></Image>
                      <span>订阅</span>
                    </>
                    :
                    <> <Image width={13} height={13} src={UnlikeSvg}></Image>
                      <span>已订阅</span>
                    </>
                }

              </li>
            </ul>
            <div>
              <Button border={false} radius={false} type="warning" styles={{width:'auto'}}>新人免费读</Button>
            </div>
          </div>
        </div>
        {/* 右侧刊物列表 */}
        <ul className={styles.productList}>
          {
            data.map((item: any, index: any) => {
              return (
                <li key={index} className={`${styles.productItem} ${selectKey === index ? styles.active : undefined}`}
                  onClick={() => {
                    setSelectData(item);
                    setSelectKey(index)
                  }}
                >
                  {/* 刊物图片 */}
                  <p className={styles.productItemImg} style={{ backgroundColor: colors[index] }}>
                    <Image src={item.img} className={styles.itemImage}></Image>
                  </p>
                  {/* 刊物标题 */}
                  <p className={styles.productItemName}>{item.name}</p>
                  {/* 刊物类型 */}
                  <p className={styles.productItemType}>{item.publicaitonType}</p>
                </li>
              )
            })
          }

        </ul>
      </div>
    </div>
  );
}
